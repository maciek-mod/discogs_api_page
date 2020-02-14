import * as actions from "../actions/homePage";
import * as constants from '../constants';
import { call, put, takeEvery } from "redux-saga/effects";

export function* getData() { 
    try {
        const response = yield call(
            fetch,
            "https://api.discogs.com/database/search?q=PUSH&key=CdvsbTeYizKEhAlIlsgw&secret=hQFqliSpdhweVGOrzJgEgqBgAXVHMsun&type=artist"
        );
        const data = yield response.json(); 
        yield put(actions.getHomePageSuccess(data));
    } catch (e) {
        yield put(actions.getHomePageError(e));
    }
}

export function* getDataSaga() {
    yield takeEvery(constants.HOMEPAGE_GET_START, getData);
}
