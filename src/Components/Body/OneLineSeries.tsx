/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import Good, {TGood} from "./Cood";
import {css, jsx} from "@emotion/core";



interface IProps {
    first?: TGood,
    second:TGood,
    third: TGood,
}


const OneLineSeries: React.FunctionComponent<IProps> = ({first, second, third}) =>
    <Wrapper>
        <Item><Good good={first!}/></Item>
        <Item><Good good={second}/></Item>
        <Item css = {css`@media (max-width: 1280px){display:none};`}><Good good={third}/></Item>
    </Wrapper>

export default OneLineSeries
const Wrapper = styled.div`
display: flex;
margin: 34px -10px 34px -10px;
& > * {
margin: 10px;
};`
const Item = styled.div`

`

const GoodsSeriesNameDiv = styled.div`
width: 922px;
height: 93px;
background: #F9F9F9;
padding: 63px 0 0 222px;
@media screen and (max-width: 1280px){
width: 714px;
height: 93px;
}
`
const Name = styled.div`
font-family: Roboto Condensed,sans-serif;
font-weight: bold;
font-size: 20px;
line-height: 150%;

letter-spacing: 0.04em;
text-transform: uppercase;
color: #000000;
`
export {
    GoodsSeriesNameDiv,
    Name,
}