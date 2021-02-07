import React, {useContext} from "react";
import {Route, Redirect, useLocation} from "react-router-dom";
import _ from "lodash"
import {UserContext} from "../App";

const PrivateRout = ({ children, roles, ...props }) => {
    const userContext = useContext(UserContext)
    const location = useLocation()
    const authorised = !!roles ? _.intersection(userContext.user?.roles, roles) : !!userContext.user
    return (
        <Route {...props}>
            {
                !!authorised ? children : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: {
                                from: location
                            }
                        }}
                    />
                )
            }
        </Route>
    )
}

export default PrivateRout

