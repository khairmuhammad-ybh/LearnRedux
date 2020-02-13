import * as ACTION from '../actions/authenticator.action'
import { Alert } from 'react-native';

const initState = {
    userId: null,
    username: null
}

const id = '8ba790f3-5acd-4a08-bc6a-97a36c124f29';

const AuthButtonStore = (state = initState, action) => {
    switch (action.type) {
        case ACTION.AUTHENTICATOR_LOGIN_STATE:
            if(action.payload.username == null){
                Alert.alert("Please type in something")
                return state
            }
            return {
                userId: id,
                username: action.payload.username
            }
        case ACTION.AUTHENTICATOR_LOGOUT_STATE:
            return {
                userId: null,
                username: null
            }
        default: return state
    }
}

export default AuthButtonStore