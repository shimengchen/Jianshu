import {fromJS} from 'immutable'; 
import hotImg from '../../../static/journalist.png';
import freehandImg from '../../../static/Eco_friendly.png';
import { actionTypes } from '.';

//使用fromJS将js对象转化为immutable对象
const defaultState=fromJS({
    topicList:[{
        id:1,
        topic:'社会热点',
        url:hotImg
    },
    {
        id:2,
        topic:'手绘',
        url:freehandImg
    }
    ],
    articleList:[],
    recommendList:[
        'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png',
        'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png',
        'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png',
        'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
    ],
    page:1,
    showBack:false
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.LOAD_ARTICLE:
            return state.set('articleList',action.data);
        case actionTypes.LOAD_MORE:
            return state.merge({
                'articleList':state.get('articleList').concat(action.data),
                'page':action.nextPage
            });
        case actionTypes.SHOW_BACK_TOP:
            return state.set('showBack',true);
        case actionTypes.HIDE_BACK_TOP:
            return state.set('showBack',false);
        default:
            return state;
    }
}