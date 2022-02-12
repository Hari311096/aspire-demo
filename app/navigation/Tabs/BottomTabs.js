import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DebitCard from '../../screens/DebitCard';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="DebitCard">
      <Tab.Screen name="Home" component={DebitCard} />
      <Tab.Screen name="DebitCard" component={DebitCard} />
      <Tab.Screen name="Payments" component={DebitCard} />
      <Tab.Screen name="Credit" component={DebitCard} />
      <Tab.Screen name="Profile" component={DebitCard} />
    </Tab.Navigator>
  );
}