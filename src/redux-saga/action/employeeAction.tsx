import * as ActionEmployee from '../constant/employeeConstant'

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