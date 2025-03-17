import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {mock} from "../../mock/tinder-mock";
import tw from "twrnc";
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hook/useAuth';
const Header = ({title}) => {
    const navigation = useNavigation();
    const { logout, user } = useAuth()
    // const handleLogout = () => {
    //     navigation.navigate('Login');
    // }
  return (
    <View style={tw`flex-row justify-between items-center px-5 mt-7`}>
      <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={34} color="#FF5864"/>
      </TouchableOpacity>    
      <Text style={tw`text-2xl font-bold pl-2`}>{title}</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
        <Ionicons name='chatbubbles-sharp' size={30} color='#ff6864'></Ionicons>
      </TouchableOpacity>
    </View>
  )
}

export default Header