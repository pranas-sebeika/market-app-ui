import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import CoinForm from "../../pages/CoinForm/CoinForm";
import NotFound from "../../pages/Exception/NotFound";
import CoinPreview from "../../pages/CoinPreview/CoinPreview";
import Coins from "../../pages/AllCoins/Coins";
import Login from "../../pages/Login/Login";
import MyCoins from "../../pages/AllCoins/MyCoins";
import ServerError from "../../pages/Exception/ServerError";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const Content = () => (
    <main className="container">
        <Switch>
            <Route exact path="/coins">
                <Coins/>
            </Route>
            <Route path="/coins/:id">
                <CoinPreview/>
            </Route>
            <PrivateRoute exact path="/coin/new">
                <CoinForm/>
            </PrivateRoute>
            <Route path="/login">
                <Login/>
            </Route>
            <PrivateRoute path="/my/coins">
                <MyCoins/>
            </PrivateRoute>
            <Route path="/404">
                <NotFound/>
            </Route>
            <Route path="/500">
                <ServerError/>
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

export default Content