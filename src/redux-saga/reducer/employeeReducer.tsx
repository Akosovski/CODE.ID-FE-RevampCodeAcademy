import * as ActionType from "../constant/employeeConstant";

const INIT_STATE = {
  employees: [],
};

const EmployeeReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_EMPLOYEE_REQ:
      return { ...state };
    case ActionType.GET_EMPLOYEE_SUCCESS:
      return GetEmployee(state, action);
    default:
      return { ...state };
  }
};

const GetEmployee = (state: any, action: any) => {
  return {
    ...state,
    employees: action.payload,
  };
};

export default EmployeeReducer;