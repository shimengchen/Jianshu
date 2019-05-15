import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from "axios";
export const searchFocus = ()=>({
    type:actionTypes.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type:actionTypes.SEARCH_BLUR
});

const changeSearchInfoList=(data)=>({
    type:actionTypes.SEARCH_INFO_LIST,
    data:fromJS(data)
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