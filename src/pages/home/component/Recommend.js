import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem
} from '../style';

class Recommend extends Component{
    render(){
        const {recommendList}=this.props;
        const newList=recommendList.toJS(recommendList);
        return (
            <RecommendWrapper>
                {
                    newList.map((item)=>{
                        return <RecommendItem imgUrl={item} key={item}/>
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        recommendList:state.getIn(['home','recommendList'])
    }
}

export default connect(mapStateToProps,null)(Recommend);