import React from 'react';
import styled from "@emotion/styled";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const Root = styled.div`

`

export default class App extends React.Component {

    render() {
        return <Root>
            <Header/>
            <Body/>
            <Footer/>
        </Root>
    }

}
/*const App: React.FunctionComponent = () =>
    <Root>
        <Header/>
        <Main/>
        <Footer/>
    </Root>*/