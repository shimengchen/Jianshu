import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'; 

//使用fromJS将js对象转化为immutable对象
const defaultState=fromJS({
    focused:false
});

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.SEARCH_FOCUS){
        return state.set('focused',true);
    }
    if(action.type===actionTypes.SEARCH_BLUR){
        return state.set('focused',false);
    }
    return state;
}