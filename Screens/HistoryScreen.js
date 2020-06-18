import React from 'react';
import { View, StyleSheet, FlatList, Button, TextInput, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AppColors, InputTextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import InputRow from '../Components/History/InputRow';
import { text_evaluate } from '../MathBox/mathBox';

import { setAnsIndex, addInputToHistory } from '../Redux/mainActions';

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
        showClear: false,
    }

    addTextToInput = (text) => () => {
        this.setState({
            input: this.state.input + text
        })
    }

    onSubmitInput = () => {
        let input = this.state.input
        if (input !== "") {
            let result = text_evaluate(input, this.props.parser)
            this.props.addInputToHistory(input, result)
            this.setState({ input: ""})
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
                        renderItem={this.renderItem} 
                        keyExtractor={(item, index) => index.toString()}
                        inverted={true}
                        onMomentumScrollEnd={()=>{this.setState({waitingForStop: false})}}
                        keyboardShouldPersistTaps="always"
                        // refreshing={false}
                        // onRefresh={()=>{console.log("refreshed")}}
                        refreshControl={
                            <RefreshControl
                                refreshing={false}
                                onRefresh={()=>{
                                    // this.setState({showClear: !this.state.showClear})
                                    console.log("refreshed")
                                }}
                                tintColor='rgba(1, 1, 1, 0)'
                             />}
                        data={[
                            ...this.props.inputsArray
                        ]}
                    />
                </View>
                {/* {this.state.showClear ? <Button title={"clear"}/>:<View /> } */}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
