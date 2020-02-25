import * as actions from "../actions/homePage";
import * as constants from '../constants';
import { call, put, takeEvery } from "redux-saga/effects";

export function* getData(action) { 
    const {artist, urlRequest} = action;
    let url = `https://api.discogs.com/database/search?q=${artist}&key=CdvsbTeYizKEhAlIlsgw&secret=hQFqliSpdhweVGOrzJgEgqBgAXVHMsun&type=artist`;
    if(urlRequest !== undefined){
        url = urlRequest;
    }
    try {
        const response = yield call(
            fetch,
            url
        );
        const data = yield response.json(); 
        yield put(actions.getHomePageSuccess(data));
    } catch (e) {
        yield put(actions.getHomePageError(e));
    }
}

export function* getDataSagaHomePage() {
    yield takeEvery(constants.HOMEPAGE_GET_START, getData);
}
