import React from 'react';
import styled from "@emotion/styled";
import Header from "./Header";
import Body from "./Body/Main Page";
import Footer from "./Footer";
import { Router, Switch, Route } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { HistoryStore } from '../stores'
import AboutUsPage from "./Body/About Us/AboutUsPage";
import GoodsCart from "./Body/GoodsCart/GoodsCart";
import Shipment from "./Body/Shipment/Shipment";
import Contacts from "./Body/Contacts/Contacts";


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
                    <Route exact path="/chernilnitza" component={Body} />
                    <Route exact path='/О нас' component={AboutUsPage}/>
                    <Route exact path='/Открытки' component={GoodsCart}/>
                    <Route exact path='/Доставка' component={Shipment}/>
                    <Route exact path='/Контакты' component={Contacts}/>
                    <Route component={Body} />
                </Switch>
                <Footer />
            </Root>
        </Router>
    }

}
