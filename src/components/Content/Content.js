import React from "react";
import {Switch, Route} from "react-router-dom";
import NotFound from "../../pages/Exception/NotFound";
import Items from "../../pages/AllCoins/Coins";
import Item from "../../pages/CoinPreview/CoinPreview";

export default () => (
    <main className="container">
        <Switch>
            <Route exact path="/">
                <Items/>
            </Route>
            <Route path="/coins/:id">
                <Item/>
            </Route>
        </Switch>
    </main>
)