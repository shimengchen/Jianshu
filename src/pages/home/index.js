import React, {Component} from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='img'/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;