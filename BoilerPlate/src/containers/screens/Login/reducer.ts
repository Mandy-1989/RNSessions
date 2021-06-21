/**
 *
 * LoginScreen reducer
 *
 */


import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

const initialState = {
    loading: false,
    user: null,
    error: null
};

export const LoginReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.userDetails,
                loading: false,
            };

        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default LoginReducer;