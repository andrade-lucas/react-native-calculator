import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import IButtonProps from '../interfaces/IButtonProps';

const Button = (props: IButtonProps) => (
    <TouchableOpacity style={[styles.container, { backgroundColor: props.color, flex: props.flex }]}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 80,
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 100
    },
    text: {
        color: '#000',
        fontSize: 35,
        alignSelf: 'center'
    }
});

export default Button;