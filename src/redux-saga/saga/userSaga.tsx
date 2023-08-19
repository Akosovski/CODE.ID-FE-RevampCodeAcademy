import { put, call } from "redux-saga/effects";
import user from "@/pages/api/user";
import { GetUserFail, GetUserSuccess } from "../action/userAction";

function* handleGetUser(action: any): any {
  try {
    const { payload } = action;
    const result = yield call(user.GetUser, payload);
    yield put(GetUserSuccess(result));
  } catch (error) {
    yield put(GetUserFail(error));
  }
}

export { handleGetUser };