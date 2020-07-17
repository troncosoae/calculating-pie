import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Clipboard, Alert } from 'react-native';
import PropTypes from 'prop-types';

import { TextColors, AppColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    padding: 5,
    backgroundColor: AppColors.background,
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
      <TouchableOpacity 
      onPress={this.props.onPress} 
      style={styles.container} 
      // activeOpacity={1}
      >
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
}

export default InputRow
