import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from "./screens/login"

export default function App() {
  return (
    <View>
      <Login/>
    </View>
  );
}

/* "This is for the future projects"

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
});

const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: Login},
TabNavigator:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
*/