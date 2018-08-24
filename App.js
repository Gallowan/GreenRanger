import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import firebase from 'firebase';
import Routes from './src/Routes';

const config = {
    apiKey: "AIzaSyD6o-wUK-t7Oo9yJL-YczGS3rEXAN4Gk-E",
    authDomain: "greenranger-94002.firebaseapp.com",
    databaseURL: "https://greenranger-94002.firebaseio.com",
    storageBucket: "",
    //projectId: "greenranger-94002",
    //storageBucket: "greenranger-94002.appspot.com",
    //messagingSenderId: "124806097426"
};
firebase.initializeApp(config);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#455a64",
      flex: 1,
      justifyContent: "center",
  },
});
