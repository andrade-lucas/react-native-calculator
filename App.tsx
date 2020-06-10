import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonRow from './src/components/ButtonRow';
import IButtonProps from './src/interfaces/IButtonProps';
import Display from './src/components/Display';

interface IProps {
}

interface IState {
  value: number | string
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      value: 0
    }
  }

  createButtonRows() {
    let firstLine: Array<IButtonProps> = [
      { text: 'AC', color: '#d1cfcf', value: 'AC', flex: 1 },
      { text: '+/-', color: '#d1cfcf', value: '+/-', flex: 1 },
      { text: '%', color: '#d1cfcf', value: '%', flex: 1 },
      { text: '÷', color: '#f2bb22', value: '/', flex: 1 }
    ];

    let secondLine: Array<IButtonProps> = [
      { text: '7', color: '#6e6e6e', value: 7, flex: 1 },
      { text: '8', color: '#6e6e6e', value: 8, flex: 1 },
      { text: '9', color: '#6e6e6e', value: 9, flex: 1 },
      { text: 'x', color: '#f2bb22', value: '*', flex: 1 }
    ];

    let thirdLine: Array<IButtonProps> = [
      { text: '4', color: '#6e6e6e', value: 4, flex: 1 },
      { text: '5', color: '#6e6e6e', value: 5, flex: 1 },
      { text: '6', color: '#6e6e6e', value: 6, flex: 1 },
      { text: '-', color: '#f2bb22', value: '-', flex: 1 }
    ];

    let fourthLine: Array<IButtonProps> = [
      { text: '1', color: '#6e6e6e', value: 1, flex: 1 },
      { text: '2', color: '#6e6e6e', value: 2, flex: 1 },
      { text: '3', color: '#6e6e6e', value: 3, flex: 1 },
      { text: '+', color: '#f2bb22', value: '+', flex: 1 }
    ];

    let fifthLine: Array<IButtonProps> = [
      { text: '0', color: '#6e6e6e', value: 0, flex: 2 },
      { text: ',', color: '#6e6e6e', value: ',', flex: 1 },
      { text: '=', color: '#f2bb22', value: '=', flex: 1 }
    ];

    return (
      <View style={styles.buttons}>
        <View style={styles.row}>
          <ButtonRow buttons={firstLine} />
        </View>
        <View style={styles.row}>
          <ButtonRow buttons={secondLine} />
        </View>
        <View style={styles.row}>
          <ButtonRow buttons={thirdLine} />
        </View>
        <View style={styles.row}>
          <ButtonRow buttons={fourthLine} />
        </View>
        <View style={styles.row}>
          <ButtonRow buttons={fifthLine} />
        </View>
      </View>
    );
  }

  onButtonHandle(value: number | string) {
    this.setState({ value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={0} />
        {this.createButtonRows()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  buttons: {
    flex: 1,
    margin: 10
  },
  row: {
    width: '100%',
    flexDirection: 'row'
  }
});
