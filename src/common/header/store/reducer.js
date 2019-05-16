import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'; 

//使用fromJS将js对象转化为immutable对象
const defaultState=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:0,
    totalPage:1
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
          return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
          return state.set('focused',false);
        case actionTypes.MOUSE_ENTER: 
          return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE: 
          return state.set('mouseIn',false);
        case actionTypes.SWITCH_PAGE:  
          return state.set('page',action.page);
        case actionTypes.SEARCH_INFO_LIST:
          return state.set('list',action.data).set('totalPage',action.totalPage);
        default:
          return state;
    }
}