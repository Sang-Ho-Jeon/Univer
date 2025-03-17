import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'react-native-deck-swiper';
import Card from './Card';
import tw from "twrnc";
import { mock } from '../../mock/tinder-mock';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../db/firebase-config';
import { collection, doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { useAuth } from '../../hook/useAuth';

const Body = ({cate}) => {
  const swiperRef = useRef();
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    let unsub;
    unsub = onSnapshot(collection(db, 'groups'), (snapshot) =>
      setProfiles(snapshot.docs.map((doc) => doc.data()).filter((profile)=>profile.id !== user.uid+"Group" && profile.category === cate))
      // setProfiles(snapshot.docs.map((doc) => doc.data()))
    );
    return unsub;
  }, []);

  const generateOrderId = (id1, id2) => {
    return id1 > id2 ? `${id1}-${id2}` : `${id2}-${id1}`;
  };

  const onSwipedRight = async (cardIndex) => {
    // #1 users/내ID/matches/상대방ID => 상대방 doc
    const swipedGroup = profiles[cardIndex];
    
    await setDoc(doc(db, `users/${user.uid}/matches/${swipedGroup.id}`), swipedGroup);
    // #2 matches/내id-상대방id -> 채팅방에서 사용할 정보
    const loggedInUser = (await getDoc(doc(db, `users/${user.uid}`))).data();
    console.log(loggedInUser);
    // const matchedDoc = await getDoc(doc(db, `users/${swipedUser.id}/matches/${user.uid}`));
    // if (!matchedDoc.exists()) return;
    await setDoc(doc(db, `matches/${generateOrderId(swipedGroup.id, loggedInUser.id)}`), {
        users: {
          [loggedInUser.id]: loggedInUser,
          [swipedGroup.id]: swipedGroup,
        },
        userMatched: [loggedInUser.id, swipedGroup.id],
        timestamp: serverTimestamp(),
    });

    await setDoc(doc(db,`groups/${swipedGroup.id}/submit/${user.uid}`), loggedInUser);
    // navigation.navigate("Match", {swipedGroup});
  };

  return (
    <>
      <View style={tw`flex-1`}>
        <Swiper
          ref={swiperRef}
          cards={profiles}
          renderCard={(GroupInfo) => <Card {...GroupInfo} />}
          cardIndex={0}
          backgroundColor={'#4FD0E9'}
          stackSize={3}
          containerStyle={{ backgroundColor: "transparent" }}
          verticalSwipe={false}
          onSwipedRight={onSwipedRight}
          onSwipedLeft={() => console.log('매칭실패')}
        />
      </View>
      <View style={tw`flex-row justify-evenly`}>
        <TouchableOpacity onPress={() => swiperRef.current.swipeLeft()} style={tw`items-center justify-center rounded-full h-16 w-16 bg-red-200`}>
          <Entypo name="cross" size={25} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => swiperRef.current.swipeRight()} style={tw`items-center justify-center rounded-full h-16 w-16 bg-green-200`}>
          <AntDesign name="heart" size={25} color="green" />
        </TouchableOpacity>

      </View>
    </>
  );
};

export default Body