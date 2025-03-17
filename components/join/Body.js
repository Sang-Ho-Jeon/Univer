import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'react-native-deck-swiper';
import Card from './Card';
import tw from "twrnc";
import { mock } from '../../mock/tinder-mock';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../db/firebase-config';
import { collection, deleteDoc, doc, getDoc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore';
import { useAuth } from '../../hook/useAuth';
import * as Notifications from 'expo-notifications';

const Body = () => {
  const swiperRef = useRef();
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);
  const { user } = useAuth();
  const myGroupId = user.uid+"Group";

  useEffect(() => {
    let unsub;
    unsub = onSnapshot(collection(db, `groups/${myGroupId}/submit`), (snapshot) =>
      setProfiles(snapshot.docs.map((doc) => doc.data()))
      // setProfiles(snapshot.docs.map((doc) => doc.data()))
    );
    return unsub;
  }, []);

  const generateOrderId = (id1, id2) => {
    return id1 > id2 ? `${id1}-${id2}` : `${id2}-${id1}`;
  };

  const onSwipedRight = async (cardIndex) => {
    const swipedUser= profiles[cardIndex];
    await setDoc(doc(db, `groups/${user.uid+"Group"}/approve/${swipedUser.id}`), swipedUser);
    await deleteDoc(doc(db,`groups/${user.uid+"Group"}/submit/${swipedUser.id}`));
    const approveGroup = (await getDoc(doc(db, `groups/${user.uid+"Group"}`))).data();
    await setDoc(doc(db, `users/${swipedUser.id}/approve/${user.uid+"Group"}`), approveGroup);
    push_alarm("동아리");
  };
  const push_alarm = (title) => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: title+" 가입 승인",
        body: '축하합니다!',
      },
      trigger: {
        seconds: 3,
      },
    });
  }
  return (
    <>
      <View style={tw`flex-1`}>
        <Swiper
          ref={swiperRef}
          cards={profiles}
          renderCard={(userInfo) => <Card {...userInfo} />}
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