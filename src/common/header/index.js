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
        const {focused,mouseIn,list,page,totalPage,handleInputFocus,handleInputBlur,handleMouseEnter,handleMouseLeave,handleSwitchPage}=this.props;
        //将list由immutable对象类型转换为js对象类型
        const newList=list.toJS(list);
        const pageList=[];

        if(newList.length){
         for(let i=page*10;i<(page+1)*10;i++){
            if(!newList[i]) break;
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            );
         }
        }
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
                      onFocus={()=>{handleInputFocus(list)}}
                      onBlur={handleInputBlur}         
                      />
                     </CSSTransition>
                    <span className={focused?'iconfont focused zoom':'iconfont zoom'}>&#xe6cf;</span>
                    {(focused||mouseIn)&&<SearchInfo 
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch onClick={()=>{handleSwitchPage(page,totalPage,this.spinIcon)}}>
                              <span ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe606;</span>换一批
                              </SearchInfoSwitch>
                            <SearchInfoList>
                                {pageList}
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
        mouseIn:state.getIn(['header','mouseIn']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage'])
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
       handleInputFocus(list){
           (list.size===0)&&dispatch(actionCreators.getSearchInfoList());
           dispatch(actionCreators.searchFocus());
       },
       handleInputBlur(){
           dispatch(actionCreators.searchBlur());
       },
       handleMouseEnter(){
           dispatch(actionCreators.mouseEnter());
       },
       handleMouseLeave(){
           dispatch(actionCreators.mouseLeave());
       },
       handleSwitchPage(page,totalPage,spinIcon){
           //换页icon动画效果
           const originDeg=parseInt(spinIcon.style.transform.replace(/[^0-9]/ig,''));
           const angle=originDeg?originDeg:0;
           spinIcon.style.transform='rotate('+(angle+360)+'deg)';

           const data=(page+1)%totalPage;
           dispatch(actionCreators.switchPage(data));
       }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);