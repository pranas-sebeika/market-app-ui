import React from "react";
import {BrowserRouter} from "react-router-dom";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Content/>
        </BrowserRouter>
    );
}

export default App;
