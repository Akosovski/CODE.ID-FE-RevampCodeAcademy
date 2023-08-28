import * as userAction from "../constant/userConstant";

export const addPhoneReq = (payload: any, id: any) => ({
  type: userAction.ADD_PHONE_REQ,
  payload,
  id,
});
export const addPhoneSuccess = (payload: any) => ({
  type: userAction.ADD_PHONE_SUCCESS,
  payload,
});
export const addPhoneFail = (payload: any) => ({
  type: userAction.ADD_PHONE_FAIL,
  payload,
});

export const UpdatePhoneRequest = (payload: any, id: any) => ({
  type: userAction.UPDATE_PHONE_REQ,
  payload,
  id,
});

export const UpdatePhoneSuccess = (payload: any) => ({
  type: userAction.UPDATE_PHONE_SUCCESS,
  payload,
});

export const UpdatePhoneFailed = (payload: any) => ({
  type: userAction.UPDATE_PHONE_FAIL,
  payload,
});

export const deletePhoneRequest = (id: any) => ({
  type: userAction.DELETE_PHONE_REQ,
  id,
});

export const deletePhoneSuccess = (id: any) => ({
  type: userAction.DELETE_PHONE_SUCCESS,
  id,
});

export const deletePhoneFailed = (id: any) => ({
  type: userAction.DELETE_PHONE_FAIL,
  id,
});
