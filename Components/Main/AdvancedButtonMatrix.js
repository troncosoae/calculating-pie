import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { ButtonColors, Colors } from '../../Design/Colors';
import { Symbols } from '../../Design/Symbols';
import { FontSizes } from '../../Design/Fonts';
import GenericTMButton from './GenericTMButton';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor,
    flex: 0.55,
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
});


class AdvancedButtonMatrix extends React.Component {

  state = {
    onShift: false,
  }

  addCharToInput = (char, mathChar) => {
    this.props.addCharToInput(char, mathChar)
  }

  sendButtonPress = (key) => () => {
    if (Symbols[key].multipleCount) {
      for (let i = Symbols[key].multipleCount - 1; i >= 0; i--) {
        this.addCharToInput(Symbols[key].txt[i], Symbols[key].math[i])
      }
    } else {
      this.addCharToInput(Symbols[key].txt, Symbols[key].math)
    }
    
  }


  printButtonArray = () => {
    let listOfRows = []
    for (let i = 0; i < this.props.arrayButtons.length; i++) {
      listOfRows.push(this.printRow(i))
    }
    return listOfRows
  }

  printRow = (row_index) => {
    let rowOfButtons = []
    for (let i = 0; i < this.props.arrayButtons[row_index].length; i++) {
      rowOfButtons.push(this.printGenericButton(row_index, i))
    }
    return (
      <View style={styles.rowView}>
        { rowOfButtons }
      </View>
    )
  }

  printGenericButton = (row_index, col_index) => {
    let key = this.props.arrayButtons[row_index][col_index]
    if (this.state.onShift && Symbols[key].shift) {
      key = Symbols[key].shift
    }
    let sym = Symbols[key].sym
    if (key === "shift" || key === "shiftshift") {
      return (
        <GenericTMButton 
          text={sym}
          onPress={()=>{this.setState({onShift: !this.state.onShift})}}
          touchableStyle={{
              ...styles.buttonStyle,
              backgroundColor: ButtonColors.advancedFunction,
          }}
          textStyle={{
            fontSize: FontSizes.advancedButtonText, 
            color: ButtonColors.textlight
          }}
        />
      )
    }
    return (
      <GenericTMButton 
        text={sym}
        onPress={this.sendButtonPress(key)}
        touchableStyle={{
            ...styles.buttonStyle,
            backgroundColor: ButtonColors.advancedFunction,
        }}
        textStyle={{
          fontSize: FontSizes.advancedButtonText, 
          color: ButtonColors.textlight
        }}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.printButtonArray()}
      </View>
    )
  }
}

AdvancedButtonMatrix.propTypes = {
  arrayButtons: PropTypes.array,
  addCharToInput: PropTypes.func,
}

export default AdvancedButtonMatrix
