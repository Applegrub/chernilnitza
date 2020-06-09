/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import Banner from "./Banner";
import Good from "./Cood";
import instTree from '../../assets/images/instTree.svg'
import Post from "./Post";
import { css, jsx } from '@emotion/core'
import AboutUs from "./AboutUs";

const Root = styled.div`
display: grid;
justify-items: center;

`
const PointSlider = styled.div`
margin: 20px -10px;
display: flex;
& > * {
margin: 10px;
}
`
const Circle = styled.div`
width: 20px;
height: 20px;
border-radius: 20px;
border: 2px solid #000000;
box-sizing: border-box;`

const GoodsSeriesNameDiv = styled.div`
width: 922px;
height: 93px;
background: #F9F9F9;
padding: 63px 0 0 222px;
`
const Name = styled.div`
font-family: Roboto Condensed,sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 150%;

letter-spacing: 0.04em;
text-transform: uppercase;
color: #000000;
`
const OneLineSeries = styled.div`
grid-template-areas: 'g g g';
grid-template-columns: auto auto auto;
margin-top: 34px;
margin-bottom: 34px;
& > * {
margin: 10px;
};`
const LoveSeries = styled.div`
display: grid;
grid-template-areas: 'g g g'
'g g g';
grid-template-columns: auto auto auto;
grid-template-rows: auto auto;
margin-top: 34px;
& > * {
margin: 10px;}`

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
`
const InstName = styled.div`
width: 486px;
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

export default class Body extends React.Component {
    state = {
        isSelected: true,
    }

    toggleSlider = () => {
        this.setState({isSelected: !this.state.isSelected})
    }

   render(): React.ReactNode {
        let isSelected = this.state.isSelected;
       return <Root>
           <Banner banner={"banner1"} css = {css`width: auto; height: auto`}/>
           <PointSlider>
               <Circle css = {css `background: ${isSelected? "#000000" :"none" }`}/>
               <Circle/>
               <Circle/>
           </PointSlider>
           <GoodsSeriesNameDiv><Name>время летит</Name></GoodsSeriesNameDiv>
           <OneLineSeries>
               <Good good={"oldAge1"}/>
               <Good good={"oldAgeWithPrise"}/>
               <Good good={"oldAge2"}/>
           </OneLineSeries>
           <GoodsSeriesNameDiv><Name>без любви никуда</Name></GoodsSeriesNameDiv>
           <LoveSeries>
               <Good good={"withLove1"}/>
               <Good good={"withLove2"}/>
               <Good good={"withLove3"}/>
               <Good good={"jesus1"}/>
               <Good good={"youAreGood"}/>
               <Good good={"jesus2"}/>
           </LoveSeries>
           <InstPosition>
               <img src={instTree} alt="Instagram Tree"/>
               <Instagram><InstName>INSTAGRAM @chenilnitsa.rf</InstName></Instagram>
           </InstPosition>
           <GoodsSeriesNameDiv><Name>о боже</Name></GoodsSeriesNameDiv>
           <OneLineSeries>
               <Good good={"jesus2"}/>
               <Good good={"jesus1"}/>
               <Good good={"jesus3"}/>
           </OneLineSeries>
           <GoodsSeriesNameDiv><Name>ХОЧУ не КАК У ВСЕХ ._.</Name></GoodsSeriesNameDiv>
           <OneLineSeries>
               <Good good={"contactUs"}/>
               <Good good={"oldAge3"}/>
               <Good good={"oldAgeExclusive"}/>
           </OneLineSeries>
           <OneLineSeries css = {css`margin: 106px 0`}>
               <Post post={"post1"}/>
               <Post post={"post2"}/>
               <Post post={"post3"}/>
           </OneLineSeries>
           <GoodsSeriesNameDiv><Name>ДРУЖе</Name></GoodsSeriesNameDiv>
           <OneLineSeries>
               <Good good={"withLove3"}/>
               <Good good={"youAreGood"}/>
               <Good good={"oldAge1"}/>
           </OneLineSeries>
           <AboutUsPosition>
               <div>
                   О НАС
               </div>
               <AboutUs aboutUs={"aboutUs1"}/>
               <AboutUs aboutUs={"aboutUs2"}/>
               <AboutUs aboutUs={"aboutUs3"}/>
               <AboutUs aboutUs={"aboutUs4"}/>
           </AboutUsPosition>
           <GoodsSeriesNameDiv><Name>ЕЩЕ НЕМНОГО</Name></GoodsSeriesNameDiv>
           <OneLineSeries>
               <Good good={"jesus2"}/>
               <Good good={"jesus1"}/>
               <Good good={"jesus3"}/>
           </OneLineSeries>
       </Root>;
   }
}
