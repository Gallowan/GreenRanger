import React from 'react';
import {View, Text, TextInput, StyleSheet, ListView, Image, Platform, SafeAreaView, StatusBar} from 'react-native';
import {REQUEST_XML_URL} from "./HomePage";

export default class PlayerStats extends React.Component {

    static navigationOptions = {
        header:null
    }

    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
            txt: "test",
        };
    }

    render() {
        return (
            <View style={styles.rowContainer}>
                <View style={styles.rowText}>
                    <SafeAreaView/>
                    <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                        {"Transcripts"}
                    </Text>
                    <TextInput
                        style={styles.inputText}
                        numberOfLines={1}
                        ellipsizeMode ={'tail'}
                        value={this.state.txt}
                        onChangeText={(value) => this.setState({txt: value})}
                        autoFocus
                        onPress={() => this.setState({isEditing:true})}
                        onBlur={() => this.setState({isEditing:false})}>
                    </TextInput>
                </View>
            </View>
        )
    }
}

{/*<View>*/}
    {/*<View style={styles.inner}>*/}
        {/*<Text style={styles.t1}> Transcripts </Text> {*/}
        {/*this.state.isEditing ?*/}
            {/*<TextInput*/}
                {/*value={this.state.txt}*/}
                {/*onChangeText={(value) => this.setState({ txt: value })}*/}
                {/*autoFocus*/}
                {/*onBlur={() => this.setState({ isEditing: false })}*/}
            {/*/> :*/}
            {/*<Text*/}
                {/*style={styles.t2}*/}
                {/*onPress={() => this.setState({ isEditing: true })}*/}
            {/*>*/}
                {/*{this.state.txt}*/}
            {/*</Text>*/}
    {/*}*/}
    {/*</View>*/}
{/*</View>*/}

const styles = StyleSheet.create({
    rowContainer: {
        flexGrow: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: '#FFF',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 4,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#CCC',
        shadowOpacity: 1.0,
        shadowRadius: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },
    title: {
        paddingLeft: 10,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#777'
    },
    inputText: {
        paddingLeft: 20,
        marginTop: 5,
        fontSize: 14,
        color: '#777',
        paddingBottom: 20,
        flexWrap: 'wrap'
    },
    thumbnail: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    rowText: {
        flex: 4,
        flexDirection: 'column'
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#ff3b3b'
    },
});