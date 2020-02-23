import * as actions from "../actions/detailPage";
import * as constants from '../constants';
import { call, put, takeEvery } from "redux-saga/effects";

//fetch data artist
export function* getData(action) { 
    const {id} = action;
    try {
        const response = yield call(
            fetch,
            `https://api.discogs.com/artists/${id}?key=CdvsbTeYizKEhAlIlsgw&secret=hQFqliSpdhweVGOrzJgEgqBgAXVHMsun`
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

//fetch list releases
export function* getListreleases(action) { 
    const {id} = action;
    try {
        const response = yield call(
            fetch,
            `https://api.discogs.com/artists/${id}/releases?key=CdvsbTeYizKEhAlIlsgw&secret=hQFqliSpdhweVGOrzJgEgqBgAXVHMsun`
        );
        const data = yield response.json(); 
        yield put(actions.getListReleasesSuccess(data));
    } catch (e) {
        yield put(actions.getListReleasesError(e));
    }
}

export function* getDataSagaListReleases() {
    yield takeEvery(constants.LISTRELEASES_GET_START, getListreleases);
}
