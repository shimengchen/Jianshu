import {actionTypes} from './index'
import {fromJS} from 'immutable';
import axios from "axios";

const loadArticle=(data)=>({
    type:actionTypes.LOAD_ARTICLE,
    data:fromJS(data)
});

const addHomeList=(data,nextPage)=>({
    type:actionTypes.LOAD_MORE,
    data:fromJS(data),
    nextPage
});

export const getArticleList=()=>{
    return (dispatch)=>{
        axios.get('/api/articleList.json').then((res)=>{
            const data=res.data;
            dispatch(loadArticle(data.data));
        }).catch(()=>{
            console.log('error');
        });
    }
}

export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json?page='+page).then((res)=>{
            const result=res.data.data;
            dispatch(addHomeList(result,page+1));
        }).catch(()=>{
            console.log('error--');
        });
    }
}
