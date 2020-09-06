import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation"; 
import Login from "./screens/login";
import { DrawerNavigator } from "./components/DrawerNavigator";
import { BottomTabNavigator } from "./components/BottomTabNavigator";
import { StackNavigator } from "./components/StackNavigator";

export default function App() {
  return (
      <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: Login},
  Drawer:{screen: DrawerNavigator},
  TabNavigator :{screen: BottomTabNavigator},
  StackNavigator : {screen: StackNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
