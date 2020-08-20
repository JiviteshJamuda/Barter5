import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation"; 
import Login from "./screens/login";
import { DrawerNavigator } from "./components/DrawerNavigator";

export default function App() {
  return (
      <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: Login},
  Drawer:{screen: DrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
