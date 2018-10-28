import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import firebase from 'firebase';
import { createStackNavigator } from 'react-navigation';
import Routes from './src/Routes';

//Screen Imports for react-navigator
import Login from "./src/pages/Login";
import HomePage from "./src/pages/HomePage";

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

export default class App extends React.Component {
  render() {
      return <View style={styles.container}>
          {/* You may only have one or the other, you cannot pass in both to the same view*/}
          <Routes/>
          {/*<RootStack/>*/}

      </View>;
  }
}

/*
    This stack navigator will provide a list of the screens that a page can go to. The addition of a
    screen means a new "route" is created behind the scenes, you cannot just go to an existing screen
    from any screen unless it is explicitly stated in this StackNavigator. Navigating to a new page is
    done with "this.props.navigation.navigate("SceenName");", but if you want to go the SAME screen you
    are on, you must use "this.props.navigation.push("SameScreenName")". Take notes boys.
 */
 const RootStack = createStackNavigator(
     {
         Login: Login,
         //HomeScreen: HomePage,
     });

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#455a64",
      flex: 1,
      justifyContent: "center",
  },
});
