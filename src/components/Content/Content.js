import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Items from "../../pages/AllCoins/Coins";
import Item from "../../pages/CoinPreview/CoinPreview";
import CoinForm from "../../pages/CoinForm/CoinForm";
import NotFound from "../../pages/Exception/NotFound";

export default () => (
    <main className="container">
        <Switch>
            <Route exact path="/coins">
                <Items/>
            </Route>
            <Route path="/coins/:id">
                <Item/>
            </Route>
            <Route path="/coin/new">
                <CoinForm/>
            </Route>
            <Route path="/">
                <Redirect to="/coins"/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </main>
)