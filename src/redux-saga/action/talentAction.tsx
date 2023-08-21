import * as ActionTalent from '../constant/talentConstant'

// Get
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

// Search
export const SearchTalentReq = (payload : any) => ({
    type: ActionTalent.SEARCH_DATA_REQ,
    payload
})

export const SearchTalentSuccess = (payload : any) => ({
    type: ActionTalent.SEARCH_DATA_SUCCESS,
    payload
})

export const SearchTalentFailed = (payload : any) => ({
    type: ActionTalent.SEARCH_DATA_FAILED,
    payload
})