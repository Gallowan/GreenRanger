import React from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, StyleSheet, Image, Platform} from 'react-native';
import {Icon} from "react-native-elements";
import {Actions} from "react-native-router-flux";

export default class Account extends React.Component {

    // goProfile() {
    //     Actions.profile();
    // }
    // goSettings() {
    //     Actions.settings();
    // }

    static navigationOptions = {
        header:null
    }

    render() {
        return(

            <View style={styles.container}>
                <Text style={styles.userNameText}>{'Isaac Taylor-Stuart'}</Text>
                <View style={styles.userAddressRow}>
                    <View style={styles.userAddressRow}>
                        <View style={styles.userCityRow}>
                            <Text style={styles.userCityText}>
                                {'University of Southern California'}
                            </Text>
                        </View>
                    </View>
                </View>
                <Image
                    style={styles.userImage}
                    source={require('../images/test_isaac.png')
                    }
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>View Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Settings')}>
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Settings')}>
                    <Text style={styles.buttonText}>Help</Text>
                </TouchableOpacity>
                <Icon
                    position="absolute"
                    bottom={50}
                    name="brightness-2"
                    underlayColor="transparent"
                    iconStyle={styles.placeIcon}
                />
            </View>
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
    headerColumn: {
        backgroundColor: 'transparent',
        ...Platform.select({
            ios: {
                alignItems: 'center',
                elevation: 1,
                marginTop: -1,
            },
            android: {
                alignItems: 'center',
            },
        }),
    },
    userImage: {
        borderColor: '#FF3b3b',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 20,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
        textShadowColor:'#000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 14
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom:5,
        textShadowColor:'#000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    },
});