import React, {Component} from 'react';
import {
    StyleSheet, Text, View, StatusBar, ListView, Image, Platform, NativeModules, ScrollView, RefreshControl,
    TouchableOpacity, ImageBackground, SafeAreaView, WebView
} from 'react-native';
import {Header, Card, Avatar, Button, Icon} from 'react-native-elements';
import {Actions} from "react-native-router-flux";

// For easy user implementation
// const users = [
//     {
//         name: 'brynn',
//         avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
//     };

export default class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            refreshing: false,
            profile_username: '',
        };
    }

    goCard() {
        Actions.playercard();
    }
    goStats() {
        Actions.playerstats();
    }

    // componentDidMount() {
    //     this.onRefresh()
    // }

    // User image under background on Android. See styles.
    render() {
        return (
            <ScrollView style={styles.headerContainer}>
                <SafeAreaView/>
                <ImageBackground
                    style={styles.headerBackgroundImage}
                    blurRadius={1}
                    source={require('../images/test_usc.png')}
                >
                </ImageBackground>
                <View style={styles.headerColumn}>
                    <Image
                        style={styles.userImage}
                        source={require('../images/test_isaac.png')
                        }
                    />
                    <Text style={styles.userNameText}>{'Isaac Taylor-Stuart'}</Text>
                    <View style={styles.userAddressRow}>
                        <View>
                            <Icon
                                name="place"
                                underlayColor="transparent"
                                iconStyle={styles.placeIcon}
                                // onPress={this.onPressPlace}
                            />
                        </View>
                        <View style={styles.userCityRow}>
                            <Text style={styles.userCityText}>
                                {'Los Angeles'}, {'California'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.userAddressRow}>
                        <View>
                            <Icon
                                name="school"
                                underlayColor="transparent"
                                iconStyle={styles.placeIcon}
                            />
                        </View>
                        <View style={styles.userCityRow}>
                            <Text style={styles.userCityText}>
                                {'University of Southern California'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.userAddressRow}>
                        <View>
                            <Icon
                                name="format-align-left"
                                underlayColor="transparent"
                                iconStyle={styles.placeIcon}
                            />
                        </View>
                        <View style={styles.userCityRow}>
                            <Text style={styles.userCityText}>
                                {'6-2'}, {'205 lbs'}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{height: 250}}>
                    <WebView
                        style={styles.HighlightsContainer}
                        scrollEnabled={false}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                        source={{uri: 'https://www.youtube.com/embed/ht6klNfH2pg'}}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.goCard}>
                        <Text style={styles.buttonText}>Player Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.goStats}>
                        <Text style={styles.buttonText}>Stats</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFF',
        borderWidth: 0,
        flex: 1,
        margin: 0,
        padding: 0,
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#ff3b3b'
    },
    container: {
        flex: 1,
    },
    emailContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    headerBackgroundImage: {
        paddingBottom: 20,
        paddingTop: 200,
        flex: 1
    },
    headerContainer: {
        flex: 1,
        //backgroundColor: '#ff3b3b',
        paddingTop: Platform.OS === 'android' ? 25 : 0
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
    placeIcon: {
        color: 'black',
        fontSize: 20,
        paddingRight: 2
    },
    scroll: {
        backgroundColor: '#FFF',
    },
    telContainer: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 30,
    },
    userAddressRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userCityRow: {
        backgroundColor: 'transparent',
    },
    userCityText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'center',
        paddingBottom:5,
        textShadowColor:'#000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    },
    // User image behind background on Android. zIndex and position: absolute
    // not working.
    userImage: {
        marginTop: -90,
        borderColor: '#FFF',
        borderRadius: 85,
        borderWidth: 3,
        height: 170,
        marginBottom: 15,
        width: 170,
    },
    userNameText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 8,
        textAlign: 'center',
        textShadowColor:'#000',
        textShadowOffset:{width: 1, height: 1},
        textShadowRadius:1,
    },
    HighlightsContainer: {
        //marginTop: (Platform.OS = 'ios') ? 20 : 0,
    },
    buttonContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
        width:170,
        backgroundColor:"#FF3B3B",
        //borderRadius: 25,
        paddingVertical: 10,
        //fontSize: 16,
        //color: "#ffffff",
        marginVertical: 10,
        marginLeft: 10,
        marginRight: 1,
        //alignItems: "flex-start",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center"
    },
});