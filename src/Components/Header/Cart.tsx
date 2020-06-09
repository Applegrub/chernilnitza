import React from "react";
import styled from "@emotion/styled";
import cart from "../../assets/images/cart.svg"

interface IProps {
    goodsCount: number
}

const Wrapper = styled.div`
position: relative;
`

const GoodsCount = styled.div`
position: absolute;
left: 66px;
top: 63px;
font-family: Roboto Condensed, sans-serif;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 100%;

letter-spacing: 0.04em;

`

const Cart: React.FunctionComponent<IProps> = ({goodsCount}) =>
    <Wrapper>
        <img src={cart} alt="Cart"/>
        <GoodsCount>{goodsCount}</GoodsCount>
    </Wrapper>
export default Cart;