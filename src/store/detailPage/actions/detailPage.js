import * as constants from '../constants';

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

