import React, {Component} from 'react';
import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {connect} from 'react-redux';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
import { actionCreators } from './store';

class Home extends Component{

    handleBackTop=()=>{
        window.scrollTo(0,0);
    }

    bindEvent=()=>{
        window.addEventListener('scroll',this.props.handleWindowScoll);
    }

    componentDidMount(){
        this.bindEvent();
    }

    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.handleWindowScoll);
    }

    render(){
        const {showBack}=this.props;
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
                {showBack&&<BackTop onClick={this.handleBackTop}>回到顶部</BackTop>}
            </HomeWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        showBack:state.getIn(['home','showBack'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleWindowScoll(){
            if(document.documentElement.scrollTop>400){
                dispatch(actionCreators.showBackTop());
            }else{
                dispatch(actionCreators.hideBackTop());
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);