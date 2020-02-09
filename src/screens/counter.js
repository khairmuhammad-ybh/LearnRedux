import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

class Counter extends Component {

    static navigationOptions = {
        headerShown: false
    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <Text>Counter</Text>
                <TouchableOpacity style={styles.touchOpacity} onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.text}>Go to LOGIN Screen</Text></TouchableOpacity>
            </View>
        );
    }
}
export default Counter;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchOpacity: {
        margin: 10
    },
    text: {
        fontSize: 30
    }
});