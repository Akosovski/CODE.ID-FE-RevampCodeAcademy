import * as ActionTalent from '../constant/talentConstant'

export const GetTalentReq = (payload : any) =>({
    type:ActionTalent.GET_DATA_REQ,
    payload
})

export const GetOneTalentReq = (payload : any) => ({
    type:ActionTalent.GET_DATA_REQ,
    payload
})

export const GetTalentSuccess = (payload : any) => ({
    type: ActionTalent.GET_DATA_OK,
    payload
})

export const GetTalentFail = (payload: any) => ({
    type: ActionTalent.GET_DATA_FAIL,
    payload
})