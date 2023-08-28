import { call, put } from "redux-saga/effects";
import userApi from "../../pages/api/endPointApi";

import {
  UpdatePhoneFailed,
  UpdatePhoneSuccess,
  addPhoneFail,
  addPhoneSuccess,
  deletePhoneFailed,
  deletePhoneSuccess,
} from "../action/phoneAction";

function* handlePhoneUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.addPhone, payload, id);
    yield put(addPhoneSuccess(result));
  } catch (error) {
    yield put(addPhoneFail(error));
  }
}

function* handleUpdatePhoneUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.updatePhone, payload, id);
    yield put(UpdatePhoneSuccess(result));
  } catch (error) {
    yield put(UpdatePhoneFailed(error));
  }
}

function* handleDeletePhoneUsers(action: any): any {
  const { id } = action;
  try {
    const result = yield call(userApi.deletePhone, id);
    yield put(deletePhoneSuccess(result));
  } catch (error) {
    yield put(deletePhoneFailed(error));
  }
}

export { handlePhoneUsers, handleUpdatePhoneUsers, handleDeletePhoneUsers };
