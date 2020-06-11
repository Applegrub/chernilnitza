import React from 'react';
import styled from "@emotion/styled";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Router, Switch, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { HistoryStore } from '../stores'


const Root = styled.div`

`
interface IProps {
    historyStore?: HistoryStore
}

@inject('historyStore')
@observer
export default class App extends React.Component<IProps> {

    render() {
        return <Router history={this.props.historyStore!.history}>
            <Root>
                <Header />
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route component={Body} />
                </Switch>
                <Footer />
            </Root>
        </Router>
    }

}
/*const App: React.FunctionComponent = () =>
    <Root>
        <Header/>
        <Main/>
        <Footer/>
    </Root>*/