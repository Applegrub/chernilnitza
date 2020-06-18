import React from "react";
import styled from "@emotion/styled";
import {HistoryStore} from "../../stores";
import {inject, observer} from "mobx-react";


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
margin: -15px;
    & > * {
    margin: 15px;
    }
`
const ItemRoot = styled.div`
font-family: Roboto Condensed, sans-serif;;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 100%;
letter-spacing: 0.04em;
text-transform: uppercase;

color: #000000;
`
const Menu: React.FunctionComponent = () => {
    const items: string[] = ['Открытки', 'О нас', 'Контакты', 'Доставка']

    return <Wrapper>
        {items.map((item, index) => <Item key={index} href={item} text={item} />)}
    </Wrapper>
}
export default Menu



interface IItemProps {
    href: string
    text: string
    historyStore?: HistoryStore
}

const Item: React.FunctionComponent<IItemProps> = inject('historyStore')(observer(
    (props) => {
        const handlePush = (href: string) => props.historyStore?.history.push(href)
        return <ItemRoot onClick={() => handlePush(props.href)}>
            {props.text}
        </ItemRoot>
    }))

