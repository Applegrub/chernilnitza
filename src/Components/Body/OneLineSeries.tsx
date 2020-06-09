/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import Good, {TGood} from "./Cood";
import {css, jsx} from "@emotion/core";



interface IProps {
    first: TGood,
    second:TGood,
    third: TGood,
}

const Wrapper = styled.div`
display: flex;
margin-top: 34px;
margin-bottom: 34px;
& > * {
margin: 10px;
};
`
const Item = styled.div`

`
const OneLineSeries: React.FunctionComponent<IProps> = ({first, second, third}) =>
    <Wrapper>
        <Item><Good good={first}/></Item>
        <Item><Good good={second}/></Item>
        <Item css = {css`@media (max-width: 1280px){display:none};`}><Good good={third}/></Item>
    </Wrapper>

export default OneLineSeries