import React, {Component} from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../store/index';
import {
    ListItem,
    ListInfo
} from '../style';

class List extends Component{
    componentDidMount(){
        this.props.handleLoadArticleList();
    }

    render(){
        const {articleList}=this.props;
        return (
            <div>
                {articleList.map((item)=>{
                    return (
                        <ListItem key={item.get('id')}>
                         <img className='pic' src={item.get('imgUrl')} alt='item'/>
                         <ListInfo>
                            <h3 className='title'>{item.get('title')}</h3>
                            <p className='desc'>{item.get('desc')}</p>
                         </ListInfo>
                        </ListItem>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        topicList:state.getIn(['home','topicList']),
        articleList:state.getIn(['home','articleList'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {
        handleLoadArticleList(){
            dispatch(actionCreators.getArticleList());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);