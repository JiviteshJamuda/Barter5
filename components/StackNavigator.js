import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import List from "../screens/list";
import UserDetails from "../screens/UserDetails";
import {BottomTabNavigator} from "./BottomTabNavigator"

export const StackNavigator = createStackNavigator(
    {
        List : {screen : List, navigationOptions : {headerShown : false}},
        Details : {screen : UserDetails, navigationOptions : {headerShown : false}},
    },
    {initialRouteName : "List"},
)