import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Dashboard } from '../screen/dashboard/Dashboard';
import { Setting } from '../screen/setting/Setting';
import { Dummy } from '../screen/dummy/Dummy';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5C47C4',
        tabBarInactiveTintColor: '#5C47C4',
        tabBarShowLabel: false,
        //tabBarStyle: {backgroundColor: 'red'},
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Ionicons name="ios-home" color={color} size={22} />
          ),
        }}
      />
       <Tab.Screen
        name="Dummy"
        component={Dummy}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Fontisto name="doctor" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <FontAwesome name="cogs" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};