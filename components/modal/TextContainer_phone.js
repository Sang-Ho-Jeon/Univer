import { View, Text, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc';

const TextContainer_phone = ({title, placeholder, placeholder2, setText,setText2, text, text2, ...others}) => {
  return (
    <View>
      <Text style={tw`text-center p-4 font-bold text-red-400`}>{title}</Text>
      <TextInput 
        value={text} 
        style = {tw`text-center pb-2`} 
        placeholder={placeholder} 
        onChangeText={setText}
        {...others}/>
      <TextInput 
        value={text2} 
        style = {tw`text-center pb-2`} 
        placeholder={placeholder2} 
        onChangeText={setText2}
        {...others}/>
    </View>
  )
}

export default TextContainer_phone