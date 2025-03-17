import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/signed/Header'
import tw from "twrnc";
import Body from '../components/signed/Body';
import SafeViewAndroid from "../components/SafeViewAndroid";
import { useAuth } from '../hook/useAuth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../db/firebase-config';

const SignedScreen = () => {
  return (
    <SafeAreaView style={tw `flex-1`}>
      <Header/>
      <Body/>
    </SafeAreaView>
  )
}

export default SignedScreen