import {combineReducers} from 'redux'
import TalentReducer from './talentReducer'
import TalentDetailReducer from './talentDetailReducer'

const rootReducer = combineReducers({
    talentState : TalentReducer,
    talentDetailState :TalentDetailReducer
})

export default rootReducer