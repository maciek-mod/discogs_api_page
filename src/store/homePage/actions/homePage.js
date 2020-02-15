import * as constants from '../constants';

export function getHomePageStart(artist) { 
    return {
        type: constants.HOMEPAGE_GET_START,
        artist
    }
}

export function getHomePageSuccess(data) {
    return {
        type: constants.HOMEPAGE_GET_SUCCESS,
        payload: {
            data
        }
    }
}

export function getHomePageError(error) {
    return {
        type: constants.HOMEPAGE_GET_ERROR,
        payload: {
            error
        }
    }
}

