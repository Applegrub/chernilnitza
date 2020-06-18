/** @jsx jsx*/
import React from "react";
import styled from "@emotion/styled";
import good1 from '../../../assets/images/GoodsCarts/Good1.png'
import {jsx,css} from "@emotion/core";
import PointSlider from "../PointSlider";
import OneLineSeries, {GoodsSeriesNameDiv, Name} from "../OneLineSeries";

const GoodsCart: React.FC = () =>
    <Root>
        <Wrapper>
            <GoodWrapper>
                <img src={good1} alt="Карта товара"/>
                <PointSlider/>
            </GoodWrapper>
            <Information>
                <Title>Открытка</Title>
                <Title>"Ты старый".</Title>
                <Title css = {css`margin-top: 8px`}>250 руб</Title>
                <BuyBox><Buy>Купить</Buy></BuyBox>
                <Title css = {css`margin:62px 0 4px`}>ОПИСАНИЕ:</Title>
                <Text>Честная открытка. Хорошо подойдёт для лицам от 18 до 40 лет.
                    <br/>
                    <br/>
                    Размер: 10*5 см
                    <br/>
                    <br/>
                    Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст Текст
                </Text>
            </Information>
        </Wrapper>
        <GoodsSeriesNameDiv css={css`margin-top: 254px`}><Name>У НАС ЕСТЬ ЕЩё</Name></GoodsSeriesNameDiv>
        <OneLineSeries first={"oldAge1"} second={"oldAge3"} third={"oldAge2"}/>

    </Root>

export default GoodsCart;

const Root = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
`
const GoodWrapper = styled.div`
display: grid;
justify-items: center;
`
const Information = styled.div`
margin-left: 62px;
`
const Title = styled.div`
font-family: Roboto Condensed,sans-serif;
font-weight: bold;
font-size: 24px;
line-height: 150%;

letter-spacing: 0.04em;
text-transform: uppercase;

color: #000000;
`
const Text = styled.div`
max-width: 326px;
max-height: 168px;
font-family: Roboto Condensed,sans-serif;
font-weight: bold;
font-size: 14px;
line-height: 150%;
letter-spacing: 0.04em;
text-transform: uppercase;

color: #000000;
`
const BuyBox = styled.button`
margin-top: 54px;
width: 259px;
height: 88px;
background: #000000;
display: flex;
justify-content: center;
align-items: center;
`
const Buy = styled.div`
font-family: Roboto Condensed,sans-serif;
font-weight: bold;
font-size: 20px;
line-height: 150%;
letter-spacing: 0.04em;
text-transform: uppercase;

color: #FFFFFF;
`
