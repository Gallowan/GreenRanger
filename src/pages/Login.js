import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from "../components/Logo";


export default class Login extends Component {
    signup() {
        Actions.signup();
    }
    goHome() {
        Actions.home();
    }
    render() {
        return(
            <ImageBackground style={styles.container}
                             source={require("../images/background-image.png")}
                             blurRadius={5}>
                <View style={styles.container}>
                    {/*<View style ={styles.backgroundImage}>*/}
                    <Logo/>
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid={"rgba(0,0,0,0)"}
                               placeholder={"Email"}
                               placeholderTextColor={"#ffffff"}
                               selectionColor={"#ffffff"}
                               keyboardType={"email-address"}
                               onSubmitEditing={() => this.password.focus()}
                    />
                    {/* This code is the password box on the login page */}
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid={"rgba(0,0,0,0)"}
                               placeholder={"Password"}
                               secureTextEntry={true}
                               placeholderTextColor={"#ffffff"}
                               ref={(input) => this.password = input}
                    />
                    {/* This code is the login button on the login page */}
                    <TouchableOpacity style={styles.button} onPress={this.goHome}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpTextContainer}>
                        <Text style={styles.signUpText}>Don't have an account yet? </Text>
                        <TouchableOpacity onPress={this.signup}>
                            <Text style={styles.signUpButton}>Sign Up!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        width:300,
        backgroundColor:"#FF3B3B",
        borderRadius: 25,
        paddingVertical: 12,
        //fontSize: 16,
        //color: "#ffffff",
        marginVertical: 10,
        //alignItems: "flex-start",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center"
    },
    container: {
        //Ismail this is where you change the background color
        //backgroundColor: "#455a64",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    inputBox: {
        width:300,
        backgroundColor:"rgba(255,255,255,0.2)",
        borderRadius: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 10,
    },
    signUpText: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 16,
    },
    signUpTextContainer: {
        flexGrow: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginVertical: 16,
        flexDirection: "row",
    },
    signUpButton: {
        color:"#ffffff",
        fontSize: 16,
        fontWeight: "500",
    }
});