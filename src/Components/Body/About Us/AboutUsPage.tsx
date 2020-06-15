import React from "react";
import styled from "@emotion/styled";
import AboutUs from "../AboutUs";
import logo from '../../../assets/images/About Us/logoAboutUs.svg'



const AboutUsPage:React.FC = () =>
    <Root>
        <BlackLine>
            <AboutUs aboutUs={"aboutUs1"}/>
            <AboutUs aboutUs={"aboutUs2"}/>
            <AboutUs aboutUs={"aboutUs3"}/>
            <AboutUs aboutUs={"aboutUs4"}/>
        </BlackLine>
        <InformationPosition>
            <img src={logo} alt="Logo"/>
            <Information>
                <Title>
                    О нас
                </Title>

            </Information>
        </InformationPosition>
    </Root>

export default AboutUsPage;

const Root = styled.div`
display: flex;
justify-content: center;
`
const BlackLine = styled.div`
width: 60%;
height: 156px;
margin-bottom: 105px;
background: black;
display: flex;
justify-content: flex-end;
align-items: center;
padding: -45px;
&>*{
min-width: 70px;
min-height: 70px;
display: flex;
justify-content: space-between;
margin: 45px;
}
`
const InformationPosition = styled.div`
display: flex;
&> img{
margin-right: 61px;
}
`
const Information = styled.div`
`
const Title = styled.div`
font-family: Roboto Condensed,sans-serif;
font-style: normal;
font-weight: bold;
font-size: 44px;
line-height: 100%;
letter-spacing: 0.04em;
text-transform: uppercase;

color: #000000;
`
const SubTitle = styled.div`

`
