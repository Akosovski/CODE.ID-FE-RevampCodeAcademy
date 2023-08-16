import {takeEvery,all} from 'redux-saga/effects'
import * as ActionRegion from '../constant/talentConstant'
import { handleGetTalent } from './talentSaga'

function* watchAll(){
    yield all([
        takeEvery(ActionRegion.GET_DATA_REQ,handleGetTalent)
    ])
}

export default watchAll