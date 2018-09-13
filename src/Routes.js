import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import SportSelection from "./pages/SportSelection";

export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={SignUp} title="SignUp"/>
                    <Scene key="home" component={HomePage} title="Home"/>
                    <Scene key="sportselection" component={SportSelection} title="SportSelection"/>
                </Stack>
            </Router>
        )
    }
}