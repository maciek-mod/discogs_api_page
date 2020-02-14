import { getDataSaga } from '../sagas/sagas';
import { put, takeEvery, all } from 'redux-saga/effects'

export default function* rootSaga() { 
  yield all([
    getDataSaga()
  ]);
} 