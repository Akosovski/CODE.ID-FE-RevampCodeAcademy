import * as userAction from "../constant/userConstant";

const INIT_STATE = {
  phone: [],
};

const PhoneReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case userAction.ADD_PHONE_REQ:
      return { ...state };
    case userAction.ADD_PHONE_SUCCESS:
      return addphone(state, action);
    case userAction.UPDATE_PHONE_SUCCESS:
      return updatephone(state, action);
    case userAction.DELETE_PHONE_SUCCESS:
      return deletephone(state, action);
    default:
      return state;
  }
};

const addphone = (state: any, action: any) => {
  return {
    ...state,
    phone: action.payload,
  };
};

const updatephone = (state: any, action: any) => {
  return {
    ...state,
    phone: action.payload,
  };
};

const deletephone = (state: any, action: any) => {
  return {
    ...state,
    phone: action.payload,
  };
};

export default PhoneReducer;
