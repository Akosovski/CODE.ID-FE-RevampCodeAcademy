import { call, put } from 'redux-saga/effects'
import employee from '@/pages/api/employee'
import { 
    GetEmployeeFail, 
    GetEmployeeSuccess, 
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

export {
    handleGetEmployee
}