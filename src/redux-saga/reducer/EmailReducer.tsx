import * as userAction from "../constant/userConstant";

const INIT_STATE = {
  email: [],
};

const EmailReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case userAction.ADD_EMAIL_REQ:
      return { ...state };
    case userAction.ADD_EMAIL_SUCCESS:
      return addemail(state, action);
    case userAction.UPDATE_EMAIL_SUCCESS:
      return updateemail(state, action);
    case userAction.DELETE_EMAIL_SUCCESS:
      return deleteemail(state, action);
    default:
      return state;
  }
};

const addemail = (state: any, action: any) => {
  return {
    ...state,
    email: action.payload,
  };
};

const updateemail = (state: any, action: any) => {
  return {
    ...state,
    email: action.payload,
  };
};

const deleteemail = (state: any, action: any) => {
  return {
    ...state,
    email: action.payload,
  };
};

export default EmailReducer;
