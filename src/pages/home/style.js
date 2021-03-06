import styled from 'styled-components';

export const HomeWrapper=styled.div`
   width:960px;
   margin:0 auto;
   overflow:hidden;
`;

export const HomeLeft=styled.div`
   float:left;
   margin-left:15px;
   padding-top:30px;
   width:625px;
   .banner-img{
       width:100%;
       height:270px;
   }
`;

export const HomeRight=styled.div`
   float:right;
   width:280px;
   padding-top:30px;
`;

export const TopicWrapper=styled.div`
   padding:20px 0 10px 0;
   overflow:hidden;
   margin-left:-18px;
   border-bottom:1px solid #dcdcdc;
`;

export const TopicItem=styled.div`
   float:left;
   background:#f7f7f7;
   line-height:32px;
   height:32px;
   font-size:14px;
   color:#000;
   border:1px solid #dcdcdc;
   border-radius:4px;
   padding-right:10px;
   margin-left:18px;
   margin-bottom:18px;
   .topic-item{
      display:block;
      float:left;
      width:32px;
      height:32px;
      margin-right:5px;
   }
`;

export const ListItem=styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden
    .pic{
       display:block;
       float:right;
       width:125px;
       height:100px;
       border-radius:10px;
    }
`;

export const ListInfo=styled.div`
    width:500px;
    box-sizing:border-box;
    padding-right:10px
    float:left;
    .title{
       line-height:27px;
       font-size:18px;
       font-weight:bold;
       color:#333;
       margin-bottom:10px;
    }
    .desc{
       line-height:18px;
       font-size:13px;
       color:#999;
    }
`;

export const RecommendWrapper=styled.div`
    width:380px;
`;

export const RecommendItem=styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
`;

export const LoadMore=styled.div`
    width:100%;
    height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    line-height:40px;
    color:#fff;
    margin:30px 0px;
    cursor:pointer;
`;

export const BackTop=styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    font-size:14px;
    border:1px solid #ccc;
    cursor:pointer
`;



