import * as userAction from '../constant/userConstant';

const INIT_STATE = {
    isLoggedIn: false,
    currentUser: null,
    // ... properti lain yang berkaitan dengan proses login
};

const loginReducer = (state = INIT_STATE, action:any) => {
    switch (action.type) {
        case userAction.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.tokenResult,
            };
        case userAction.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null,
            };
        case userAction.USER_LOGOUT:
        sessionStorage.removeItem('access_token');
        return {
          ...state,
          isLoggedIn: false,
          currentUser: null,
        };
        default:
            return state;
    }
};

export default loginReducer;
