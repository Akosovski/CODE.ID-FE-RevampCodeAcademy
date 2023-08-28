import { call, put } from 'redux-saga/effects'
import employee from '@/pages/api/employee'
import { 
    GetEmployeeFail, 
    GetEmployeeSuccess, 
} from '../action/employeeAction'
import userApi from '../../pages/api/endPointApi'
import { 
    getDataAllEmployeeFail,
    getDataAllEmployeeSuccess,
    employeeSignupSuccess,
    employeeSignupFail
    } from '../action/employeeAction'

function* handleGetEmployee(action: any): any {
    const { payload } = action;
    try {
        const result = yield call(employee.GetEmployee, payload)
        yield put(GetEmployeeSuccess(result.data))
    } catch (error) {
        yield put(GetEmployeeFail(error))
    }
}

function* getAllEmployee():any {
    try {
        const data = yield call(userApi.getAllEmployee)
        yield put(getDataAllEmployeeSuccess({payload: data}))
    } catch (error) {
        yield put(getDataAllEmployeeFail(error))
    }
}

function* signUpEmployee(action:any):any {
    const {payload} = action
    // console.log("SAGA SIGNUP",payload)
    try {
        const result = yield call(userApi.employeeSignUp, payload)
        yield put(employeeSignupSuccess(result))
    } catch (error) {
        yield put(employeeSignupFail(error))
    }
}

export {
    getAllEmployee,
    signUpEmployee,
    handleGetEmployee,
}