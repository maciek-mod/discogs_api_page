import * as constants from '../constants';

export function getHomePageStart() {
    return {
        type: constants.HOMEPAGE_GET_START,
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


export function getArtist(artisName) {

    return (dispatch) => {
        dispatch(getHomePageStart());
        fetch('https://api.discogs.com/database/search?q=PUSH&type=artist', {
            method: "GET",
            mode: 'no-cors',
            headers: {
              'Authorization': 'lFQYCXtZygPbdDQpLRUCEaTYattQSgqCbUZGXMhV'
            }
        })
        .then(response => response.json())
        .then(data => {
            dispatch(getHomePageSuccess(data))
        })
        .catch(error => dispatch(getHomePageError(
             error
        )));
    };
}
