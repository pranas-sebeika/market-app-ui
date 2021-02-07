import React, {useState} from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const UserContext = React.createContext(null)

function App() {
    const [user, setUser] = useState(null)

    const userStore = {
        user,
        addUser: (user) => setUser(user),
        removeUser: () => setUser(null),
    }

    return (
        <UserContext.Provider value={userStore}>
            <BrowserRouter>
                <Header/>
                <Content/>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export { UserContext }
export default App;
