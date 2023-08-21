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
    //case ActionType.ADD_DATA_REQUEST:
      //return { ...state };
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

export default TalentReducer;