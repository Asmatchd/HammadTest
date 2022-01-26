import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './TabNavigator';
import {Doctor} from '../screen/doctor/Doctor';
import {VisitHistory} from '../screen/book/VisitHistory';
import {OrderDetails} from '../screen/dummy/OrderDetails';
import {Details} from '../screen/details/Details';
import {Visit} from '../screen/details/Visit';
import {Cart} from '../screen/cart';
const Stack = createNativeStackNavigator();
export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Doctor"
          component={Doctor}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Visit"
          component={Visit}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VisitHistory"
          component={VisitHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
