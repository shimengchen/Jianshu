import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'; 

//使用fromJS将js对象转化为immutable对象
const defaultState=fromJS({
    focused:false,
    list:[]
});

export default (state=defaultState,action)=>{
    if(action.type===actionTypes.SEARCH_FOCUS){
        //immutable对象的set方法，会结合之前immutable对象的值
        //返回新的immutable对象
        return state.set('focused',true);
    }
    if(action.type===actionTypes.SEARCH_BLUR){
        return state.set('focused',false);
    }
    if(action.type===actionTypes.SEARCH_INFO_LIST){
        return state.set('list',action.data);
    }
    return state;
}