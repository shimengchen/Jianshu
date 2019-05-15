import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'

import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem,
    SearchWrapper, 
    NavSearch, 
    Addition, 
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style'

class Header extends Component{
    render(){
        const {focused,list,handleInputFocus,handleInputBlur}=this.props;
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                      <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                     <CSSTransition 
                      in={focused}
                      timeout={200}
                      classNames='slides'
                     >
                      <NavSearch 
                      className={focused?'focused':''} 
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}         
                      />
                     </CSSTransition>
                    <span className={focused?'iconfont focused':'iconfont'}>&#xe6cf;</span>
                    {focused&&<SearchInfo>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch>换一批</SearchInfoSwitch>
                            <SearchInfoList>
                                {
                                    list.map((item)=>{
                                        return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                    })
                                }
                            </SearchInfoList>
                        </SearchInfoTitle>
                    </SearchInfo>}
                    </SearchWrapper>
                    <Addition>
                        <Button className='reg'><span className="iconfont">&#xe624;</span> 写文章</Button>
                        <Button>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        focused:state.get('header').get('focused'),
        list:state.getIn(['header','list'])
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       handleInputFocus(){
           dispatch(actionCreators.getSearchInfoList());
           dispatch(actionCreators.searchFocus());
       },
       handleInputBlur(){
           dispatch(actionCreators.searchBlur());
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);