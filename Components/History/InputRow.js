import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Clipboard, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { TextColors, AppColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 15,
    padding: 10,
    borderBottomColor: AppColors.rowSeparator,
    borderBottomWidth: 1,
    backgroundColor: AppColors.background,
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

  render() {
    return (
      <TouchableOpacity style={styles.container} onLongPress={this.props.onLongPress} onPress={this.props.onPress}>
        <Text style={[styles.textInput, {fontWeight:this.props.isAns? 'bold':null}]}>{this.props.textInput}</Text>
        <Text style={[styles.textResult, {fontWeight:this.props.isAns? 'bold':null}]}> > {this.props.textResult}</Text>
      </TouchableOpacity>
    )
  }
}

InputRow.propTypes = {
  textInput: PropTypes.string,
  textResult: PropTypes.string,
  isAns: PropTypes.bool,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
}

export default InputRow
