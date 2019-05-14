import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem,
    SearchWrapper, 
    NavSearch, 
    Addition, 
    Button 
} from './style'

const Header=(props)=>{
    const {focused}=props;
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
                  onFocus={props.handleInputFocus}
                  onBlur={props.handleInputBlur}         
                  />
                 </CSSTransition>
                <span className={focused?'iconfont focused':'iconfont'}>&#xe6cf;</span>
                </SearchWrapper>
                <Addition>
                    <Button className='reg'><span className="iconfont">&#xe624;</span> 写文章</Button>
                    <Button>注册</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    )
    }

const mapStateToProps=(state)=>{
    return {
        focused:state.focused
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       handleInputFocus(){
           const action={
               type:'search_focus'
           }
           dispatch(action);
       },
       handleInputBlur(){
           const action={
               type:'search_blur'
           }
           dispatch(action);
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);