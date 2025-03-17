import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import {doc, serverTimestamp, setDoc} from 'firebase/firestore';
import tw from 'twrnc';
import { mock } from '../mock/tinder-mock';
import TextContainer from '../components/modal/TextContainer';
import {useNavigation} from '@react-navigation/native';
import { db } from "../db/firebase-config"
import {useAuth} from "../hook/useAuth";
import TextContainer_phone from '../components/modal/TextContainer_phone';
import {Ionicons} from '@expo/vector-icons'
import TextContainer_cate from '../components/modal/TextContainer_cate';
const ModalScreen = () => {
  const [profileConfig, setProfileConfig] = useState({
    clubName: '',
    photoURL: '',
    money: '',
    act: '',
    place: '',
    signAuth: '',
    phone1: '',
    phone2: '',
    category:'',
  });
  const {user} = useAuth();
  const onChange = (text, key) => {
    setProfileConfig({...profileConfig, [key]: text});
  };

  const isComplete = Object.values(profileConfig).every((value) => value !== '');
  // profileConfig.age !== '' && profileConfig.job !== '' && profileConfig.photoURL !== '';
  const navigation = useNavigation();

  const updateGroupProfile = async () => {
    const group_id = user?.uid+"Group";
    try{
      await setDoc(doc(db, 'groups', group_id), {
        ...profileConfig,
        displayName: user?.displayName,
        timestamp: serverTimestamp(),
        id: group_id,
      });
      navigation.navigate('Cate');
    } catch(error) {
      console.error(error.message ?? error);
    }
  };

  const onSubmit = async () => {
    if(!isComplete) return;
    await updateGroupProfile();
  }

  return (
    <ScrollView>
    <View style={tw`flex items-center pt-1 mt-7`}>
        <View style={tw`h-10 w-10 mr-95`}> 
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons name="chevron-back-outline" size={34} color="#FF5864"/>
          </TouchableOpacity>
        </View>
        <Image 
            style={[tw`w-full h-20`, {resizeMode: 'contain'}]}
            source={{uri:mock.assets.modalLogo}}
            />
        <Text style={tw`text-xl text-gray-500 p-2 font-bold`}>동아리 등록</Text>

            <TextContainer 
              title="Step 1: 동아리 이름" 
              placeholder="동아리 이름을 입력해주세요" 
              text={profileConfig.clubName} 
              setText={(text) => onChange(text, "clubName")}
            />
            <TextContainer 
              title="Step 2: 동아리 사진" 
              placeholder="등록할 사진 uri를 입력해주세요" 
              text={profileConfig.photoURL} 
              setText={(text) => onChange(text, "photoURL")}
            />
            <TextContainer 
              title="Step 2: 회비" 
              placeholder="ex)매월 30,000" 
              text={profileConfig.money} 
              setText={(text) => onChange(text, "money")}
            />
            <TextContainer 
              title="Step 3: 정기 활동" 
              placeholder="ex)매주 수 18~20시" 
              text={profileConfig.act} 
              setText={(text) => onChange(text, "act")}
            />
            <TextContainer 
              title="Step 4: 동아리방 위치" 
              placeholder="ex)ㅇㅇ관 ㅇㅇㅇ호" 
              text={profileConfig.place} 
              setText={(text) => onChange(text, "place")} 
            />
            <TextContainer 
              title="Step 5: 가입 자격" 
              placeholder="ex)누구나 가능" 
              text={profileConfig.signAuth} 
              setText={(text) => onChange(text, "signAuth")} 
            />
            <TextContainer_phone
              title="Step 6: 연락처" 
              placeholder="ex)회장ooo: 010-1234-1234" 
              text={profileConfig.phone1} 
              setText={(text) => onChange(text, "phone1")}
              placeholder2="부회장ooo: 010-1234-1234"
              text2={profileConfig.phone2}
              setText2={(text2) => onChange(text2, "phone2")}
            />
            <TextContainer_cate
              placeholder="분과선택"
              setText={(text)=>onChange(text,"category")}
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