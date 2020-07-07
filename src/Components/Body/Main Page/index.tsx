/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import instTree from '../../../assets/images/instTree.svg'
import { css, jsx } from '@emotion/core'
import AboutUs from "../AboutUs";
import OneLineSeries, {GoodsSeriesNameDiv, Name} from "../OneLineSeries";
import Post from "../Post";
import ContactForm from "../ContactForm";
import Slideshow from "./Slider";

export default class Body extends React.Component {

   render(): React.ReactNode {

       return <Root>
           <Slideshow/>

           <GoodsSeriesNameDiv><Name>время летит</Name></GoodsSeriesNameDiv>
           <OneLineSeries first={"oldAge1"} second={"oldAgeWithPrise"} third={"oldAge2"}/>

           <GoodsSeriesNameDiv><Name>без любви никуда</Name></GoodsSeriesNameDiv>
           <OneLineSeries first={"withLove1"} second={"withLove2"} third={"withLove3"}/>
           <div css = {css`margin-top: -68px;`}><OneLineSeries first={"jesus1"} second={"youAreGood"} third={"jesus2"} /></div>

           <InstPosition>
               <img src={instTree} alt="Instagram Tree"/>
               <Instagram><InstName>INSTAGRAM @chenilnitsa.rf</InstName></Instagram>
           </InstPosition>

           <GoodsSeriesNameDiv><Name>о боже</Name></GoodsSeriesNameDiv>
           <OneLineSeries first={"jesus2"} second={"jesus1"} third={"jesus3"}/>

           <GoodsSeriesNameDiv><Name>ХОЧУ не КАК У ВСЕХ ._.</Name></GoodsSeriesNameDiv>
           <div css={css`display: flex; max-width: 1164px`}>
               <ContactForm/>
               <OneLineSeries second={"oldAge3"} third={"oldAgeExclusive"}/></div>

           <PostPosition>
               <Post post={"post1"}/>
               <Post post={"post2"}/>
               <Post post={"post3"}/>
           </PostPosition>

           <GoodsSeriesNameDiv><Name>ДРУЖе</Name></GoodsSeriesNameDiv>
           <OneLineSeries first={"withLove3"} second={"youAreGood"} third={"oldAge1"}/>

           <AboutUsPosition>
               <div>
                   О нас
               </div>
               <AboutUs aboutUs={"aboutUs1"}/>
               <AboutUs aboutUs={"aboutUs2"}/>
               <AboutUs aboutUs={"aboutUs3"}/>
               <AboutUs aboutUs={"aboutUs4"}/>
           </AboutUsPosition>

           <GoodsSeriesNameDiv><Name>ЕЩЕ НЕМНОГО</Name></GoodsSeriesNameDiv>
           <OneLineSeries first={"jesus2"} second={"jesus1"} third={"jesus3"}/>

       </Root>;
   }
}


const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.false{
width: 20px;
height: 20px;
border-radius: 20px;
border: 2px solid #000000;
box-sizing: border-box;
margin: 10px 10px 30px 10px;
@media screen and (max-width: 1280px){
display: none;
}
}
.active {
background: black;
}
`
const PostPosition = styled.div`
display: flex;
margin: 34px 0 80px;
padding: -10px;
& > * {
margin: 10px;
}
`

const InstPosition = styled.div`
margin-top: 70px;
display: flex;
align-items: center;
`
const Instagram = styled.div`
margin-bottom: 80px;
width: 687px;
height: 1041px;
background: #F9F9F9;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 1280px){
width: 548px;
height: 1041px;
}
`
const InstName = styled.div`
width: 548px;
height: 110px;
font-family: Roboto Condensed,sans-serif;
font-style: normal;
font-weight: bold;
font-size: 55px;
line-height: 100%;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #000000;
text-align: center;
@media screen and (max-width: 1280px){
font-size: 50px;
}
`
const AboutUsPosition = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin: 44px 0 80px;
padding-right: 70px;
width: 1074px;
height: 156px;
background: #000000;
@media screen and (max-width: 1280px){
width: 866px;
height: 156px;
}
& > img {
margin: 15px;}
& > div {
margin-right: 32px;
font-family: Roboto Condensed,sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 100%;
letter-spacing: 0.04em;
color: #FFFFFF;
}
`
