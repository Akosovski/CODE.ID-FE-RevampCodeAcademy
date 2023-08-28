import * as userAction from "../constant/userConstant";

export const addEmailReq = (payload: any, id: any) => ({
  type: userAction.ADD_EMAIL_REQ,
  payload,
  id,
});
export const addEmailSuccess = (payload: any) => ({
  type: userAction.ADD_EMAIL_SUCCESS,
  payload,
});
export const addEmailFail = (payload: any) => ({
  type: userAction.ADD_EMAIL_FAIL,
  payload,
});

export const UpdateEmailRequest = (payload: any, id: any) => ({
  type: userAction.UPDATE_EMAIL_REQ,
  payload,
  id,
});

export const UpdateEmailSuccess = (payload: any) => ({
  type: userAction.UPDATE_EMAIL_SUCCESS,
  payload,
});

export const UpdateEmailFailed = (payload: any) => ({
  type: userAction.UPDATE_EMAIL_FAIL,
  payload,
});

export const deleteEmailRequest = (id: any) => ({
  type: userAction.DELETE_EMAIL_REQ,
  id,
});

export const deleteEmailSuccess = (id: any) => ({
  type: userAction.DELETE_EMAIL_SUCCESS,
  id,
});

export const deleteEmailFailed = (id: any) => ({
  type: userAction.DELETE_EMAIL_FAIL,
  id,
});
