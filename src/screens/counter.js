import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";

// Redux
import { connect } from "react-redux";
import store from "../redux/store";
import * as counterButtonActions from '../redux/actions'

class Counter extends Component {

    static navigationOptions = {
        headerShown: false
    }

    onPressRedux = data => {

        switch (data.cond) {
            case (0): {
                store.dispatch(counterButtonActions.decrease_counter_state())
                break
            }
            case (1): {
                store.dispatch(counterButtonActions.increase_counter_state())
                break
            }
            case (3): {
                store.dispatch(counterButtonActions.update_counter_state(data))
                break
            }
        }

    }
    
    render() {
        return (
            <View style={styles.mainContainer}>
                <TextInput style={styles.textInput} keyboardType={'number-pad'} onChangeText={number => { this.onPressRedux({ cond: 3, number }) }}>{this.props.counterButtonState.count}</TextInput>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.touchOpacity} onPress={() => { this.onPressRedux({ cond: 1 }) }}><Text style={styles.text}>+</Text></TouchableOpacity>
                    <Text style={styles.text}>{this.props.counterButtonState.count}</Text>
                    <TouchableOpacity style={styles.touchOpacity} onPress={() => { this.onPressRedux({ cond: 0 }) }}><Text style={styles.text}>-</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.touchOpacity} onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.navigateLink}>Go to LOGIN Screen</Text></TouchableOpacity>
            </View>
        );
    }
}

const stp = store => {
    let { Counter } = store

    return {
        counterButtonState: {
            count: Counter.count
        } 
    }
}

export default connect(stp)(Counter);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center'
    },
    touchOpacity: {
        margin: 10
    },
    textInput: {
        borderWidth: 1,
        width: 50,
        textAlign: "center"
    },
    text: {
        fontSize: 30
    },
    navigateLink : {
        fontSize: 20
    }
});