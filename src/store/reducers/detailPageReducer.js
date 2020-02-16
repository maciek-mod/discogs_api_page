import * as constants from '../detailPage/constants'; 

const initialState = {
    data: null,
    error: false,
    isError: false,
    isLoading: true
};

export function detailPageReducer(state = initialState, action){
    switch (action.type) {
        case constants.DETAILPAGE_GET_START:
            return {...state, isLoading: true};
        case constants.DETAILPAGE_GET_SUCCESS:
            return {...state, data: action.payload.data, isLoading: false};
        case constants.DETAILPAGE_GET_ERROR:
            return {...state, isLoading: false, isError: true, error: action.payload.error};
        default:
            return state;
    }
}
