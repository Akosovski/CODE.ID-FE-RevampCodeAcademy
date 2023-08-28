import * as userAction from '../constant/userConstant';

const INIT_STATE = {
    employee: [],
}
const employeeReducer = (state = INIT_STATE, action : any) => {
        switch(action.type){
            case userAction.EMPLOYEE_SIGNUP_SUCCESS:
                console.log("EMPLOYEE_SIGNUP_SUCCESS", action.payload)
                return employeeSignup(state, action)
            case userAction.EMPLOYEE_SIGNUP_FAIL:
                return {...state}
            case userAction.GET_ALL_EMPLOYEE_SUCCESS:
                console.log("GET_ALL_USER_SUCCESS",action.payload)
                return getAllEmployee(action)
            case userAction.GET_ALL_EMPLOYEE_FAIL:
                return {...state}
                default:
                return {...state}
        }
}

const employeeSignup = (state:any,action:any) => {
    return {
        ...state,
        users:[...state.users, action.payload]
    }
}
const getAllEmployee = (action:any) => {
    return {
        ...action.payload,
    }
}


export default employeeReducer