import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'

import { AppColors, InputTextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import { Text } from 'native-base';
import { map } from 'mathjs';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
    justifyContent: 'center'
  },
  inputContainer: {
    paddingTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
//   input: {
//     borderWidth: 1,
//     borderColor: AppColors.notQuiteWhite,
//     borderRadius: 3,
//     height: 45,
//     color: AppColors.formText,
//     paddingLeft: 5,
//     paddingRight: 5,
//     fontSize: FontSizes.textInputWrite,
//   },
  input: {
    backgroundColor: InputTextColors.background,
    borderRadius: 3,
    color: InputTextColors.text,
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: FontSizes.textInputWrite,
    height: FontSizes.textInputWrite*2,
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
})

class GenericForm extends React.Component {
    state = {
        ...this.props.initState
    }

    getHandler = key => val => {
        this.setState({[key]: {...this.state[key], value: val}})
    }

    validInput = () => {
        let valid = true
        Object.keys(this.state).forEach(
            (key) => {
                if (this.state[key].required && this.state[key].value == "") {
                    valid = false
                }
            }
        )
        return valid
    }

    render() {
        return (
            // <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.container}>
                {map(Object.keys(this.state), (key) => (
                    <View style={styles.inputContainer}>
                        <TextInput
                            keyboardType={this.state[key].keyboardType}
                            style={styles.input}
                            value={this.state[key].value}
                            onChangeText={this.getHandler(key)}
                            placeholder={this.state[key].placeholder}
                            placeholderTextColor={AppColors.notQuiteWhite}
                            keyboardAppearance='dark'
                            autoCapitalize='none'
                            autoCorrect={false}
                        />
                    </View>
                ))}
                <View style={{padding:10}}>
                <Button
                    title="Submit" 
                    onPress={this.props.handleSubmit(this.state)}
                    color={AppColors.linkButtonColor} 
                    disabled={!this.validInput()}
                />
                </View>
                {/* </KeyboardAvoidingView> */}
            </View>
        )
    }
}

export default GenericForm
