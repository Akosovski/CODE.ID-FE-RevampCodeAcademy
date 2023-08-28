import * as ActionEmployee from '../constant/employeeConstant'
import * as userAction from '../constant/userConstant';

// Get All Employee
export const GetEmployeeReq = (payload : any) =>({
    type:ActionEmployee.GET_EMPLOYEE_REQ,
    payload
})

export const GetEmployeeSuccess = (payload : any) => ({
    type:ActionEmployee.GET_EMPLOYEE_SUCCESS,
    payload
})

export const GetEmployeeFail = (payload: any) => ({
    type:ActionEmployee.GET_EMPLOYEE_FAILED,
    payload
})

// Users for Employee
export const employeeSignupReq = (payload:any) =>({
    type : userAction.EMPLOYEE_SIGNUP_REQ,
    payload
})
export const employeeSignupSuccess = (payload:any) =>({
    type : userAction.EMPLOYEE_SIGNUP_SUCCESS,
    payload
})
export const employeeSignupFail = (payload:any) =>({
    type : userAction.EMPLOYEE_SIGNUP_FAIL,
    payload
})
export const getDataAllEmployeeReq = () =>({
    type : userAction.GET_ALL_EMPLOYEE_REQ,
})
export const getDataAllEmployeeSuccess = (payload:any) =>({
    type : userAction.GET_ALL_EMPLOYEE_SUCCESS,
    payload
})
export const getDataAllEmployeeFail = (payload:any) =>({
    type : userAction.GET_ALL_EMPLOYEE_FAIL,
    payload
})