import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import IDisplayProps from '../interfaces/IDisplayProps';
import IDisplayState from '../interfaces/IDisplayState';

export default class Display extends React.Component<IDisplayProps, IDisplayState> {
    constructor(props: IDisplayProps) {
        super(props);

        this.state = {
            log: '0',
            value: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#000" barStyle="light-content" />
                <View style={styles.log}>
                    <Text style={styles.logText}>{this.state.log}</Text>
                </View>
                <Text style={styles.value}>{this.state.value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        height: 250
    },
    log: {
        flex: 1,
        margin: 20,
        justifyContent: 'flex-end',
        textAlignVertical: 'bottom',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
    },
    logText: {
        textAlign: 'right',
        marginRight: 10,
        fontSize: 15,
        color: '#fff'
    },
    value: {
        flex: 3,
        fontSize: 100,
        color: '#fff',
        textAlign: 'right',
        justifyContent: 'flex-end',
        marginRight: 20,
        textAlignVertical: 'bottom'
    }
})