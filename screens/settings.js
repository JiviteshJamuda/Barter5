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
import db from "../config";

export default class Settings extends React.Component {
    render(){
        return(
            <View>
                <Text style={{fontSize:40, fontWeight:"bold"}}>Settings</Text>
                <View style={{flex:1}}>
                    <Text>This Screen is still under construction...</Text>
                </View>
            </View>
        )
    }
}