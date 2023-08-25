import { takeEvery, all } from 'redux-saga/effects'

import * as ActionTalent from '../constant/talentConstant'
import * as ActionEmployee from '../constant/employeeConstant'

import { handleGetTalent, handleGetOneTalent, handleSearchTalent, handleEditStatus , handleCreateContract } from './talentSaga'
import { handleGetEmployee } from './employeeSaga'

function* watchAll(){
    yield all([
        // Talent
        takeEvery(ActionTalent.GET_DATA_REQ, handleGetTalent),
        takeEvery(ActionTalent.GET_ONE_DATA_REQ, handleGetOneTalent),
        takeEvery(ActionTalent.SEARCH_DATA_REQ, handleSearchTalent),
        takeEvery(ActionTalent.EDIT_DATA_REQ, handleEditStatus),
        takeEvery(ActionTalent.CREATE_DATA_REQ, handleCreateContract),

        // Employee
        takeEvery(ActionEmployee.GET_EMPLOYEE_REQ, handleGetEmployee),
    ])
}

export default watchAll