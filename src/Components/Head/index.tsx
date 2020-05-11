import React from "react";
import styled from "@emotion/styled";
import logo from '../../assets/images/logo.svg'
import Menu from "./Menu";
import SocialNetBar from "./SocialNetworkBar";
const Root = styled.div`

`


const DarkSide = styled.div`
height: 324px;
width: 1920px;
background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
`

const WhiteSide = styled.div`
height: 267px;
width: 1920px;
`


export default class Head extends React.Component{

    render(){
        return <Root>
            <DarkSide>
                <img src= {logo} alt = ''/>
            </DarkSide>
            <WhiteSide>
                <Menu/>
                <SocialNetBar/>
            </WhiteSide>
        </Root>;
    }

}
