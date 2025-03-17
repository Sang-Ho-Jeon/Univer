import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/join/Header'
import tw from "twrnc";
import Body from '../components/join/Body';
import SafeViewAndroid from "../components/SafeViewAndroid";
import { useAuth } from '../hook/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../db/firebase-config';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `flex-1`}>
      <Header/>
      <Body/>
    </SafeAreaView>
  )
}

export default HomeScreen