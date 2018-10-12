import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import SportSelection from "./pages/SportSelection";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import PlayerCard from "./pages/PlayerCard";
import PlayerStats from "./pages/PlayerStats";
import Menu from "./pages/Menu"

export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="signup" component={SignUp} title="SignUp"/>
                    <Scene key="home" component={HomePage} title="Home"/>
                    <Scene key="sportselection" component={SportSelection} title="SportSelection"/>
                    <Scene key="account" component={Account} title="Account"/>
                    <Scene key="settings" component={Settings} title="Settings"/>
                    <Scene key="profile" component={Profile} title="Profile"/>
                    <Scene key="playercard" component={PlayerCard} title="PlayerCard"/>
                    <Scene key="playerstats" component={PlayerStats} title="PlayerStats"/>
                    <Scene key="menu" component={Menu} title="Menu"/>
                </Stack>
            </Router>
        )
    }
}