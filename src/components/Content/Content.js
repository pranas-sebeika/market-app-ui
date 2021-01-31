import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import Items from "../../pages/AllCoins/Coins";
import Item from "../../pages/CoinPreview/CoinPreview";
import CoinForm from "../../pages/CoinForm/CoinForm";
import NotFound from "../../pages/Exception/NotFound";
import CoinPreview from "../../pages/CoinPreview/CoinPreview";
import Coins from "../../pages/AllCoins/Coins";

export default () => (
    <main className="container">
        <Switch>
            <Route exact path="/coins">
                <Coins/>
            </Route>
            <Route path="/coins/:id">
                <CoinPreview/>
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