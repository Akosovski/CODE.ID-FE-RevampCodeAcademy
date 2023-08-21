import {combineReducers} from 'redux'
import TalentReducer from './talentReducer'
import TalentDetailReducer from './talentDetailReducer'
import EmployeeReducer from './employeeReducer'

const rootReducer = combineReducers({
    talentState : TalentReducer,
    talentDetailState :TalentDetailReducer,
    employeeState :EmployeeReducer
})

export default rootReducer