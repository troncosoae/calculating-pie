import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


const GenericButton = props => (
  <TouchableOpacity 
    style={{...props.touchableStyle}}
    onPress={props.onPress}>
    <Text style={{...props.textStyle}}>
      {props.text}
    </Text>
  </TouchableOpacity>
)


GenericButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  touchableStyle: PropTypes.object,
  textStyle: PropTypes.object,
}

export default GenericButton