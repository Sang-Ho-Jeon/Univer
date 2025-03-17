import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import {doc, serverTimestamp, setDoc} from 'firebase/firestore';
import tw from 'twrnc';
import { mock } from '../mock/tinder-mock';
import TextContainer from '../components/modal/TextContainer';
import {useNavigation} from '@react-navigation/native';
import { db } from "../db/firebase-config"
import {useAuth} from "../hook/useAuth";
import {Ionicons} from '@expo/vector-icons'

const ModalScreen = () => {
  const [profileConfig, setProfileConfig] = useState({
    photoURL: '',
    name: '',
    studentId: '',
    department: '',
  });
  const {user} = useAuth();
  const onChange = (text, key) => {
    setProfileConfig({...profileConfig, [key]: text});
  };

  const isComplete = Object.values(profileConfig).every((value) => value !== '');
  // profileConfig.age !== '' && profileConfig.job !== '' && profileConfig.photoURL !== '';
  const navigation = useNavigation();

  const updateProfile = async () => {
    try{
      await setDoc(doc(db, 'users', user?.uid), {
        ...profileConfig,
        displayName: user?.displayName,
        timestamp: serverTimestamp(),
        id: user.uid,
      });
      navigation.navigate('MyPage');
    } catch(error) {
      console.error(error.message ?? error);
    }
  };

  const onSubmit = async () => {
    if(!isComplete) return;
    await updateProfile();
  }
  return (
    <ScrollView>
    <View style={tw`flex-1 items-center pt-1 mt-7`}>
        <View style={tw`h-10 w-10 mr-95`}> 
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={34} color="#FF5864"/>
          </TouchableOpacity>
        </View>
        <Image 
        style={[tw`w-full h-20`, {resizeMode: 'contain'}]}
        source={{uri:mock.assets.modalLogo}}
        />
        <TextContainer 
          title="Step 1: 이름" 
          placeholder="이름을 입력해주세요" 
          text={profileConfig.name} 
          setText={(text) => onChange(text, "name")}
        />
        <TextContainer 
          title="Step 2: 학번" 
          placeholder="학번을 입력해주세요" 
          text={profileConfig.studentId} 
          setText={(text) => onChange(text, "studentId")}
        />
        <TextContainer 
          title="Step 3: 학과" 
          placeholder="학과를 입력해주세요" 
          text={profileConfig.department} 
          setText={(text) => onChange(text, "department")} 
        />
        <TextContainer 
          title="Step 4: 프로필 사진" 
          placeholder="프로필 url을 입력해주세요" 
          text={profileConfig.photoURL} 
          setText={(text) => onChange(text, "photoURL")}
        />
        <View style = {tw`mt-10`}>
            <TouchableOpacity 
              onPress={onSubmit} 
              style={tw`w-64 p-3 rounded-xl ${isComplete? 'bg-red-400' : 'bg-gray-400'}`}
            >
              <Text style={tw`text-center text-white text-xl`}>프로필 업데이트</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>
  )
}

export default ModalScreen