import {takeEvery,all} from 'redux-saga/effects'
import * as ActionRegion from '../constant/talentConstant'
import { handleGetTalent, handleGetOneTalent } from './talentSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_DATA_REQ, handleGetTalent),
        takeEvery(ActionRegion.GET_ONE_DATA_REQ, handleGetOneTalent)
    ])
}

export default watchAll