import React from 'react';
import { StyleSheet } from 'react-native';
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
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{height: 100}}
            />
        )
    }
}