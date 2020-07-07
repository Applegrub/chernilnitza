import {HistoryStore} from "./stores";
import React from "react";
import {inject, observer} from "mobx-react";
import logo from './assets/images/logo.svg';
import styled from "@emotion/styled";


interface IProps {
    href: string
    historyStore?: HistoryStore
}

const BackOnMainPage:React.FunctionComponent<IProps> = inject('historyStore')(observer(
    (props) => {
        const handlePush = (href: string) => props.historyStore?.history.push(href)
        return <Wrapper onClick={() => handlePush(props.href)}>
            <img src={logo} alt='Logo' />
        </Wrapper>
    }))

export default BackOnMainPage;

const Wrapper = styled.div`
width: 259px;
height: 245.2px;
`