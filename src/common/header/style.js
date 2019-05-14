import styled from 'styled-components';
import logoImg from '../../static/logo.png'

export const HeaderWrapper=styled.div`
  position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
`;

export const Logo=styled.a`
  position:absolute;
  top:0;
  left:0;
  width:100px;
  height:56px;
  display:block;
  background:url(${logoImg});
  background-size:contain;
`;

export const Nav=styled.div`
  width:960px;
  height:100%;
  margin:0 auto;
  box-sizing:border-box;
  padding-right:70px;
`;

export const NavItem=styled.div`
  line-height:56px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
      float:left;
  }
  &.right{
      float:right;
      color:#969696;
  }
  &.active{
      color:#ea6f5a;
  }
`;

export const SearchWrapper=styled.div`
   position:relative;
   float:left;
   .iconfont{
     position:absolute;
     right:5px;
     bottom:4px;
     width:31px;
     line-height:30px;
     border-radius:15px;
     text-align:center;
     color:#969696;
     &.focused{
       background:rgb(150,150,150);
       color:#fff;
     }
   }
   .slides-enter{
     transition:width 0.2s ease-out;
   }
   .slides-enter-active{
     width:240px;
   }
   .slides-exit{
    transition:all 0.2s ease-out;
   }
   .slides-exit-active{
    width:160px;
   }
`;

export const NavSearch=styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  padding:0 30px 0 20px;
  margin-top:9px;
  margin-left:20px;
  box-sizing:border-box;
  border:none;
  outline:none;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  color:#666;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
`;

export const Addition=styled.div`
   position:absolute;
   right:0px;
   top:0px;
   height:56px;
`;

export const Button=styled.div`
   float:right;
   margin-top:9px;
   margin-right:20px;
   padding:0 20px;
   line-height:38px;
   border-radius:19px;
   border:1px solid #ec6149;
   color:#ec6149;
   font-size:14px;
   &.reg{
     background:#ec6149;
     color:#fff;
   }
`;