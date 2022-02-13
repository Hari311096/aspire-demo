import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import tab1 from '../../assets/images/tab1.png'
import tab2 from '../../assets/images/tab2.png'
import tab3 from '../../assets/images/tab3.png'
import tab4 from '../../assets/images/tab4.png'
import tab5 from '../../assets/images/tab5.png'
import DebitCard from '../../screens/DebitCard';
import colors from '../../config/colors';
import { commonStyles } from '../../config/commonStyles';
import DebitCardStacks from '../Stacks/DebitCardStacks';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.lighGray,
        style: { justifyContent: 'center' },
        showLabel: true,
        keyboardHidesTabBar: true,
      }}
      initialRouteName="Debit Card"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={DebitCard}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <View style={commonStyles.center}>
              <Image resizeMode="contain" source={tab1} style={{ height: 24, width: 24, tintColor: color }} />
            </View>
          )
        })}
      />
      <Tab.Screen
        name="Debit Card"
        component={DebitCardStacks}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <View style={commonStyles.center}>
              <Image resizeMode="contain" source={tab2} style={{ height: 24, width: 24, tintColor: color }} />
            </View>
          )
        })}
      />
      <Tab.Screen
        name="Payments"
        component={DebitCard}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <View style={commonStyles.center}>
              <Image resizeMode="contain" source={tab3} style={{ height: 24, width: 24, tintColor: color }} />
            </View>
          )
        })}
      />
      <Tab.Screen
        name="Credit"
        component={DebitCard}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <View style={commonStyles.center}>
              <Image resizeMode="contain" source={tab4} style={{ height: 24, width: 24, tintColor: color }} />
            </View>
          )
        })}
      />
      <Tab.Screen
        name="Profile"
        component={DebitCard}
        options={() => ({
          tabBarIcon: ({ focused, color }) => (
            <View style={commonStyles.center}>
              <Image resizeMode="contain" source={tab5} style={{ height: 24, width: 24, tintColor: color }} />
            </View>
          )
        })}
      />
    </Tab.Navigator>
  );
}