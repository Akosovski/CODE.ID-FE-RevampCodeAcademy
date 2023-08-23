import * as ActionType from "../constant/talentConstant";

const INIT_STATE = {
  talents: [],
};

const TalentReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQ:
      return { ...state };
    case ActionType.GET_DATA_SUCCESS:
      return GetTalent(state, action);
    case ActionType.SEARCH_DATA_REQ:
      return { ...state };
    case ActionType.SEARCH_DATA_SUCCESS:
      return SearchTalent(state, action);
    default:
      return { ...state };
  }
};

const GetTalent = (state: any, action: any) => {
  return {
    ...state,
    talents: action.payload,
  };
};

const SearchTalent = (state: any, action: any) => {
  return {
    ...state,
    talents: action.payload,
  };
};

export default TalentReducer;