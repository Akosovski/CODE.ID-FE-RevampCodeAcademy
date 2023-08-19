import * as UserAction from "../constant/UserConstant";

export const GetUserReq = (payload: any) => ({
  type: UserAction.GET_USER_REQ,
  payload
});

export const GetUserSuccess = (payload: any) => ({
  type: UserAction.GET_USER_OK,
  payload
});

export const GetUserFail = (error: any) => ({
  type: UserAction.GET_USER_FAIL,
  error
});

export const UserSigninRequest = (payload: any) => ({
  type: UserAction.USER_SIGNIN_REQUEST,
  payload
})

export const UserSigninSuccess = (payload: any) => ({
  type: UserAction.USER_SIGNIN_SUCCESS,
  payload
})

export const UserSigninFailed = (payload: any) => ({
  type: UserAction.USER_SIGNIN_FAILED,
  payload
})

export const UserSignupRequest = (payload: any) => ({
  type: UserAction.USER_SIGNUP_REQUEST,
  payload
})

export const UserSignupSuccess = (payload: any) => ({
  type: UserAction.USER_SIGNUP_SUCCESS,
  payload
})

export const UserSignupFailed = (payload: any) => ({
  type: UserAction.USER_SIGNUP_FAILED,
  payload
})

export const doPushSignoutRequest = () => ({
  type: UserAction.USER_SIGNOUT_REQUEST,
})

export const UserSignoutSuccess = (payload: any) => ({
  type: UserAction.USER_SIGNOUT_SUCCESS,
  payload
})

export const UserSignoutFailed = (payload: any) => ({
  type: UserAction.USER_SIGNOUT_FAILED,
  payload
})