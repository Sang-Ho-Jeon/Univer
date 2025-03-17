import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { mock } from '../mock/tinder-mock'
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../hook/useAuth';

const LoginScreen = () => {
    const navigation = useNavigation();
    // const handleLogin = () => {
    //     navigation.navigate('Home');
    // };
    const { handleLogin } = useAuth();
    return (
    //웹은 flex-row가 기본이지만 모바일은 flex-column이 기본
    //flex-1은 세로로 화면 전체를 차지
    <View style={tw`flex-1`}> 
        <ImageBackground style = {[tw`w-full h-full rounded-full`,{resizeMode:"contain"}]} source = {{uri: mock.etc.loginBg}}>
            <TouchableOpacity 
                onPress={handleLogin}
                style={[
                    tw`absolute bottom-40 w-50 bg-white rounded-xl p-4`,
                    {
                    marginHorizontal: '25%',
                    },
                ]}>
                <Text style = {tw`text-center`}>로그인</Text>
            </TouchableOpacity>    
        </ImageBackground>    
    </View>
  );
};

export default LoginScreen