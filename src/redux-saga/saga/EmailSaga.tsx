import { call, put } from "redux-saga/effects";
import userApi from "../../pages/api/endPointApi";
import {
  UpdateEmailFailed,
  UpdateEmailSuccess,
  addEmailFail,
  addEmailSuccess,
  deleteEmailFailed,
  deleteEmailSuccess,
} from "../action/emailAction";

function* handleAddEmailUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.addEmail, payload, id);
    yield put(addEmailSuccess(result));
  } catch (error) {
    yield put(addEmailFail(error));
  }
}

function* handleUpdateEmailUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.updateEmail, payload, id);
    yield put(UpdateEmailSuccess(result));
  } catch (error) {
    yield put(UpdateEmailFailed(error));
  }
}

function* handleDeleteEmailUsers(action: any): any {
  const { id } = action;
  try {
    const result = yield call(userApi.deleteEmail, id);
    yield put(deleteEmailSuccess(result));
  } catch (error) {
    yield put(deleteEmailFailed(error));
  }
}

export { handleAddEmailUsers, handleUpdateEmailUsers, handleDeleteEmailUsers };
