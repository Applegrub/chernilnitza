import React from "react";
import styled from "@emotion/styled";
import baner1 from '../../assets/images/Baner1.svg'

const Body = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

export default class Bodypart extends React.Component {

    render() {
        return <Body>
            <img src={baner1} alt=''/>
        </Body>;
    }
}