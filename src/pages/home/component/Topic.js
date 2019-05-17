import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem
} from '../style';

class Topic extends Component{
    render(){
        const {topicList}=this.props;
        const newTopicList=topicList.toJS(topicList);
        return (
            <TopicWrapper>
                {
                    newTopicList.map((item)=>{
                        return (
                            <TopicItem key={item.id}>
                                <img className='topic-item' src={item.url} alt='hotTopic'/>
                                {item.topic}
                            </TopicItem>
                        )
                    })
                }
            </TopicWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        topicList:state.getIn(['home','topicList'])
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Topic);