import { combineReducers } from 'redux';
import { homePageReducer } from './homePageReducer';

const rootReducer = combineReducers({
    homePageStore: homePageReducer

});

export default rootReducer;
