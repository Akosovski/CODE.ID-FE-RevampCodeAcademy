import * as ActionEmployee from '../constant/employeeConstant'

// Get All Employee
export const GetEmployeeReq = (payload : any) =>({
    type:ActionEmployee.GET_DATA_REQ,
    payload
})

export const GetEmployeeSuccess = (payload : any) => ({
    type: ActionEmployee.GET_DATA_SUCCESS,
    payload
})

export const GetEmployeeFail = (payload: any) => ({
    type: ActionEmployee.GET_DATA_FAILED,
    payload
})

// Search
export const SearchEmployeeReq = (payload : any) => ({
    type: ActionEmployee.SEARCH_DATA_REQ,
    payload
})

export const SearchEmployeeSuccess = (payload : any) => ({
    type: ActionEmployee.SEARCH_DATA_SUCCESS,
    payload
})

export const SearchEmployeeFailed = (payload : any) => ({
    type: ActionEmployee.SEARCH_DATA_FAILED,
    payload
})