import * as userAction from '../constant/userConstant';

const INIT_STATE = {
    users: [],
    oneUser:[]
}
const userReducer = (state = INIT_STATE, action : any) => {
        switch(action.type){
            case userAction.USER_SIGNUP_SUCCESS:
                console.log("USER_SIGNUP_SUCCESS", action.payload)
                return userSignup(state, action)
            case userAction.USER_SIGNUP_FAIL:
                return {...state}
            case userAction.GET_ALL_USER_SUCCESS:
                console.log("GET_ALL_USER_SUCCESS",action.payload)
                return getAllUser(action)
            case userAction.GET_ALL_USER_FAIL:
                return {...state}
            case userAction.GET_ONE_USER_SUCCESS:
                return getOneUser(state,action)
            case userAction.GET_ONE_USER_FAIL:
                return {...state}
                default:
                return {...state}
        }
}

const userSignup = (state:any,action:any) => {
    return {
        ...state,
        users:[...state.users, action.payload]
    }
}
const getAllUser = (action:any) => {
    return {
        ...action.payload,
    }
}
const getOneUser = (state:any,action:any) => {
    const {oneUSerData} = action.payload
    console.log("GET_ONE_USER_SUCCESS",oneUSerData)
    return {
        ...state,
        oneUser:[...state.oneUser, oneUSerData]
    }
}


export default userReducer