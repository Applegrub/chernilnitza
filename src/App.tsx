import React from 'react';
import styled from "@emotion/styled";
import Head from "./Components/Head";

const Root = styled.div`
`

export default class App extends React.Component {

    render() {
        return <Root>
            <Head/>
        </Root>
    }

}
