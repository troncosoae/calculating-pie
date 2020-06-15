import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Clipboard, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { TextColors, AppColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    padding: 10,
    borderBottomColor: AppColors.rowSeparator,
    borderBottomWidth: 1
  },
  input: {
    paddingTop: 5,
  },
  result: {
    paddingTop: 5,
  },
  textInput: {
    color: TextColors.textInput,
    fontSize: FontSizes.textInput,
  },
  textResult: {
    color: TextColors.textResult,
    fontSize: FontSizes.textResult,
  },
});



class InputRow extends React.Component {

  onLongPress = () => {
    console.log("longpresss")
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.input} onLongPress={this.onLongPress}>
          <Text style={styles.textInput}>{this.props.textInput}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.result} onLongPress={this.onLongPress}>
          <Text style={styles.textResult}> > {this.props.textResult}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

InputRow.propTypes = {
  textInput: PropTypes.string,
  textResult: PropTypes.string,
}

export default InputRow
