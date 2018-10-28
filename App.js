import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import firebase from 'firebase';
import Routes from './src/Routes';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

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
// const RootStack = StackNavigator(
//     {
//         Home: Login,
//         SignUp: SignUp,
//     });

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#455a64",
      flex: 1,
      justifyContent: "center",
  },
});
