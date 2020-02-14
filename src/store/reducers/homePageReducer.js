import * as constants from '../constants'; 

const initialState = {
    data: null,
    error: false,
    isError: false,
    isLoading: true
};

export function homePageReducer(state = initialState, action){
    switch (action.type) {
        case constants.HOMEPAGE_GET_START:
            return {...state, isLoading: true};
        case constants.HOMEPAGE_GET_SUCCESS:
            return {...initialState, data: action.payload.data, isLoading: false};
        case constants.HOMEPAGE_GET_ERROR:
            return {...state, isLoading: false, isError: true, error: action.payload.error};
        default:
            return state;
    }
}
