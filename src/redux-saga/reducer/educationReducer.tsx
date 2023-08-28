import * as userAction from "../constant/userConstant";

const INIT_STATE = {
  education: [],
};

const EducationReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case userAction.ADD_EDUCATION_REQ:
      return { ...state };
    case userAction.ADD_EDUCATION_SUCCESS:
      return addeducation(state, action);
    case userAction.UPDATE_EDUCATION_SUCCESS:
      return updateeducation(state, action);
    case userAction.DELETE_EDUCATION_SUCCESS:
      return deleteeducation(state, action);
    default:
      return state;
  }
};

const addeducation = (state: any, action: any) => {
  return {
    ...state,
    education: action.payload,
  };
};

const updateeducation = (state: any, action: any) => {
  return {
    ...state,
    education: action.payload,
  };
};

const deleteeducation = (state: any, action: any) => {
  return {
    ...state,
    education: action.payload,
  };
};

export default EducationReducer;
