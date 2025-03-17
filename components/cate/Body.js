import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Swiper from 'react-native-deck-swiper';
import tw from "twrnc";
import { mock } from '../../mock/tinder-mock';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../db/firebase-config';
import { useAuth } from '../../hook/useAuth';

const Body = () => {
  let tip = mock.dept;
  const swiperRef = useRef();
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={tw`flex-1`}>
        <View style={tw`mt-10 justify-evenly`}>
          {
            tip.map((content, i) => {
              return (
                <TouchableOpacity onPress={()=>{navigation.navigate(content.navi, {title:content.title});}}>
                  <View style={tw`flex-1 flex-row m-1 border-b border-b-gray-100 pb-2.5`} key={i}>  
                    <Image style={tw`flex-1 h-24 rounded-2xl`} source={{ uri: content.image }} />
                    <View style={tw`flex-2 ml-2.5`}>
                      <Text style={tw`text-xl font-bold`} numberOfLines={1}>{content.title}</Text>
                      <Text style={tw`text-sm`} numberOfLines={3}>{content.desc}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    </>
  );
};

export default Body