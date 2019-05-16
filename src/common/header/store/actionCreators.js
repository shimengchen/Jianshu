import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from "axios";

const changeSearchInfoList=(data)=>({
    type:actionTypes.SEARCH_INFO_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
});

export const searchFocus = ()=>({
    type:actionTypes.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type:actionTypes.SEARCH_BLUR
});

export const mouseEnter=()=>({
    type:actionTypes.MOUSE_ENTER
});

export const mouseLeave=()=>({
    type:actionTypes.MOUSE_LEAVE
});

export const switchPage=(data)=>({
    type:actionTypes.SWITCH_PAGE,
    page:data
});

export const getSearchInfoList=()=>{
    return (dispatch)=>{
        axios.get('/api/searchInfoList.json').then((res)=>{
            const data=res.data;
            dispatch(changeSearchInfoList(data.data));
        }).catch(()=>{
            console.log('error');
        })
    }
}