import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation"; 
import Login from "./screens/login";
import {BottomTabNavigator} from "./components/BottomTabNavigator";

export default function App() {
  return (
      <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: Login},
BottomTab:{screen: BottomTabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
