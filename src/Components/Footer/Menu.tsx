import React from "react";
import styled from "@emotion/styled";


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin: -15px;
    & > * {
    margin: 15px;
    }
`
const Item = styled.div`
font-family: Roboto Condensed, sans-serif;;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 100%;
letter-spacing: 0.04em;
text-transform: uppercase;

color: #000000;
`

const Menu:React.FunctionComponent = () => {
    return<Wrapper>
        <Item>Открытки</Item>
        <Item>О нас</Item>
        <Item>Контакты</Item>
        <Item>Доставка</Item>
        <Item>ПОЛИТИКА КОНФИДенЦИАЛЬНОСТИ</Item>
    </Wrapper>
}
export default Menu