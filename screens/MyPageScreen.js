import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/myPage/Header'
import tw from "twrnc";
import Body from '../components/myPage/Body';
import SafeViewAndroid from "../components/SafeViewAndroid";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `flex-1`}>
      <Header/>
      <Body/>
    </SafeAreaView>
  )
}

export default HomeScreen