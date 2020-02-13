const prefix = `[authenticator buttons]`;

export const AUTHENTICATOR_LOGIN_STATE = `${prefix} AUTH_LOGIN_STATE`;
export const AUTHENTICATOR_LOGOUT_STATE = `${prefix} AUTH_LOGOUT_STATE`;

export const authenticator_login_state = userData => ({
    type : AUTHENTICATOR_LOGIN_STATE,
    payload: userData
})

export const authenticator_logout_state = () => ({
    type : AUTHENTICATOR_LOGOUT_STATE
})