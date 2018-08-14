import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={SignUp} title="SignUp"/>
                </Stack>
            </Router>
        )
    }
}