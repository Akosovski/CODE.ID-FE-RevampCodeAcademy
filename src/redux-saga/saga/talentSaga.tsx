import { call, put, takeLatest } from 'redux-saga/effects'
import talent from '@/pages/api/talent'
import { 
    GetTalentFail, 
    GetTalentSuccess, 
    GetOneTalentFail, 
    GetOneTalentSuccess,
} from '../action/talentAction'

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
        const result = yield call(talent.GetOneTalent, payload)
        yield put(GetOneTalentSuccess(result.data))
    } catch (error) {
        yield put(GetOneTalentFail(error))
    }
}

export {
    handleGetTalent,
    handleGetOneTalent
}