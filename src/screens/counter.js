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

        // let { counterButtonState } = this.props

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

    onPressRedux2 = data => {

        // let { counterButtonState } = this.props

        switch (data.cond) {
            case (0): {
                store.dispatch(counterButtonActions.decrease_counter2_state())
                break
            }
            case (1): {
                store.dispatch(counterButtonActions.increase_counter2_state())
                break
            }
            case (3): {
                store.dispatch(counterButtonActions.update_counter2_state(data))
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

                <TextInput style={styles.textInput} keyboardType={'number-pad'} onChangeText={number => { this.onPressRedux2({ cond: 3, number }) }}>{this.props.counterButtonState.count2}</TextInput>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.touchOpacity} onPress={() => { this.onPressRedux2({ cond: 1 }) }}><Text style={styles.text}>+</Text></TouchableOpacity>
                    <Text style={styles.text}>{this.props.counterButtonState.count2}</Text>
                    <TouchableOpacity style={styles.touchOpacity} onPress={() => { this.onPressRedux2({ cond: 0 }) }}><Text style={styles.text}>-</Text></TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.touchOpacity} onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.navigateLink}>Go to LOGIN Screen</Text></TouchableOpacity>
            </View>
        );
    }
}

const stp = store => {
    let { Counter } = store
    let { Counter2 } = store

    return {
        counterButtonState: {
            count: Counter.count,
            count2: Counter2.count2
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
    navigateLink: {
        fontSize: 20
    }
});