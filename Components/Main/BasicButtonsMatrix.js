import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { ButtonColors, Colors } from '../../Design/Colors';
import { Symbols } from '../../Design/Symbols';
import GenericButton from './GenericButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    flex: 1,
  },
  buttonStyle: {
    alignItems: "center",
    margin: 3,
    borderRadius: 10,
    justifyContent: 'center',
    flex: 1,
  },
  buttonTextStyle: {
    fontSize: 24,
  }
});


class BasicButtonsMatrix extends React.Component {

  addCharToInput = (char, mathChar) => () => {
    this.props.addCharToInput(char, mathChar)
  }

  getAns = () => {
  }

  delInput = () => {
  }

  getResult = () => {
    this.props.onSubmit()
  }

  sendCommaPress = () => {
  }

  getNumberButton(number) {
    return (
      <GenericButton 
        touchableStyle={{
            ...styles.buttonStyle,
            backgroundColor: ButtonColors.number
          }}
        textStyle={{
          ...styles.buttonTextStyle,
          color: ButtonColors.textlight, 
        }}
        text={number}
        onPress={this.addCharToInput(
          number, number)}
      />
    )
  }

  getSymbolButton(symString) {
    return (
      <GenericButton 
        touchableStyle={{
          ...styles.buttonStyle,
          backgroundColor: ButtonColors.genericFunction
        }}
        textStyle={{
          ...styles.buttonTextStyle,
          color: ButtonColors.textlight, 
        }}
        text={Symbols[symString].sym}
        onPress={this.addCharToInput(
          Symbols[symString].txt, Symbols[symString].math)}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rowView}>
          {this.getNumberButton("7")}
          {this.getNumberButton("8")}
          {this.getNumberButton("9")}
          <GenericButton 
            text={'DEL'}
            onPress={this.props.delInput}
            touchableStyle={{
              ...styles.buttonStyle,
              backgroundColor: ButtonColors.acDel
            }}
            textStyle={{
              ...styles.buttonTextStyle,
              color: ButtonColors.textdark, 
            }}
          />
          <GenericButton 
            text={'AC'}
            onPress={this.props.acInput}
            touchableStyle={{
              ...styles.buttonStyle,
              backgroundColor: ButtonColors.acDel
            }}
            textStyle={{
              ...styles.buttonTextStyle,
              color: ButtonColors.textdark, 
            }}
          />
        </View>
        <View style={styles.rowView}>
          {this.getNumberButton("4")}
          {this.getNumberButton("5")}
          {this.getNumberButton("6")}
          {this.getSymbolButton('mult')}
          {this.getSymbolButton('div')}
        </View>
        <View style={styles.rowView}>
          {this.getNumberButton("1")}
          {this.getNumberButton("2")}
          {this.getNumberButton("3")}
          {this.getSymbolButton('add')}
          {this.getSymbolButton('sub')}
        </View>
        <View style={styles.rowView}>
          {this.getNumberButton("0")}
          {this.getNumberButton('.')}
          {this.getSymbolButton('exp')}
          <GenericButton 
            text={Symbols.ans.sym}
            onPress={this.props.getAns}
            touchableStyle={{
              ...styles.buttonStyle,
              backgroundColor: ButtonColors.genericFunction
            }}
            textStyle={{
              ...styles.buttonTextStyle,
              color: ButtonColors.textlight, 
            }}
          />
          <GenericButton 
            text={Symbols.equal.sym}
            onPress={this.getResult}
            touchableStyle={{
              ...styles.buttonStyle,
              backgroundColor: ButtonColors.genericFunction
            }}
            textStyle={{
              ...styles.buttonTextStyle,
              color: ButtonColors.textlight, 
            }}
          />
        </View>
      </View>
    )
  }
}

BasicButtonsMatrix.propTypes = {
  addCharToInput: PropTypes.func,
  acInput: PropTypes.func,
  delInput: PropTypes.func,
  onSubmit: PropTypes.func,
  getAns: PropTypes.func,
}


export default BasicButtonsMatrix
