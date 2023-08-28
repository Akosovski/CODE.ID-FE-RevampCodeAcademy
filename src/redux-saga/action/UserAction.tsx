import * as userAction from '../constant/userConstant';

export const userSignupReq = (payload:any) =>({
    type : userAction.USER_SIGNUP_REQ,
    payload
})
export const userSignupSuccess = (payload:any) =>({
    type : userAction.USER_SIGNUP_SUCCESS,
    payload
})
export const userSignupFail = (payload:any) =>({
    type : userAction.USER_SIGNUP_FAIL,
    payload
})
export const getDataAllUserReq = () =>({
    type : userAction.GET_ALL_USER_REQ,
})
export const getDataAllUserSuccess = (payload:any) =>({
    type : userAction.GET_ALL_USER_SUCCESS,
    payload
})
export const getDataAllUserFail = (payload:any) =>({
    type : userAction.GET_ALL_USER_FAIL,
    payload
})
export const getDataOneUserReq = (id:any) =>({
    type : userAction.GET_ONE_USER_REQ,
    id
})
export const getDataOneUserSuccess = (payload:any) =>({
    type : userAction.GET_ONE_USER_SUCCESS,
    payload
})
export const getDataOneUserFail = (payload:any) =>({
    type : userAction.GET_ONE_USER_FAIL,
    payload
})