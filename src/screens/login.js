import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from "react-native";

// Redux
import { connect } from "react-redux";
import {store, persistor} from "../redux/store";
import * as authButtonStore from '../redux/actions'

class Login extends Component {

    constructor(prop){
        super(prop)
        this.state = {
            username : null
        }
    }

    onPressRedux = userdata => {

        switch (userdata.cond) {
            case (0): {
                store.dispatch(authButtonStore.authenticator_login_state(userdata))
                this.setState({username : null})
                break
            }
            case (1): {
                store.dispatch(authButtonStore.authenticator_logout_state())
                persistor.purge()
                break
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Enter Some Text here"
                    value={this.state.username}
                    onChangeText={username => { this.setState({username : username}) }}
                    underlineColorAndroid="transparent"
                    style={styles.TextInputStyle}
                />
                <TouchableOpacity
                    onPress={() => this.onPressRedux({ cond: 0,  username: this.state.username})}
                    style={styles.button}>
                    <Text style={styles.buttonText}> SAVE VALUE </Text>
                </TouchableOpacity>
                <Text>
                    {this.props.AuthButtonState.userId}
                </Text>
                <Text>
                    {this.props.AuthButtonState.username}
                </Text>
                <TouchableOpacity
                    onPress={() => this.onPressRedux({ cond: 1})}
                    style={styles.button}>
                    <Text style={styles.buttonText}> CLEAR VALUE </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const stp = store => {
    let { Auth } = store

    return {
        AuthButtonState: {
            userId: Auth.userId,
            username: Auth.username
        }
    }
}

export default connect(stp)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});