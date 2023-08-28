import { call, put } from "redux-saga/effects";
import userApi from "../../pages/api/endPointApi";
import {
  UpdateEducationFailed,
  UpdateEducationSuccess,
  addEducationFail,
  addEducationSuccess,
  deleteEducationFailed,
  deleteEducationSuccess,
} from "../action/educationAction";

function* handleAddEducationUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.addEducation, payload, id);
    yield put(addEducationSuccess(result));
  } catch (error) {
    yield put(addEducationFail(error));
  }
}

function* handleUpdateEducationUsers(action: any): any {
  const { payload, id } = action;
  try {
    const result = yield call(userApi.updateEducation, payload, id);
    yield put(UpdateEducationSuccess(result));
  } catch (error) {
    yield put(UpdateEducationFailed(error));
  }
}

function* handleDeleteEducationUsers(action: any): any {
  const { id } = action;
  try {
    const result = yield call(userApi.deleteEducation, id);
    yield put(deleteEducationSuccess(result));
  } catch (error) {
    yield put(deleteEducationFailed(error));
  }
}

export {
  handleAddEducationUsers,
  handleUpdateEducationUsers,
  handleDeleteEducationUsers,
};
