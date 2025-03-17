import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import Header from '../components/cate/Header'
import tw from "twrnc";
import Body from '../components/cate/Body';
import SafeViewAndroid from "../components/SafeViewAndroid";

const CateScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw `flex-1`}>
      <Header/>
      <Body/>
    </SafeAreaView>
  )
}

export default CateScreen