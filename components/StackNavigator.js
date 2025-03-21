import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ModalScreen from '../screens/ModalScreen';
import MatchScreen from '../screens/MatchScreen';
import ChatScreen from '../screens/ChatScreen';
import MessageScreen from '../screens/MessageScreen';
import ModalGScreen from '../screens/ModalGScreen';
import JoinScreen from '../screens/JoinScreen';
import MyPageScreen from '../screens/MyPageScreen';
import CateScreen from '../screens/CateScreen';
import SignedScreen from '../screens/SignedScreen';
import { useAuth } from '../hook/useAuth';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
      <>
        <Stack.Group>
          <Stack.Screen name="Cate" component={CateScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Chat" component={ChatScreen}/>
          <Stack.Screen name="Message" component={MessageScreen}/>
          <Stack.Screen name="Join" component={JoinScreen}/>
          <Stack.Screen name="Signed" component={SignedScreen}/>
          <Stack.Screen name="MyPage" component={MyPageScreen}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation:'modal'}}>
          <Stack.Screen name="Modal" component={ModalScreen}/>
          <Stack.Screen name="Modal_G" component={ModalGScreen}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation:'transparentModal'}}>
          <Stack.Screen name="Match" component={MatchScreen}/>
        </Stack.Group>
      </>
      )  : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
      </Stack.Navigator>

    // <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Group>
    //       <Stack.Screen name="Login" component={LoginScreen} />
    //       <Stack.Screen name="Home" component={HomeScreen}/>
    //       <Stack.Screen name="Chat" component={ChatScreen}/>
    //       <Stack.Screen name="Message" component={MessageScreen}/>
    //     </Stack.Group>
    //     <Stack.Group screenOptions={{presentation:'modal'}}>
    //       <Stack.Screen name="Modal" component={ModalScreen}/>
    //     </Stack.Group>
    //     <Stack.Group screenOptions={{presentation:'transparentModal'}}>
    //       <Stack.Screen name="Match" component={MatchScreen}/>
    //     </Stack.Group>
    // </Stack.Navigator>
  );
};

export default StackNavigator