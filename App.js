import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Login from './src/screens/login'
import Counter from './src/screens/counter'

class App extends Component {
  render() {
    return (
      <MyNav/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: Counter,
  Login: Login,
},{
  initialRouteName: 'Home'
});

const MyNav = createAppContainer(AppNavigator)

export default App;
