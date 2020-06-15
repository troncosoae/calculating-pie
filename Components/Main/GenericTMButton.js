import React from 'react'
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { FontSizes } from '../../Design/Fonts';
import { AppColors } from '../../Design/Colors';
import TextModifier from './TextModifier';


class GenericTMButton extends React.Component {
  render() {
    return (
      <TouchableOpacity 
        style={{...this.props.touchableStyle}}
        onPress={this.props.onPress}>
        <TextModifier
          input={this.props.text}
          textStyle={this.props.textStyle}
          style={{justifyContent: 'center', flex: 1,}}
        />
      </TouchableOpacity>
    )
  }
}


GenericTMButton.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  touchableStyle: PropTypes.object,
  textStyle: PropTypes.object,
  color: PropTypes.string,
  textColor: PropTypes.string,
}

export default GenericTMButton