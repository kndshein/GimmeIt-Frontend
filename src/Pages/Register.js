import React from "react";
import axios from "axios";
import { Route, Switch, Link } from "react-router-dom";

import RegisterForm from "../Components/RegisterForm.js"

const Register = (props) => {
    return (
        <div>
            <RegisterForm/>
        </div>
    )
}

export default Register;