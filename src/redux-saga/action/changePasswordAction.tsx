import * as userAction from "../constant/userConstant";

export const changePasswordReq = (payload: any, id: any) => ({
  type: userAction.CHANGE_PASSWORD_REQ,
  payload,
  id,
});
export const changePasswordSuccess = (payload: any) => ({
  type: userAction.CHANGE_PASSWORD_SUCCESS,
  payload,
});
export const changePasswordFail = (payload: any) => ({
  type: userAction.CHANGE_PASSWORD_FAIL,
  payload,
});
