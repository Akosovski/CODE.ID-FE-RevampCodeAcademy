import * as userAction from "../constant/userConstant";

const INIT_STATE = {
  users_pass: [],
};

const ChangePasswordReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case userAction.CHANGE_PASSWORD_REQ:
      return { ...state };
    case userAction.CHANGE_PASSWORD_SUCCESS:
      return changePassword(state, action);

    default:
      return state;
  }
};

const changePassword = (state: any, action: any) => {
  return {
    ...state,
    users_pass: action.payload,
  };
};

export default ChangePasswordReducer;
