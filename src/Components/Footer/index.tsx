/**@jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from '@emotion/core'
import inks from '../../assets/images/inkFooter.svg'
import logo from '../../assets/images/logoFooter.svg'
import Menu from "./Menu";
import Icon from "../SocialNetBar";
import { useWindowDimensions } from '../../utils/dimensions'
import {inject, observer} from "mobx-react";
import {HistoryStore} from "../../stores";

const Root= styled.div`
max-width: 1920px;
position: relative;
display: flex;
height: 330px;
padding-top: 640px;
`
const Inks = styled.div`
position: absolute;
top: 34px;
z-index: -1;
`
const Wrapper = styled.div`
margin-left: 23%;
max-width: 270.9px;
height: 311px;
@media screen and (max-width: 1280px) {
margin-left: 10%;
}
`
const MenuAndSocNetBar = styled.div`
margin-top: 22px;
min-width: 322px;
max-height: 311px;
margin-left: 28%;
@media screen and (max-width: 1280px) {
margin-left: 34%;
@media screen and (max-width: 1080px) {
margin-left: 30%;
}
}

`
const SocNetBar = styled.div`
display: flex;
justify-content: flex-end;
margin: 20px -10px -10px -10px;
z-index: 100;
 & > *{
 margin: 10px;
 }
`
const Footer: React.FunctionComponent = () => {
    const { width } = useWindowDimensions();
    return <Root>
        <Inks css = {css` left: ${0.6 *(-1920+width)}px; 
        @media (max-width: 1280px){left: ${0.65*(-2000+width)}px;}`}>
            <img src={inks} alt="Inks"/></Inks>
        <BackOnMainPage href='chernilnitza'/>
        <MenuAndSocNetBar>
            <Menu />
            <SocNetBar >
                <Icon icon={"facebook"} />
                <Icon icon={"twitter"} />
                <Icon icon={"printerest"} />
                <Icon icon={"instagram"} />
            </SocNetBar>
        </MenuAndSocNetBar>
    </Root>
}
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
export default Footer;