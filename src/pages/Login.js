import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from "../components/Logo";
import Form from "../components/Form"

export default class Login extends Component {
    signup() {
        Actions.signup();
    }
    render() {
        return(
            <ImageBackground: source={require("../images/background-image.png")}>
            <View style={styles.container}>
                {/*<View style ={styles.backgroundImage}>*/}
                <Logo/>
                <Form type={"Login"}/>
                <View style={styles.signUpTextContainer}>
                    <Text style={styles.signUpText}>Don't have an account yet? </Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.signUpButton}>Sign Up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ImageBackground:>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#455a64",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    signUpTextContainer: {
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,
        flexDirection: "row",
    },
    signUpButton: {
        color:"#ffffff",
        fontSize: 16,
        fontWeight: "500",
    },
    signUpText: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 16,
    },
    //backgroundImage: {
     //ImageBackground: source{}
    //}
});