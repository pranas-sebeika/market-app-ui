import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import CoinForm from "../../pages/CoinForm/CoinForm";
import NotFound from "../../pages/Exception/NotFound";
import CoinPreview from "../../pages/CoinPreview/CoinPreview";
import Coins from "../../pages/AllCoins/Coins";
import Login from "../../pages/Login/Login";
import MyCoins from "../../pages/AllCoins/MyCoins";

export default () => (
    <main className="container">
        <Switch>
            <Route exact path="/coins">
                <Coins/>
            </Route>
            <Route path="/coins/:id">
                <CoinPreview/>
            </Route>
            <Route exact path="/coin/new">
                <CoinForm/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/my/coins">
                <MyCoins/>
            </Route>
            <Route exact expath="/">
                <Redirect to="/coins"/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </main>
)