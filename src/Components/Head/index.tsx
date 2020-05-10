import React from "react";
import styled from "@emotion/styled";
import logo from '../../assets/images/logo.svg'
import Menu from "./MenuHead";
const Root = styled.div`

`


const DarkSide = styled.div`
height: 324px;
width: 100%;
background-color: black;
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
`

const WhiteSide = styled.div`

`


export default class Head extends React.Component{

    render(){
        return <Root>
            <DarkSide>
                <img src= {logo} />
            </DarkSide>
            <WhiteSide>
                <Menu/>
            </WhiteSide>
        </Root>;
    }

}
