import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IButtonProps from '../interfaces/IButtonProps';

const Button = (props: IButtonProps) => (
    <View style={[styles.container]}>
        <Text>{props.text}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 25
    }
});

export default Button;