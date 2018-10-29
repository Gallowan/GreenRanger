import React from 'react';
import { View, Text } from 'react-native';

export default class PlayerCard extends React.Component {

    static navigationOptions = {
        header:null
    }

    render() {
        return (
            <View>
                <Text>
                    {'player card lol'}
                </Text>
            </View>
        )
    }
}