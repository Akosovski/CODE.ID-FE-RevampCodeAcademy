import {call,put} from 'redux-saga/effects'
import talent from '@/pages/api/talent'
import { GetTalentFail, GetTalentSuccess } from '../action/talentAction'

function* handleGetTalent(action: any): any {
    const { payload } = action;
    try {
        const result = yield call(talent.GetTalent, payload)
        yield put(GetTalentSuccess(result.data))
    } catch (error) {
        yield put(GetTalentFail(error))
    }
}

function* handleGetOneTalent(action: any): any {
    const { payload } = action;
    try {
        const result = yield call(talent.findOneTalent, payload)
        yield put(GetTalentSuccess(result.data))
    } catch (error) {
        yield put(GetTalentFail(error))
    }
}

export {
    handleGetTalent,
    handleGetOneTalent
}