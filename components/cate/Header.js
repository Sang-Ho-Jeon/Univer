import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import {mock} from "../../mock/tinder-mock";
import tw from "twrnc";
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hook/useAuth';
const Header = () => {
    const navigation = useNavigation();
    const { logout, user } = useAuth()
    // const handleLogout = () => {
    //     navigation.navigate('Login');
    // }
  return (
    <View style={tw`flex-row justify-between items-center px-5 mt-7`}>
      <TouchableOpacity onPress={()=>navigation.navigate('MyPage')}>
        <Image style={tw`w-10 h-10 rounded-full`} source = {{uri: user.photoURL}}></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> navigation.navigate('Modal_G')}>
        <Image 
          source = {{uri:mock.etc.logo}}
          style={[tw`w-14 h-14 rounded-full`,{resizeMode:"contain"}]}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('Chat')}>
        <Ionicons name='chatbubbles-sharp' size={30} color='#ff6864'></Ionicons>
      </TouchableOpacity>
    </View>
  )
}

export default Header