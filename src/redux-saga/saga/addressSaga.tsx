import { call, put } from "redux-saga/effects";
import userApi from "../../pages/api/endPointApi";

import {
  UpdateAddressFailed,
  UpdateAddressSuccess,
  addAddressFail,
  addAddressSuccess,
} from "../action/addressAction";

function* handleAddressUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.addAddress, payload, id);
    yield put(addAddressSuccess(result));
  } catch (error) {
    yield put(addAddressFail(error));
  }
}

function* handleUpdateAddressUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.updateAddress, payload, id);
    yield put(UpdateAddressSuccess(result));
  } catch (error) {
    yield put(UpdateAddressFailed(error));
  }
}

// function* handleDeleteEmailUsers(action: any): any {
//   const { id } = action;
//   try {
//     const result = yield call(userApi.deleteEmail, id);
//     yield put(deleteEmailSuccess(result));
//   } catch (error) {
//     yield put(deleteEmailFailed(error));
//   }
// }

export { handleAddressUsers, handleUpdateAddressUsers };
