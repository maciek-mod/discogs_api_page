import { combineReducers } from 'redux';
import { homePageReducer } from './homePageReducer';
import { detailPageReducer } from './detailPageReducer';


const rootReducer = combineReducers({ 
    homePageStore: homePageReducer,
    detailPageStore: detailPageReducer
});

export default rootReducer;
