import {combineReducers} from 'redux'
import TalentReducer from './talentReducer'
import TalentDetailReducer from './talentDetailReducer'
import EmployeeReducer from './employeeReducer'
import userReducer from "./userReducer"
import employeeReducer from "./employeeReducer"
import loginReducer from "./loginReducer"
import ChangePasswordReducer from "./changePasswordReducer"
import EmailReducer from "./EmailReducer"
import PhoneReducer from "./phoneReducer"
import AddressReducer from "./addressReducer"
import EducationReducer from "./educationReducer"

const rootReducer = combineReducers({
    talentState : TalentReducer,
    talentDetailState :TalentDetailReducer,
    employeeState :EmployeeReducer,
    user: userReducer,
    employee: employeeReducer,
    login: loginReducer,
    password: ChangePasswordReducer,
    email: EmailReducer,
    phone: PhoneReducer,
    address: AddressReducer,
    education: EducationReducer,
})

export default rootReducer