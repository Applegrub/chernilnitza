/**@jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import { css, jsx } from '@emotion/core'
import ink from '../../assets/images/inkFooter.svg'
import logo from '../../assets/images/logoFooter.svg'
import Menu from "./Menu";
import Icon from "../SocialNetBar";
import { useWindowDimensions } from '../../utils/dimensions'
import {inject, observer} from "mobx-react";
import {HistoryStore} from "../../stores";

const Root= styled.div`
width: 100%;
display: flex;
height: 400px;
background: url(${ink}) no-repeat left;
padding-top: 659px;
z-index: -1;
`
const Wrapper = styled.div`
margin-left: 23%;
max-width: 270.9px;
height: auto;
`
const MenuAndSocNetBar = styled.div`
margin-left: 29%;
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
    return <Root css={css`background-position: ${-1600 + width}px;`}>
        <BackOnMainPage href=''/>
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