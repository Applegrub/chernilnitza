import React from "react";
import styled from "@emotion/styled";
import ink from '../../assets/images/inkFooter.svg'
import logo from '../../assets/images/logoFooter.svg'
import Menu from "./Menu";
import Icon from "../SocialNetBar";

const Root = styled.div`
width: 100%;
display: flex;
height: 400px;
background: url(${ink}) no-repeat left;
padding-top: 659px;
`
const Logo = styled.div`
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
 & > *{
 margin: 10px;
 }
`
const Footer: React.FunctionComponent = () =>{
    return <Root>
        <Logo><img src={logo} alt="Logo"/></Logo>
        <MenuAndSocNetBar>
            <Menu/>
            <SocNetBar>
                <Icon icon={"facebook"} />
                <Icon icon={"twitter"} />
                <Icon icon={"printerest"} />
                <Icon icon={"instagram"} />
            </SocNetBar>
        </MenuAndSocNetBar>
    </Root>
}

export default Footer;