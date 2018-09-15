import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';


export default class Glasses extends Component {
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.logoSize}
                       source={require("../images/GlassesWhiteVector.png")}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    logoText: {
        marginVertical: 15,
        fontSize:18,
        color: "rgba(255,255,255,0.7)",
    },
    logoSize: {
        width:165,
        height:43,
        resizeMode: 'contain'
    }
});