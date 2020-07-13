import React from 'react';
import { View, StyleSheet, FlatList, Button, TextInput, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AppColors, InputTextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import ConstantRow from '../Components/Constants/ConstantRow';
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


class ConstantsScreen extends React.Component {

    state = {
        input: "",
        showClear: false,
    }

    exportConstant = (textSym, textName) => () => {
        let input = textSym + " = " + textName
        let result = this.props.parser.evaluate(input)
        console.log(input, result)
        console.log(result.toString())
        this.props.addInputToHistory(input, result.toString())
    }

    renderItem = ({item, index}) => {
        return <ConstantRow 
            {...item}
            onPress={this.exportConstant(item.textSym, item.textName)}
            onLongPress={()=>{}}
            />
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.aligning}>
                    <FlatList
                        renderItem={this.renderItem} 
                        keyExtractor={(item, index) => index.toString()}
                        data={[
                            {textSym: "c", textName: "speedOfLight", textValue: "0000"},
                            {textSym: "c", textName: "speedOfLight", textValue: "0000"}
                        ]}
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
})

const mapDispatchToProps = {
    // setAnsIndex: setAnsIndex,
    addInputToHistory: addInputToHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(ConstantsScreen)
