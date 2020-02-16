import * as actions from "../actions/detailPage";
import * as constants from '../constants';
import { call, put, takeEvery } from "redux-saga/effects";

export function* getData(action) { 
    const {id} = action;
    try {
        const response = yield call(
            fetch,
            `https://api.discogs.com/artists/${id}`
        );
        const data = yield response.json(); 
        yield put(actions.getDetailPageSuccess(data));
    } catch (e) {
        yield put(actions.getDetailPageError(e));
    }
}

export function* getDataSagaDetailPage() {
    yield takeEvery(constants.DETAILPAGE_GET_START, getData);
}
