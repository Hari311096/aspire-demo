import React from 'react';
import {
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs/BottomTabs'
import { commonStyles } from '../config/commonStyles';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <View style={commonStyles.mainWrap}>
          <Stack.Navigator initialRouteName="MainScreen">
            <Stack.Screen name="MainScreen" component={Tabs} options={{ gestureEnabled: false, headerShown: false }} />
          </Stack.Navigator>
        </View>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;