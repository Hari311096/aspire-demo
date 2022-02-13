import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DebitCard from '../../screens/DebitCard';
export default function DebitCardStacks() {
  const DebitStack = createNativeStackNavigator();

  return (
    <DebitStack.Navigator initialRouteName="DebitCard" screenOptions={{ headerShown: false }}>
      <DebitStack.Screen name="DebitCard" component={DebitCard} options={{ headerShown: false }} />
    </DebitStack.Navigator>
  )
}
