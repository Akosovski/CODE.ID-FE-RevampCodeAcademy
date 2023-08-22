import { takeEvery, all } from 'redux-saga/effects'

import * as ActionTalent from '../constant/talentConstant'
import * as ActionEmployee from '../constant/employeeConstant'

import { handleGetTalent, handleGetOneTalent } from './talentSaga'
import { handleGetEmployee } from './employeeSaga'

function* watchAll(){
    yield all([
        // Talent
        takeEvery(ActionTalent.GET_DATA_REQ, handleGetTalent),
        takeEvery(ActionTalent.GET_ONE_DATA_REQ, handleGetOneTalent),

        // Employee
        takeEvery(ActionEmployee.GET_EMPLOYEE_REQ, handleGetEmployee),
    ])
}

export default watchAll