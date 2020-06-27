import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { AppColors } from '../../Design/Colors';


const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: 'row',
  },
  touchableCursor: {
      width: 2,
      height: 35,
  },
});


const TouchableCursor = props => (
    <TouchableOpacity
        onPress={props.onPress} 
        activeOpacity={1}
        style={{
            ...styles.touchableCursor, 
            backgroundColor: props.color,
        }}
        />
)
TouchableCursor.propTypes = {
    onPress: PropTypes.func,
    color: PropTypes.string,
}


const TouchableChar = props => (
    <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={1}
    >
            <Text style={{...props.textStyle}}>
                {props.text}
            </Text>
    </TouchableOpacity>
)
TouchableChar.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    textStyle: PropTypes.object,
}


class CursorInput extends React.Component {

    setCursorPosition = (index) => () => {
        this.props.setCursorPosition(index)
    }

    renderText = () => {
        let charArray = [...this.props.input]
        if (charArray[charArray.length - 1] !== " ") {
            charArray.push(" ")
        }
        let textStyle = this.props.textStyle
        let position = 0
        let charViewArray = []
        charArray.forEach(char => {
            charViewArray.push(
                <TouchableCursor 
                    onPress={this.setCursorPosition(position)} color={this.props.cursorPosition === position ? AppColors.cursorColor:null}
                />
            )
            charViewArray.push(
                <TouchableChar textStyle={textStyle} 
                    text={char} onPress={this.setCursorPosition(position)}
                />
            )
            position += 1
        })
        charViewArray.push(
            <TouchableOpacity 
                style={{width: 80}} onPress={this.setCursorPosition(position - 1)}
            />
        )
        return (charViewArray)
    }

    render() {
        return (
        <ScrollView ref={ref => {this.scrollView = ref}}
            style={[this.props.style, {maxHeight:50}]} horizontal={true} showsHorizontalScrollIndicator={false}
            onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
        >
            {this.renderText()}
        </ScrollView >
        )
    }
}

CursorInput.propTypes = {
  input: PropTypes.array,
  textStyle: PropTypes.object,
  style: PropTypes.object,
  setCursorPosition: PropTypes.func,
  cursorPosition: PropTypes.number,
}


export default CursorInput
