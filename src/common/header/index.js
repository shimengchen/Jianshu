import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
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

class Header extends Component{
    constructor(props){
        super(props);
        this.state=({
            focused:false  //搜索框焦点控制
        });
    }

    handleInputFocus=()=>{
        this.setState({
            focused:true
        });
    }

    handleInputBlur=()=>{
        this.setState({
            focused:false
        });
    }

    render(){
        const {focused}=this.state;
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
                      onFocus={this.handleInputFocus}
                      onBlur={this.handleInputBlur}         
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
}
export default Header;