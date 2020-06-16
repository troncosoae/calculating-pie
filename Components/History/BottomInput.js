import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { text_evaluate } from '../../MathBox/mathBox';
import { InputTextColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts';

import { addInputToHistory } from '../../Redux/mainActions'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        bottom: 0,
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


class BottomInput extends React.Component {

    state = {
        input: ""
    }

    onSubmit = () => {
        let input = this.state.input
        if (input !== "") {
            let result = text_evaluate(input, this.props.parser)
            this.props.addInputToHistory(input, result)
            this.setState({ input: ""})
        }
    }

    render() {
        return (
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
                    onSubmitEditing={this.onSubmit}
                    keyboardAppearance='dark'
                />
            </View>
        );
    }
}

// redux
const mapStateToProps = state => ({
    parser: state.main.parser,
})

const mapDispatchToProps = {
    addInputToHistory: addInputToHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomInput)
