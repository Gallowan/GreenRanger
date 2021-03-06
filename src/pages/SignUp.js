import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, TouchableOpacity, ImageBackground, TextInput, Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';
import * as firebase from 'firebase';

import Logo from "../components/Logo";

export default class SignUp extends Component {

    // goBack(){
    //     Actions.pop();
    // }
    static navigationOptions = {
        header:null
    }
    //
    // constructor(props){
    //     super(props);
    //     // this.state = "";
    //     // this.password = "";
    //     this.state = {
    //         email: '',
    //         password: '',
    //     };
    // }

    state = {
        email: "",
        password:""
    };
    handleEmail = (text) => {
        this.setState({ email: text })
    };
    handlePassword = (text) => {
        this.setState({ password: text })
    };

    async signUp(email, pass) {
        try {
            await firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password);

            Alert.alert("Account created!");
            console.log("Account created");

            // Navigate to the Home page, the user is auto logged in

        } catch (error) {
            console.log(error.toString())
        }
    }

    render() {
        return(
            <ImageBackground style={styles.container}
                             source={require("../images/background-image.png")}
                             blurRadius={5}>
                <View style={styles.container}>
                    <Logo/>
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid={"rgba(0,0,0,0)"}
                               placeholder={"What is your first name?"}
                               placeholderTextColor={"#ffffff"}
                               selectionColor={"#ffffff"}
                               keyboardType={"email-address"}
                    />
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid={"rgba(0,0,0,0)"}
                               placeholder={"Last name?"}
                               placeholderTextColor={"#ffffff"}
                               selectionColor={"#ffffff"}
                               keyboardType={"email-address"}
                    />
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid={"rgba(0,0,0,0)"}
                               placeholder={"Email?"}
                               placeholderTextColor={"#ffffff"}
                               selectionColor={"#ffffff"}
                               keyboardType={"email-address"}
                               // ref={(input) => email = input}
                               onChangeText = {this.handleEmail}
                               onSubmitEditing={() => password.focus()}
                    />
                    {/* This code is the password box on the login page */}
                    <TextInput style={styles.inputBox}
                               underlineColorAndroid={"rgba(0,0,0,0)"}
                               placeholder={"Choose a password."}
                               secureTextEntry={true}
                               placeholderTextColor={"#ffffff"}
                               ref={(input) => password = input}
                               onChangeText = {this.handlePassword}
                    />
                    <TouchableOpacity style={styles.button} onPress={() => {this.signUp(this.state.email, this.state.password);
                        this.props.navigation.goBack()}}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.loginTextContainer}>
                        <Text style={styles.loginText}>Already have an account? </Text>
                        {/*<TouchableOpacity onPress={() => this.props.navigation.goBack()}>*/}
                            <TouchableOpacity onPress={() => Alert.alert(this.state.email + " " + this.state.password)
                            }>

                            <Text style={styles.loginButton}>Login!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

        )
    }
}

const styles = StyleSheet.create({
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
    loginTextContainer: {
        flexGrow: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginVertical: 16,
        flexDirection: "row",
    },
    loginButton: {
        color:"#ffffff",
        fontSize: 16,
        fontWeight: "500",
    },
    loginText: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 16,

    },
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
    }
});