import { StatusBar } from 'expo-status-bar';
import { LogBox, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './components/StackNavigator';
import { AuthProvider} from './hook/useAuth';
import * as Notifications from "expo-notifications";

export default function App() {

  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </AuthProvider>

    // <NavigationContainer>
    //   <StackNavigator/>
    // </NavigationContainer>
  );
}