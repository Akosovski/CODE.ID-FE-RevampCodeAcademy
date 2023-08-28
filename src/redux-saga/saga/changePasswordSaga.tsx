import { call, put } from "redux-saga/effects";
import userApi from "../../pages/api/endPointApi";
import {
  changePasswordFail,
  changePasswordSuccess,
} from "../action/changePasswordAction";

function* handleChangePasswordUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.changePassword, payload, id);
    yield put(changePasswordSuccess(result));
  } catch (error) {
    yield put(changePasswordFail(error));
  }
}

export { handleChangePasswordUsers };
