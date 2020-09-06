import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, FlatList } from "react-native";
import db from "../config";
import firebase from "firebase";
import { ListItem, Header } from 'react-native-elements'

export default class MyBarters extends React.Component {
    constructor(){
        super();
        this.state={
            userId : firebase.auth().currentUser.email,
            allBarters : [],
        }
    }

    getAllBarters = async()=>{
        await db.collection("my_barters").where("user_id", "==", this.state.userId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                this.setState({
                    allBarters : [...this.state.allBarters, doc.data()],
                })
            })
        })
        console.log(this.state.allBarters)
    }

    componentDidMount(){
        this.getAllBarters();
    }

    keyExtractor = (item, index) => index.toString()
    
      renderItem = ( {item, i} ) =>{
        return (
          <ListItem
            key={i}
            title={item.item}
            subtitle={item.exchanger_name}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button}>
                    <Text>Exchange</Text>
                </TouchableOpacity>
            }
            bottomDivider
          />
        )
      }

    render(){
        return(
            <ScrollView>
                <Header
                    centerComponent={{text:"My Barters", style:{fontSize:30,fontWeight:"bold"}}}
                />
                <FlatList
                    data={this.state.allBarters}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ff5722",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8
        }
    },
})