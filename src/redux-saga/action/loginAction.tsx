import * as userAction from '../constant/userConstant';

export const userLoginReq = (userData:any) => ({
    type: userAction.USER_LOGIN_REQ,
    userData,
});

export const userLoginSuccess = (result:any) => ({
    type: userAction.USER_LOGIN_SUCCESS,
    payload: result,
});

export const userLoginFail = (error:any) => ({
    type: userAction.USER_LOGIN_FAIL,
    payload: error,
});
