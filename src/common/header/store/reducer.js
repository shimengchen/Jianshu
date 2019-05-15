import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'; 

//使用fromJS将js对象转化为immutable对象
const defaultState=fromJS({
    focused:false,
    list:[]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
          return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
          return state.set('focused',false);
        case actionTypes.SEARCH_INFO_LIST:
          return state.set('list',action.data);
        default:
          return state;
    }
}