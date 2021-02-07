import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const UserContext = React.createContext(null)

function App() {
    const [user, setUser] = useState(null)

    const userStore = {
        user,
        addUser: (user) => setUser(user),
        removeUser: () => setUser(null),
    }

    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data) {
            setUser((JSON.parse(data)))
        }

    }, [])

    return (
        <UserContext.Provider value={userStore}>
            <BrowserRouter>
                <Header/>
                <Content/>
                <Footer/>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export {UserContext}
export default App;
