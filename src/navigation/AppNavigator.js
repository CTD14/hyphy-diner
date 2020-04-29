import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderScreen from '../screens/OrderScreen';
import ViewOrdersScreen from '../screens/ViewOrders';
import UserScreen from '../screens/UserScreen';
import SingleMealScreen from '../screens/SingleMeal';
import WelcomeScreen from '../screens/WelcomeScreen';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'


// Orders Stack to inject into my Tabs
const OrderStack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <OrderStack.Navigator>
      <OrderStack.Screen name='Order' component={OrderScreen} />
      <OrderStack.Screen name='Single Meal' component={SingleMealScreen} />
    </OrderStack.Navigator>
  );
};

// Tabs Navigator that will be my default navigation for my app
const Tabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen 
      name='Order' 
      component={OrderNavigator} 
       options={() => ({
          tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons name='food' size={25} color={color}/>;
          },
        })}
        />

      <Tabs.Screen 
       name='View Orders' 
       component={ViewOrdersScreen}
       options={() => ({
          tabBarIcon: ({ color }) => {
          return <Ionicons name='ios-apps' size={25} color={color}/>;
        },
      })}
      />
         <Tabs.Screen 
      name='User Profile' 
      component={UserScreen}
       options={() => ({
          tabBarIcon: ({ color }) => {
          return <Ionicons name='ios-person' size={25} color={color}/>;
        },
      })}
       />

      <Tabs.Screen 
      name='Logout' 
      component={WelcomeScreen}
       options={() => ({
          tabBarIcon: ({ color }) => {
          return <MaterialCommunityIcons name='hand-peace' size={25} color={color}/>;
        },
      })}
       />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
