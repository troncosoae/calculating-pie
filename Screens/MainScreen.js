import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import { AppColors, TextColors, Colors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import InputRow from '../Components/Main/InputRow';
import CursorInput from '../Components/Main/CursorInput';
import BasicButtonsMatrix from '../Components/Main/BasicButtonsMatrix';
import AdvancedButtonMatrix from '../Components/Main/AdvancedButtonMatrix';
import { text_evaluate } from '../MathBox/mathBox';

import { addInputToHistory, setAnsIndex } from '../Redux/mainActions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background,
    },
    keyboardAvoidStyle: {
        position: 'absolute',
        left: 0, 
        right: 0, 
        bottom: 0,
    },
    aligning: {
        justifyContent: 'center',
        flex: 0.8,
        // borderBottomColor: AppColors.notQuiteWhite,
        // borderBottomWidth: 1
    },
    textInput: {
      color: TextColors.textInput,
      fontSize: FontSizes.simpleCalculatorInput,
      minHeight: FontSizes.simpleCalculatorInput*2,
      paddingLeft: 25,
      paddingTop: 5,
    },
    cursorInputStyle: {
        paddingLeft: 25,
        paddingRight: 25,
        paddingTop: 5,
    },
    cursorInputTextStyle: {
        color: TextColors.textInput,
        fontSize: FontSizes.simpleCalculatorInput,
        minHeight: FontSizes.simpleCalculatorInput*2,
        letterSpacing: 2,
    },
    textResult: {
      color: TextColors.textResult,
      fontSize: FontSizes.simpleCalculatorResult,
      minHeight: FontSizes.simpleCalculatorResult*2,
      paddingLeft: 30,
    },
});


class MainScreen extends React.Component {

    state = {
        textInput: [],
        mathInput: [],
        cursorPosition: 0,
    }

    setCursorPosition = (index) => {
        this.setState({
            cursorPosition: index
        })
        console.log(this.state.cursorPosition)
    }

    addCharToInput = (char, mathChar) => {
        this.state.textInput.splice(this.state.cursorPosition, 0, char)
        this.state.mathInput.splice(this.state.cursorPosition, 0, mathChar)
        this.setState({
            cursorPosition: this.state.cursorPosition + 1,
        })
    }

    acInput = () => {
        this.setState({
            textInput: [],
            mathInput: [],
            cursorPosition: 0,
        })
    }

    delInput = () => {
        this.state.textInput.splice(this.state.cursorPosition - 1, 1)
        this.state.mathInput.splice(this.state.cursorPosition - 1, 1)
        this.setState({
            cursorPosition: this.state.cursorPosition - 1,
        })
    }

    onSubmit = () => {
        let input = this.state.mathInput.join("")
        if (input !== "") {
            let result = text_evaluate(input, this.props.parser)
            this.props.addInputToHistory(input, result)
            this.setState({
                textInput: [],
                mathInput: [],
                cursorPosition: 0,
            })
        }
    }

    setAnsIndex = (index) => () => {
        this.props.setAnsIndex(index)
    }

    getAns = () => {
        if (this.props.inputsArray.length > 0) {
            let ans = this.props.inputsArray[this.props.ansIndex].textResult
            this.addCharToInput("ans", ans)
            console.log(this.props.inputsArray[this.props.ansIndex].textResult)
        }
    }

    renderItem = ({item, index}) => {
        return (<InputRow {...item} isAns={index === this.props.ansIndex} onPress={this.setAnsIndex(index)}/>)
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.aligning}>
                    <FlatList
                        renderItem={this.renderItem} 
                        keyExtractor={(item, index) => index.toString()}
                        inverted={true}
                        keyboardShouldPersistTaps="always"
                        data={this.props.inputsArray}
                        stickyHeaderIndices={[this.props.ansIndex]}
                        invertStickyHeaders={false}
                    />
                </View>
                <CursorInput style={styles.cursorInputStyle} textStyle={styles.cursorInputTextStyle}
                    input={this.state.textInput}
                    setCursorPosition={this.setCursorPosition}
                    cursorPosition={this.state.cursorPosition}
                />
                <AdvancedButtonMatrix 
                    arrayButtons={this.props.advancedButtons}
                    addCharToInput={this.addCharToInput}
                />
                <BasicButtonsMatrix 
                    addCharToInput={this.addCharToInput}
                    acInput={this.acInput}
                    delInput={this.delInput}
                    onSubmit={this.onSubmit}
                    getAns={this.getAns}
                />
            </View>
        );
    }
}

// redux
const mapStateToProps = state => ({
    inputsArray: state.main.inputsArray,
    parser: state.main.parser,
    ansIndex: state.main.ansIndex,
    advancedButtons: state.buttons.buttonsArray,
})

const mapDispatchToProps = {
    addInputToHistory: addInputToHistory,
    setAnsIndex: setAnsIndex,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
