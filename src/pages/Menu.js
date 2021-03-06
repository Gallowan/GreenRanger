import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet,
    ImageBackground, Alert, SafeAreaView} from 'react-native';
import HomePage from './HomePage';
import {Header} from 'react-native-elements';
import reloadURL from './HomePage';
import {withNavigation} from 'react-navigation';

// Trying to reload the URL. Not working, naturally.
function reloadHome(text) {
    reloadURL(text);
}

class Menu extends Component {
    // Builder for the categories, their names and the image.
    state = {
        names: [
            {
                id: 0,
                name: 'Football',
                image: require('../images/categories/football.png'),
                feed: 'http://www.espn.com/espn/rss/ncf/news'
            },
            {
                id: 1,
                name: 'Basketball (M)',
                image: require('../images/categories/basketball_m.png'),
                feed: 'http://www.espn.com/espn/rss/ncb/news'
            },
            {
                id: 2,
                name: 'Basketball (F)',
                image: require('../images/categories/basketball_f.png'),
                feed: 'https://hoopfeed.com/content/feed'
            },
            {
                id: 3,
                name: 'Baseball',
                image: require('../images/categories/baseball.png'),
                feed: 'https://d1baseball.com/feed'
            },
            {
                id: 4,
                name: 'Soccer (M)',
                image: require('../images/categories/soccer_m.png'),
                feed: 'http://www.espn.com/espn/rss/ncf/news'
            },
            {
                id: 5,
                name: 'Soccer (F)',
                image: require('../images/categories/soccer_f.png'),
                feed: 'http://www.espn.com/espn/rss/ncf/news'
            },
            {
                id: 6,
                name: 'Softball',
                image: require('../images/categories/softball.png'),
                feed: 'http://www.espn.com/espn/rss/ncf/news'
            },
            {
                id: 7,
                name: 'Volleyball (F)',
                image: require('../images/categories/volleyball_f.png'),
                feed: 'http://www.espn.com/espn/rss/ncf/news'
            },
            {
                id: 8,
                name: 'Volleyball (M)',
                image: require('../images/categories/volleyball_m.png'),
                feed: 'http://www.espn.com/espn/rss/ncf/news'
            },
            {
                id: 9,
                name: 'Water Polo',
                image: require('../images/categories/polo.png'),
                feed: 'http://www.espn.com/espn/rss/ncf/news'
            }
        ]
    };

    static navigationOptions = {
        title: 'Sports News Selection',
        headerTitleStyle: {
            color: '#fff'
        },
        headerStyle: {
            backgroundColor: '#ff3b3b'
        }
    };

    // I'm honestly not sure what this is for.
    alertItemName = (item) => {
        alert(item.name)
    };

    // There isn't a URL set for each of the states yet. In the future, there will be a separate
    // URL(s) for each of the individual sports that will be taken and set to the URL Request
    // in HomePage.js.
    // Also I attempted to see if the URL would change on press in the Menu and pass it to
    // HomePage. It didn't work. Because it never does. Do we need Navigation set up?
    render() {
        return (
            <View style = {styles.pageContainer}>
                <SafeAreaView style={styles.safeArea}>
                </SafeAreaView>
                {/*<Header*/}
                    {/*resizeMode="cover"*/}
                    {/*backgroundColor={'#ff3b3b'}*/}
                    {/*style={styles.droidSafeView}*/}
                {/*>*/}
                {/*</Header>*/}
                    {
                    this.state.names.map((item, index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            // onPress = {() => HomePage.REQUEST_XML_URL = "http://www.espn.com/espn/rss/ncf/news"}
                            // onPress = {() => HomePage.setState({dummy: 1})}
                            onPress={() => {this.props.navigation.push('HomePage', {newURL: item.feed})
                            }}>
                            <ImageBackground
                                style={styles.button}
                                source={item.image}
                            >
                                <Text style = {styles.text}>
                                    {item.name}
                                </Text>
                            </ImageBackground>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    pageContainer: {
        marginTop: 25
    },
    container: {
        width: '100%',
        paddingBottom: 2,
        backgroundColor: '#000'
    },
    text: {
        textAlign: 'right',
        color: '#FFF'
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    safeArea: {
        marginTop: -25,
        backgroundColor: '#ff3b3b'
    },
});

// For SideMenu
// Menu.propTypes = {
//     onItemSelected: PropTypes.func.isRequired,
// };

export default withNavigation(Menu);