import React from 'react';
import {View, Text, TextInput, StyleSheet, ListView} from 'react-native';
import {REQUEST_XML_URL} from "./HomePage";

export default class PlayerStats extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            txt: "test",
        };
    }

    render() {
        return (
            <View>
                <View style={styles.inner}>
                    <Text style={styles.t1}> Transcripts </Text> {
                        this.state.isEditing ?
                        <TextInput
                            value={this.state.txt}
                            onChangeText={(value) => this.setState({ txt: value })}
                            autoFocus
                            onBlur={() => this.setState({ isEditing: false })}
                        /> :
                        <Text
                            style={styles.t2}
                            onPress={() => this.setState({ isEditing: true })}
                        >
                            {this.state.txt}
                        </Text>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    t1: {
        width:300,
        backgroundColor:"rgba(255,255,255,0.2)",
        fontSize: 16,
        color: "#000",
        marginVertical: 10,
    },
    t2: {
        height:300,
        width:300,
        backgroundColor:"rgba(255,255,255,0.2)",
        borderRadius: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: "#000",
        marginVertical: 10,
    },
    inner: {
        //Ismail this is where you change the background color
        //backgroundColor: "#455a64",
        paddingTop: 50,
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});