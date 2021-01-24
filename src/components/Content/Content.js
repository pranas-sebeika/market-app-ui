import React from "react";
import {Switch, Route} from "react-router-dom";
import NotFound from "../../pages/Exception/NotFound";
import Items from "../../pages/Items/Items";

export default () => (
    <main className="container">
        <Switch>
            <Route exact path="/">
                <Items/>
            </Route>
            <Route path="*">
                <NotFound/>
            </Route>
        </Switch>
    </main>
)