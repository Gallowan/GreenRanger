import React from 'react';
import {Button, View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView} from 'react-native';
//import {createStackNavigator} from 'react-navigation';
import {Component} from "react";
import {Actions} from 'react-native-router-flux';

export default class SportSelection extends Component {
    goHome() {
        Actions.home();
    }

    state = {
        names: [
            {
                id: 0,
                name: 'Football',
            },
            {
                id: 1,
                name: 'Basketball (M)',
            },
            {
                id: 2,
                name: 'Basketball (F)',
            },
            {
                id: 3,
                name: 'Baseball',
            },
            {
                id: 4,
                name: 'Soccer (M)',
            },
            {
                id: 5,
                name: 'Soccer (F)',
            },
            {
                id: 6,
                name: 'Softball',
            },
            {
                id: 7,
                name: 'Volleyball (F)',
            },
            {
                id: 8,
                name: 'Volleyball (M)',
            },
            {
                id: 9,
                name: 'Water Polo',
            }
        ]
    }
    alertItemName = (item) => {
        alert(item.name)
    }
    render() {
        return (
            <View>
                <SafeAreaView style={styles.safeArea}>
                </SafeAreaView>
                {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress = {() => this.goHome(item)}>
                            <Image
                                source={'../images/categories/football'}
                                style={styles.canvas} />
                            <Text style = {styles.text}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
})