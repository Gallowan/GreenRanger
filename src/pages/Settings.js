import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import {ButtonGroup} from 'react-native-elements';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 2
        };
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex})
    }

    render() {
        const buttons = ['Account', 'Privacy', 'Notifications'];
        const {selectedIndex} = this.state;

        return (
            <View>
                <SafeAreaView style={styles.safeArea}>
                </SafeAreaView>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    underlayColor={'#ff3b3b'}
                    containerStyle={{ height: 30, alignSelf: 'stretch', backgroundColor: 'white'}}
                />
            </View>
        )
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
    safeArea: {
        backgroundColor: '#ff3b3b'
    },
});