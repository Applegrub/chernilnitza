/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import logo from '../../assets/images/logo.svg'
import inks from '../../assets/images/Inks.svg'
import Menu from "./Menu";
import Icon from "../SocialNetBar";
import cart from '../../assets/images/cart.svg'
import faq from '../../assets/images/faq.svg'
import {jsx,css} from "@emotion/core";

const Root = styled.div`
position: relative;
width: 100%;
`

const DarkSide = styled.div`
height: 324px;
background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
`

const WhiteSide = styled.div`
height: 267px;
margin-left: 20%;
@media (max-width: 1280px) {
margin-left: 6%;
}
@media (max-width: 1024px) {
margin-left: 5%;
}
`

const Inks = styled.div`
position: absolute;
left: 47.29%;
top: 47%;

@media screen and (max-width: 1024px) {
left: 34.48%;
}
`
const MenuPosition = styled.div`
margin-top: 52px;
width: 500px;
`
const SocialNetBarPosition= styled.div`
margin-top: 52px;
display: flex;
width: 210px;

 & > * {
 margin-right: 12px;
 }
`

const Cart = styled.div`
position: fixed;
left: 87%;
top: 425px;
@media screen and (max-width: 1280px) {
display: none;
}
`
const GoodsCount = styled.div`
position: fixed;
left: 90.4%;
top: 488px;
font-family: Roboto Condensed, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 100%;

letter-spacing: 0.04em;

`
const Faq = styled.div`
position: fixed;
top: 923px;
left: 87%;
@media screen and (max-width: 1280px) {
display: none;
}
`

const Head:React.FunctionComponent = () =>{

        return <Root>
            <DarkSide>
                <img src={logo} alt='Logo'/>
            </DarkSide>
            <WhiteSide>
                <MenuPosition><Menu/></MenuPosition>
                <SocialNetBarPosition>
                    <Icon icon={"instagram"}/>
                    <Icon icon={"facebook"}/>
                    <Icon icon={"twitter"}/>
                    <Icon icon={"printerest"}/>
                    <Icon icon={"vk"}/>
                    <Icon icon={"telegram"}/>
                </SocialNetBarPosition>
                <Inks><img src={inks} alt="" css = {css`width: 100%; height: auto;`}/></Inks>
                <Cart>
                    <img src={cart} alt="Cart"/>
                    <GoodsCount>1</GoodsCount>
                </Cart>
                <Faq><img src={faq} alt="FAQ"/></Faq>
            </WhiteSide>
        </Root>;
    }
export default Head;
