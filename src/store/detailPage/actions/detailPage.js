import * as constants from '../constants';

//data artist
export function getDetailPageStart(id) { 
    return {
        type: constants.DETAILPAGE_GET_START,
        id
    }
}

export function getDetailPageSuccess(data) {
    return {
        type: constants.DETAILPAGE_GET_SUCCESS,
        payload: {
            data
        }
    }
}

export function getDetailPageError(error) {
    return {
        type: constants.DETAILPAGE_GET_ERROR,
        payload: {
            error
        }
    }
}

//list releases
export function getListReleasesStart(id) { 
    return {
        type: constants.LISTRELEASES_GET_START,
        id
    }
}

export function getListReleasesSuccess(data) {
    return {
        type: constants.LISTRELEASES_GET_SUCCESS,
        payload: {
            relases: data
        }
    }
}

export function getListReleasesError(error) {
    return {
        type: constants.LISTRELEASES_GET_ERROR,
        payload: {
            error
        }
    }
}

