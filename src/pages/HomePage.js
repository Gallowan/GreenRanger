import React from 'react';
import { StyleSheet, Text, TextInput, ListView, View, Image, WebView, TouchableOpacity, Alert } from 'react-native';
import { SearchBar, Header } from 'react-native-elements';
//import {Actions} from 'react-native-router-flux';

// In future, set this equal to the default sport set on
// the user's account. -JG
const REQUEST_XML_URL = 'http://www.espn.com/espn/rss/ncb/news';
//const REQUEST_XML_URL = 'https://www.cbsnews.com/rss/';

export default class App extends React.Component {

    // Uncommenting this will crash the app because sportsSelection doesn't exist yet
    toSelection() {
        //Actions.sportselection();
    }

    // Constructor, involving the state of the RSSFeed
    // Checks for XML source, loading status
    constructor(props){
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, }),
            loaded: false,
            text: REQUEST_XML_URL,
            title: "",
        };
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            // Consider installing React Native Elements?
            <View>
                <Header
                resizeMode="cover"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ image: "../images/GlassesWhiteVectorTM.png"}}
                rightComponent={{ icon: 'home', color: '#fff'}}
                backgroundColor={'#ff3b3b'}
                />
                <SearchBar
                onChangeText={(text) => this.setState({text})}
                onClearText={(text) => this.setState({text})}
                onEndEditing={ () => this.onPressLearnMore(this.state.text) }
                placeholder={"Search..."}
                containerStyle={styles.header}
                inputStyle={{backgroundColor: 'white'}}
                lightTheme
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderFeed}
                    style={styles.ListView}
                />
            </View>
        );
    }

    componentDidMount() {
        this.fetchData(REQUEST_XML_URL);
    }

    reloadURL(NEW_URL) {
        this.fetchData(NEW_URL);
    }

    fetchData(URL) {
        const targetURL = 'https://api.rss2json.com/v1/api.json?rss_url=';

        fetch(targetURL + URL)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.items),
                    loaded: true,
                    title: responseData.feed.title,
                });
            })
            .done();
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading Feed...
                </Text>
            </View>
        );
    }

    renderFeed(item) {
        return (
            <TouchableOpacity onPress={() => {Alert.alert(item.title, item.description)}}>
                <View style={styles.container}>
                    <Image
                        source={{uri: item.enclosure.link}}
                        style={styles.thumbnail}
                    />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                        <Text style={styles.description} numberOfLines={3}>{item.description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    thumbnail: {
        width: 100,
        height: 70,
    },
    rightContainer: {
        paddingLeft: 5,
        paddingRight:5,
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 4,
        textAlign: 'left',
    },
    description: {
        fontSize: 12,
        textAlign: 'left',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: '#FFF'
    }
});