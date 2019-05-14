import React, { Component } from 'react';
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
    render(){
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
                    <NavSearch/>
                    <span className="iconfont">&#xe6cf;</span>
                    </SearchWrapper>
                    <Addition>
                        <Button className='reg'><span className="iconfont">&#xe624;</span>写文章</Button>
                        <Button>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}
export default Header;