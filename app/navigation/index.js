import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs/BottomTabs'
import { commonStyles } from '../config/commonStyles';
import CardLimit from '../screens/CardLimit';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <View style={commonStyles.mainWrap}>
          <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainScreen" component={Tabs} options={{ headerShown: false }} />
            <Stack.Screen name="CardLimit" component={CardLimit} options={{ headerShown: false }} />
          </Stack.Navigator>
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;