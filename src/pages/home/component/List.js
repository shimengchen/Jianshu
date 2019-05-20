import React, {Component} from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../store/index';
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style';

class List extends Component{
    componentDidMount(){
        this.props.handleLoadArticleList();
    }

    render(){
        const {articleList,getMoreList,page}=this.props;
        return (
            <div>
                {articleList.map((item,index)=>{
                    return (
                        <ListItem key={index}>
                         <img className='pic' src={item.get('imgUrl')} alt='item'/>
                         <ListInfo>
                            <h3 className='title'>{item.get('title')}</h3>
                            <p className='desc'>{item.get('desc')}</p>
                         </ListInfo>
                        </ListItem>
                    )
                })}
                <LoadMore onClick={()=>getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        topicList:state.getIn(['home','topicList']),
        articleList:state.getIn(['home','articleList']),
        page:state.getIn(['home','page'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleLoadArticleList(){
            dispatch(actionCreators.getArticleList());
        },
        getMoreList(page){
            dispatch(actionCreators.getMoreList(page));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);