import React from 'react';
import { View, StyleSheet, FlatList, Button, TextInput, Text } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler'
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AppColors, InputTextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import InputRow from '../Components/History/InputRow';
import { text_evaluate } from '../MathBox/mathBox';

import { setAnsIndex, addInputToHistory, clearHistory } from '../Redux/mainActions';
import Animated from 'react-native-reanimated';

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
        flex: 1,
    },
    padding: {
      padding: 10,
      paddingTop: 5,
    },
    textInput: {
      backgroundColor: InputTextColors.background,
      borderRadius: 3,
      color: InputTextColors.text,
      flexGrow: 1,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: FontSizes.textInputWrite,
      height: FontSizes.textInputWrite*2,
    },
});


class HistoryScreen extends React.Component {

    state = {
        input: "",
    }

    componentDidMount(){
        this.props.navigation.addListener('focus', () => {
            if (this.props.route.params) {
                let params = this.props.route.params
                if ("prevScreen" in params && params.prevScreen === "Commands"){
                    this.setState({
                        input: this.state.input + params.input
                    })
                }
                this.props.route.params = {}
            }
        })
    }

    addTextToInput = (text) => () => {
        let textArray = text.split("=")
        this.setState({
            input: this.state.input + textArray[0].trim()
        })
    }

    onSubmitInput = () => {
        let input = this.state.input
        if (input !== "") {
            let result = text_evaluate(input, this.props.parser)
            // console.log(this.props.parser.scope)
            this.props.addInputToHistory(input, result)
            this.setState({ input: ""})
            this.refs.FlatList.scrollToOffset({ animated: true, offset: 0 })
        }
    }

    setAnsIndex = (index) => () => {
        let ansText = text_evaluate("ans=" + this.props.inputsArray[index].textResult, this.props.parser)
        this.props.setAnsIndex(index)
        this.setState({
            ansText: ansText,
        })
    }

    renderItem = ({item, index}) => {
        return <InputRow 
            {...item} isAns={index === this.props.ansIndex} onPress={this.setAnsIndex(index)}
            onLongPress={this.addTextToInput(item.textInput)}/>
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.aligning}>
                    <FlatList
                        ref="FlatList"
                        renderItem={this.renderItem} 
                        keyExtractor={(item, index) => index.toString()}
                        inverted={true}
                        onMomentumScrollEnd={()=>{this.setState({waitingForStop: false})}}
                        keyboardShouldPersistTaps="always"
                        data={[
                            ...this.props.inputsArray
                        ]}
                    />
                </View>
                <View style={styles.padding}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => this.setState({ input: text })}
                        value={this.state.input}
                        placeholder="Advanced Input: "
                        placeholderTextColor={InputTextColors.placeholder}
                        autoCorrect={false}
                        autoCapitalize='none'
                        returnKeyType="go"
                        blurOnSubmit={true}
                        onSubmitEditing={this.onSubmitInput}
                        keyboardAppearance='dark'
                        selectionColor={AppColors.cursorColor}
                    />
                </View>
                <KeyboardSpacer />
            </View>
        );
    }
}

// redux
const mapStateToProps = state => ({
    inputsArray: state.main.inputsArray,
    ansIndex: state.main.ansIndex,
    parser: state.main.parser,
})

const mapDispatchToProps = {
    setAnsIndex: setAnsIndex,
    addInputToHistory: addInputToHistory,
    clearHistory: clearHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
