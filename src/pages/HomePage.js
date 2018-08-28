import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from "../components/Logo";

export default class HomePage extends Component {
    signup() {
        Actions.signup();
    }
    render() {
        return(
            <View style={styles.container}>
                <Text>Welcome Home Heaux. We don't need you.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //Ismail this is where you change the background color
        // FUDGE OFF - Ismail
        backgroundColor: "#455a64",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});