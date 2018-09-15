import React from 'react';
import {Button, View, Text} from 'react-native';
//import {createStackNavigator} from 'react-navigation';
import {Component} from "react";
import {Actions} from 'react-native-router-flux';

export default class SportSelection extends Component {
    goHome() {
        Actions.home();
    }


    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="lolbasketball"
                    onPress={() => this.goHome}
                />
            </View>
        );
    }
}