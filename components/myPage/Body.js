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
  const {logout, user } = useAuth();

  useEffect(() => {
    let unsub;
    unsub = onSnapshot(collection(db, 'users'), (snapshot) =>
      setProfiles(snapshot.docs.map((doc) => doc.data()).filter((profile)=>profile.id === user.uid))
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
          horizontalSwipe={false}
        />
      </View>
      <View style={tw`flex-row mt-10 justify-evenly`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Modal')}
          style={tw`w-32 p-3 bg-red-400`}
        >
          <Text style={tw`text-center text-white text-l font-bold`}>내 정보 수정</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('Signed')}
          style={tw`w-32 p-3 bg-red-400`}
        >
          <Text style={tw`text-center text-white text-l font-bold`}>가입한 동아리</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => navigation.navigate('Join')}
          style={tw`w-30 p-3 bg-red-400`}
        >
          <Text style={tw`text-center text-white text-l font-bold`}>내 동아리 관리</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={logout}
          style={tw`w-32 p-3 bg-red-400`}
        >
          <Text style={tw`text-center text-white text-l font-bold`}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Body