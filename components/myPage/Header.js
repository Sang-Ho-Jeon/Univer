import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {mock} from "../../mock/tinder-mock";
import tw from "twrnc";
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hook/useAuth';
const Header = () => {
    const navigation = useNavigation();
  return (
    <View style={tw`flex-row items-center justify-between px-2 mb-6 mt-7`}>
        <View style={tw`flex-row items-center justify-center`}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="chevron-back-outline" size={34} color="#FF5864"/>
            </TouchableOpacity>
            <Text style={tw`text-2xl font-bold pl-2`}>내 정보</Text>
        </View>
    </View>
  )
}

export default Header