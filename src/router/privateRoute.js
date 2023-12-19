import React from "react";
import { Navigate } from "react-router-dom";
import { AllRoutes } from "./router";

const PrivateRoute = (props) => {

    const isLoggedIn = () => {
        if (localStorage.getItem("auth_token")) {
            return true;
        } else {
            return false;
        }
    };


    if (isLoggedIn()) {
        return props.children
    } else {
        return <Navigate
            to={AllRoutes.login}
            state={{ from: props.path }}
        />
    }

}

export default PrivateRoute;