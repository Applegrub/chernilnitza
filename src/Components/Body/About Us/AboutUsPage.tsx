/** @jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import AboutUs from "../AboutUs";
import OneLineSeries, {GoodsSeriesNameDiv, Name} from "../OneLineSeries";
import logo from '../../../assets/images/About Us/logoAboutUs.svg'
import chernilnitza from '../../../assets/images/About Us/chernilnitza.svg'
import {jsx,css} from "@emotion/core";


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
                <Text>МЫ КОМАНДА ЕДИНОМЫШЛЕННИКОВ,</Text>
                <Text>желающая вам добра и процветания*</Text>
                <Text css = {css`margin: 18px 0 0 263px`}>*ЧЕРНЫЙ ЭТО ТОЖЕ ЦВЕТ</Text>
                <Text css = {css`margin-top: 141px`}>C ЛЮБОВЬЮ, КОМАНДА</Text>
                <img src={chernilnitza} alt="ЧЕРНИЛЬНИЦА"/>
            </Information>
        </InformationPosition>
        <GoodsSeriesNameDiv css = {css`margin-top:377px`}>
            <Name>ЧИТАТЬ О НАС ХОРОШО, А ТЫ КУПИ СЛОНА</Name>
        </GoodsSeriesNameDiv>
        <OneLineSeries first={"jesus2"} second={"jesus1"} third={"jesus3"}/>
    </Root>

export default AboutUsPage;

const Root = styled.div`
display: grid;
justify-items: center;
flex-direction: column;

`
const BlackLine = styled.div`
width: 1121px;
height: 156px;
padding-right: 23px;
margin-bottom: 105px;
background: black;
display: flex;
justify-content: flex-end;
align-items: center;
&>*{
min-width: 70px;
min-height: 70px;
display: flex;
justify-content: space-between;
margin: 23px;
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
margin-bottom: 35px;
font-weight: bold;
font-size: 44px;
line-height: 100%;
letter-spacing: 0.04em;
text-transform: uppercase;
color: #000000;
`
const Text = styled.div`
font-family: Roboto Condensed, sans-serif;
font-weight: bold;
font-size: 16px;
line-height: 150%;
letter-spacing: 0.04em;
text-transform: uppercase;

color: #000000;
`
