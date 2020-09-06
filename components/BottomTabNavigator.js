import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Exchange from '../screens/exchange';
import List from '../screens/list';
import { StackNavigator } from "./StackNavigator";

export const BottomTabNavigator = createBottomTabNavigator({
  List: {
    screen: StackNavigator,
    navigationOptions :{
      tabBarLabel : "Home Screen",
    }
  },
  Exchange : {
    screen: Exchange,
    navigationOptions :{
      tabBarLabel : "Exchange Screen",
    }
  }
});
