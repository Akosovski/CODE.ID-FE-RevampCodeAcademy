import * as userAction from "../constant/userConstant";

export const addEducationReq = (payload: any, id: any) => ({
  type: userAction.ADD_EDUCATION_REQ,
  payload,
  id,
});
export const addEducationSuccess = (payload: any) => ({
  type: userAction.ADD_EDUCATION_SUCCESS,
  payload,
});
export const addEducationFail = (payload: any) => ({
  type: userAction.ADD_EDUCATION_FAIL,
  payload,
});

export const UpdateEducationRequest = (payload: any, id: any) => ({
  type: userAction.UPDATE_EDUCATION_REQ,
  payload,
  id,
});

export const UpdateEducationSuccess = (payload: any) => ({
  type: userAction.UPDATE_EDUCATION_SUCCESS,
  payload,
});

export const UpdateEducationFailed = (payload: any) => ({
  type: userAction.UPDATE_EDUCATION_FAIL,
  payload,
});

export const deleteEducationRequest = (id: any) => ({
  type: userAction.DELETE_EDUCATION_REQ,
  id,
});

export const deleteEducationSuccess = (id: any) => ({
  type: userAction.DELETE_EDUCATION_SUCCESS,
  id,
});

export const deleteEducationFailed = (id: any) => ({
  type: userAction.DELETE_EDUCATION_FAIL,
  id,
});
