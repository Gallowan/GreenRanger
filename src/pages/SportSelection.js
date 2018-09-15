import React from 'react';
import {Button, View, Text} from 'react-native';
//import {createStackNavigator} from 'react-navigation';
import {Component} from "react";

export default class SportSelection extends Component {
    render(){
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="lolbasketbal"
                    onPress={() => this.props.navigation.navigate('HomePage')}
                />
            </View>
        );
    }
}