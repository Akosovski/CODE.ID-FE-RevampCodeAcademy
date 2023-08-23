import * as ActionType from "../constant/talentConstant";

const INIT_STATE = {
  talent: [],
};

const TalentDetailReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_ONE_DATA_REQ:
      return { ...state };
    case ActionType.GET_ONE_DATA_SUCCESS:
      return GetOneTalent(state, action);
    default:
      return { ...state };
  }
};

const GetOneTalent = (state: any, action: any) => {
  return {
    ...state,
    talent: action.payload,
  };
};

export default TalentDetailReducer;