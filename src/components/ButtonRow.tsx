import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from './Button';
import IButtonRowProps from '../interfaces/IButtonRowProps';

export default class ButtonRow extends React.Component<IButtonRowProps> {
    renderButtons() {
        let { buttons } = this.props;

        for (let i = 0; i < buttons.length; i++) {
            return (
                <Button text={buttons[i].text} color={buttons[i].color} value={buttons[i].value} />
            );
        }
    }

    render() {
        return (
            <View>
                { this.renderButtons() }
            </View>
        )
    }
};