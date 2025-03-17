import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/home/Header'
import tw from "twrnc";
import Body from '../components/home/Body';
import SafeViewAndroid from "../components/SafeViewAndroid";

const HomeScreen = ({route}) => {
  return (
    <SafeAreaView style={tw `flex-1`}>
      <Header title={route.params.title}/>
      <Body cate={route.params.title}/>
    </SafeAreaView>
  )
}

export default HomeScreen