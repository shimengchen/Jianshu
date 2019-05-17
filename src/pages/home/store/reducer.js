import {fromJS} from 'immutable'; 
import hotImg from '../../../static/journalist.png';
import freehandImg from '../../../static/Eco_friendly.png';

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
]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        default:
          return state;
    }
}