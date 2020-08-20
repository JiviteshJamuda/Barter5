import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
ScrollView} from 'react-native';
import firebase from "firebase";
import db from "../config"
import { BottomTabNavigator } from "./BottomTabNavigator";
import SidebarMenu from "./SidebarMenu";
import { createDrawerNavigator } from "react-navigation-drawer";
import Settings from "../screens/settings";

export const DrawerNavigator = createDrawerNavigator(
    {
        Home : {screen: BottomTabNavigator},
        Settings : {screen: Settings},
    },
    {
        contentComponent: SidebarMenu
    },
    {
        initialRouteName : "Home"
    }
)