import {combineReducers} from 'redux'
import TalentReducer from './talentReducer'

const rootReducer = combineReducers({
    talentState : TalentReducer,
})

export default rootReducer