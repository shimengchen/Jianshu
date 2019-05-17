import {actionTypes} from './index'
import {fromJS} from 'immutable';
import axios from "axios";

const loadArticle=(data)=>({
    type:actionTypes.LOAD_ARTICLE,
    data:fromJS(data)
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
