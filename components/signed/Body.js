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

const Body = () => {
  const swiperRef = useRef();
  const navigation = useNavigation();
  const [profiles, setProfiles] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    let unsub;
    unsub = onSnapshot(collection(db, `users/${user.uid}/approve`), (snapshot) =>
      setProfiles(snapshot.docs.map((doc) => doc.data()))
      // setProfiles(snapshot.docs.map((doc) => doc.data()))
    );
    return unsub;
  }, []);

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
        />
      </View>
    </>
  );
};

export default Body