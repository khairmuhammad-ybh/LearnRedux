import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from "react-native";

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// screens
import Login from './src/screens/login'
import Counter from './src/screens/counter'

// Redux / Redux-persist
import { Provider } from 'react-redux'
import { store, persistor } from './src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {

  renderLoading = () => {
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <MyNav />
        </PersistGate>
      </Provider >
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: Counter,
  Login: Login,
}, {
  initialRouteName: 'Home'
});

const MyNav = createAppContainer(AppNavigator)

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  }
})
