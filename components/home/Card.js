import { View, Image, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from "twrnc"
import { mock } from '../../mock/tinder-mock';
import {LinearGradient} from 'expo-linear-gradient';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../db/firebase-config';

const Card = ({clubName, money, act, place, signAuth, phone1,phone2,photoURL}) => {

  return (
    <View style={tw`bg-white w-full h-3/4 rounded-2xl`}>
        <Image style={[tw`absolute w-full h-full rounded-2xl`,{resizeMode:"contain"}]} source={{uri:photoURL}}/>
        <LinearGradient style={tw`absolute bottom-0 w-full h-45 rounded-b-2xl px-6 items-start pb-6`} colors={['#00000000', '#000000']}>
            <View style={tw`flex-row justify-between items-center px-5`}>
              <View style={tw`flex-column mr-12 flex-1`}>
                  <Text style={tw`text-white font-bold text-2xl`}>{clubName}</Text>
                  <Text style={tw`text-white`}>{money}</Text>
                  <Text style={tw`text-white`}>{act}</Text>
                  <Text style={tw`text-white`}>{place}</Text>
              </View>
              <View style={tw`flex-column flex-1 pt-10`}>
                <Text style={tw`text-white`}>{signAuth}</Text>
                  <Text style={tw`text-white`}>{phone1}</Text>
                  <Text style={tw`text-white`}>{phone2}</Text>
              </View>
            </View>
        </LinearGradient>
        
    </View>
  )
}

export default Card