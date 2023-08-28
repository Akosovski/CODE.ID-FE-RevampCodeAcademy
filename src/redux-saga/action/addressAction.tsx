import * as userAction from "../constant/userConstant";

export const addAddressReq = (payload: any, id: any) => ({
  type: userAction.ADD_ADDRESS_REQ,
  payload,
  id,
});
export const addAddressSuccess = (payload: any) => ({
  type: userAction.ADD_ADDRESS_SUCCESS,
  payload,
});
export const addAddressFail = (payload: any) => ({
  type: userAction.ADD_ADDRESS_FAIL,
  payload,
});

export const UpdateAddressRequest = (payload: any, id: any) => ({
  type: userAction.UPDATE_ADDRESS_REQ,
  payload,
  id,
});

export const UpdateAddressSuccess = (payload: any) => ({
  type: userAction.UPDATE_ADDRESS_SUCCESS,
  payload,
});

export const UpdateAddressFailed = (payload: any) => ({
  type: userAction.UPDATE_ADDRESS_FAIL,
  payload,
});

// export const deleteEmailRequest = (id: any) => ({
//   type: userAction.DELETE_EMAIL_REQ,
//   id,
// });

// export const deleteEmailSuccess = (id: any) => ({
//   type: userAction.DELETE_EMAIL_SUCCESS,
//   id,
// });

// export const deleteEmailFailed = (id: any) => ({
//   type: userAction.DELETE_EMAIL_FAIL,
//   id,
// });
