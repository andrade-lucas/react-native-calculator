import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from './Button';
import IButtonRowProps from '../interfaces/IButtonRowProps';

export default class ButtonRow extends React.Component<IButtonRowProps> {
    renderButtons() {
        let { buttons } = this.props;
        return buttons.map(button => {
            return (
                <Button key={button.value} text={button.text} color={button.color} value={button.value} flex={button.flex} />
            );
        });
    }

    render() {
        return (
            <View style={styles.container}>
                { this.renderButtons() }
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})