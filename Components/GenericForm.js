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
        this.setState({[key]: val})
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                {map(Object.keys(this.state), (item) => (
                    <View style={styles.inputContainer}>
                        <TextInput
                            keyboardType={this.state[item].keyboardType}
                            style={styles.input}
                            placeholder={this.state[item].placeholder}
                            placeholderTextColor={AppColors.notQuiteWhite}
                            keyboardAppearance='dark'
                            autoCapitalize='none'
                            autoCorrect={false}
                            returnKeyType="return"
                        />
                    </View>
                ))}
                <Button 
                    title="Submit" 
                    // onPress={handleSubmit} 
                    color={AppColors.linkButtonColor} 
                    // disabled={!validInput()}
                />
            </KeyboardAvoidingView>
        )
    }
}

export default GenericForm
