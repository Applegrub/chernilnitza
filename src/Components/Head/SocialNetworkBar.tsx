import React from "react";
import styled from "@emotion/styled";
import social from '../../assets/images/social.svg'

const SocialBar = styled.div`
width: 123px;
height: 23.3px;
padding-top: 55px;
padding-left: 398px;
`

export default class SocialNetBar extends React.Component {

    render() {
        return <SocialBar>
            <img src = {social} alt=''/>
        </SocialBar>
    }
}