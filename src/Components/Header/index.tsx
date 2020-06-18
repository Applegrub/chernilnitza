/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import logo from '../../assets/images/logo.svg'
import inks from '../../assets/images/Inks.svg'
import Menu from "./Menu";
import Cart from "./Cart"
import Icon from "../SocialNetBar";
import faq from '../../assets/images/faq.svg'
import {jsx,css} from "@emotion/core";
import {HistoryStore} from "../../stores";
import {inject, observer} from "mobx-react";

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

const CartPosition = styled.div`
position: fixed;
left: 87%;
top: 425px;
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
                <BackOnMainPage href=''/>
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
                <CartPosition css = {css`@media (max-width: 1280px){display:none};`}>
                    <Cart goodsCount={1}/>
                </CartPosition>
                <Faq><img src={faq} alt="FAQ"/></Faq>
            </WhiteSide>
        </Root>;
    }
export default Head;

interface IProps {
    href: string
    historyStore?: HistoryStore
}

const BackOnMainPage:React.FunctionComponent<IProps> = inject('historyStore')(observer(
    (props) => {
        const handlePush = (href: string) => props.historyStore?.history.push(href)
        return <Wrapper onClick={() => handlePush(props.href)}>
            <img src={logo} alt='Logo' />
        </Wrapper>
    }))

const Wrapper = styled.div`
width: 259px;
height: 245.2px;
`
