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
import { DrawerItems } from "react-navigation-drawer";

export default class SidebarMenu extends React.Component {
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems {...this.props}/>
                <View style={{flex:1, justifyContent:"flex-end", paddingBottom:30}}>
                    <TouchableOpacity style={{justifyContent:"center", padding:10, height:30, width:"100%"}}
                        onPress={()=>{
                            this.props.navigation.navigate("LoginScreen");
                            firebase.auth().signOut();
                        }}
                    >
                        <Text>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
