import * as ActionTalent from '../constant/talentConstant'

// Get One Talent
export const GetOneTalentReq = (payload : any) => ({
    type:ActionTalent.GET_ONE_DATA_REQ,
    payload
})

export const GetOneTalentSuccess = (payload : any) => ({
    type:ActionTalent.GET_ONE_DATA_SUCCESS,
    payload
})

export const GetOneTalentFail = (payload: any) => ({
    type:ActionTalent.GET_ONE_DATA_FAILED,
    payload
})

// Get All Talents
export const GetTalentReq = (payload : any) =>({
    type:ActionTalent.GET_DATA_REQ,
    payload
})

export const GetTalentSuccess = (payload : any) => ({
    type:ActionTalent.GET_DATA_SUCCESS,
    payload
})

export const GetTalentFail = (payload: any) => ({
    type:ActionTalent.GET_DATA_FAILED,
    payload
})

// Search
export const SearchTalentReq = (payload: any) => ({
    type:ActionTalent.SEARCH_DATA_REQ,
    payload
});

export const SearchTalentSuccess = (payload : any) => ({
    type:ActionTalent.SEARCH_DATA_SUCCESS,
    payload
})

export const SearchTalentFailed = (payload : any) => ({
    type:ActionTalent.SEARCH_DATA_FAILED,
    payload
})