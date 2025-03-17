import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc';
import { mock } from '../../mock/tinder-mock';
import {SelectList} from 'react-native-dropdown-select-list';
const TextContainer_cate = ({placeholder, setText}) => {

  return (
    <View style={tw`mt-5`}>
      <SelectList
        setSelected={(val) => setText(val)}
        data = {mock.cate_data}
        save = "value"
        placeholder={placeholder}
      />
    </View>
  )
}

export default TextContainer_cate