import { getDataSagaHomePage } from '../homePage/sagas/sagas';
import { getDataSagaDetailPage, getDataSagaListReleases } from '../detailPage/sagas/sagas';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {  
  yield all([
    getDataSagaHomePage(),
    getDataSagaDetailPage(),
    getDataSagaListReleases() 
  ]);
} 