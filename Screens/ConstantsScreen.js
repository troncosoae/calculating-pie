import React from 'react';
import { View, StyleSheet, FlatList, Button, TextInput, RefreshControl, Alert } from 'react-native';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AppColors, InputTextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import ConstantRow from '../Components/Constants/ConstantRow';
import { text_evaluate } from '../MathBox/mathBox';

import { addInputToHistory } from '../Redux/mainActions';
import { removeConstant } from '../Redux/constantActions';
import { Title } from 'native-base';

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


class ConstantsScreen extends React.Component {

    exportConstant = (textSym, value) => () => {
        let input = textSym + " = " + value
        let result = text_evaluate(input, this.props.parser)
        this.props.addInputToHistory(input, result.toString())
        this.props.navigation.goBack()
    }

    renderItem = ({item, index}) => {
        return <ConstantRow 
            {...item}
            onPress={item.isDefault ? this.exportConstant(item.textSym, item.textName):this.exportConstant(item.textSym, item.textValue)}
            onLongPress={item.isDefault ? () => {}: () => {
                Alert.alert("Remove Constant", "Are you sure?", [
                    {
                        text: "Cancel",
                        style: "cancel"
                    },
                    { text: "Yes", onPress: () => {
                        this.props.removeConstant(index)
                        this.setState({})
                    }}
                ])
            }}
            />
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.aligning}>
                    <FlatList
                        renderItem={this.renderItem} 
                        keyExtractor={(item, index) => index.toString()}
                        data={this.props.constantsArray}
                    />
                </View>
            </View>
        );
    }
}

// redux
const mapStateToProps = state => ({
    // inputsArray: state.main.inputsArray,
    // ansIndex: state.main.ansIndex,
    parser: state.main.parser,
    constantsArray: state.constants.constantsArray,
})

const mapDispatchToProps = {
    removeConstant: removeConstant,
    addInputToHistory: addInputToHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstantsScreen)
