import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: 'row',
  },
});


export default class TextModifier extends React.Component {

  getStyle(type) {
    let textStyle = this.props.textStyle
    let textSize = this.props.textStyle.fontSize
    switch(type) {
      case 'sub':
        return {
          ...textStyle,
          fontSize: textSize*0.6,
          lineHeight: textSize*1.7,
          }
      case 'super':
        return {
          ...textStyle,
          fontSize: textSize*0.6,
          lineHeight: textSize*0.6,
          }
      case 'norm': 
        return textStyle
      default: 
        return textStyle
    }
  }

  renderText = () => {
    let inputText = this.props.input
    let regex = /(_\{)[^{}]+(\})|(\^\{)[^{}]+(\})/g
    let indexArray = []
    let stringArray = []
    let match;
    while ((match = regex.exec(inputText)) !== null) {
      indexArray.push(regex.lastIndex - match[0].length)
      stringArray.push(match[0])
    }

    let textViewArray = []
    let text = inputText.substring(0, indexArray[0])
    let keyCount = 0
    textViewArray.push(
    <Text style={this.getStyle('norm')} key={keyCount}>
      {text}
    </Text>)
    keyCount += 1
    let subscript = false
    for (let i = 0; i < indexArray.length; i++) {
      text = stringArray[i]
      if (text.substring(0, 1) === '^') {
        textViewArray.push(
        <Text style={this.getStyle('super')} key={keyCount}>
          {text.substring(2, text.length - 1)}
        </Text>)
        keyCount += 1
      } else if (text.substring(0, 1) === '_') {
        subscript = true
        textViewArray.push(
        <Text style={this.getStyle('sub')} key={keyCount}>
          {text.substring(2, text.length - 1)}
        </Text>)
        keyCount += 1
      }
      text = inputText.substring(
        indexArray[i] + stringArray[i].length, indexArray[i+1])
      textViewArray.push(
      <Text style={this.getStyle('norm')} key={keyCount}>
        {text}
      </Text>)
      keyCount += 1
    }
    return (textViewArray)
  }

  render() {
    return (
      <View style={this.props.style}>
        <View style={styles.rowDirection}>
          {this.renderText()}
        </View>
      </View>
    )
  }
}

TextModifier.propTypes = {
  input: PropTypes.string,
  textStyle: PropTypes.object,
  style: PropTypes.object,
}
