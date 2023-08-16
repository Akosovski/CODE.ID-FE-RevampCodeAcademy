import * as ActionRegion from '../constant/talentConstant'

export const GetTalentReq = (payload : any) =>({
    type:ActionRegion.GET_DATA_REQ,
    payload
})

export const GetTalentSuccess = (payload : any) => ({
    type: ActionRegion.GET_DATA_OK,
    payload
})

export const GetTalentFail = (payload: any) => ({
    type: ActionRegion.GET_DATA_FAIL,
    payload
})