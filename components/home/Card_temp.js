import { View, Image, Text } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { mock } from '../../mock/tinder-mock';
import {LinearGradient} from 'expo-linear-gradient';

const Card = ({displayName, age, photoURL, job}) => {
  return (
    <View style={tw`bg-white w-full h-3/4 rounded-2xl`}>
        <Image style={tw`absolute w-full h-full rounded-2xl`} source={{uri:photoURL}}/>
        <LinearGradient style={tw`absolute bottom-0 w-full h-30 rounded-b-2xl px-6 items-start pb-6`} colors={['#00000000', '#000000']}>
            <View style={tw`flex-row items-end pb-2 flex-1`}>
                <Text style={tw`text-white font-bold text-2xl`}>{displayName}</Text>
                <Text style={tw`text-white pl-2 text-xl`}>{age}</Text>
            </View>
            <View style={tw`bg-slate-300 bg-opacity-30 p-2 rounded-full`}>
                <Text style={tw`text-white`}>{job}</Text>
            </View>
        </LinearGradient>
        
    </View>
  )
}

export default Card