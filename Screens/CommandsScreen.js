import React from 'react';
import { View, StyleSheet, FlatList, Button, TextInput, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AppColors, InputTextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import CommandRow from '../Components/Commands/CommandRow';
import { text_evaluate } from '../MathBox/mathBox';

import { addInputToHistory } from '../Redux/mainActions';

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


class CommandsScreen extends React.Component {

    renderItem = ({item, index}) => {
        return <CommandRow 
                {...item}
                onPress={()=>{}}
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
                        data={this.props.commandsArray}
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
    commandsArray: state.commands.commandsArray,
})

const mapDispatchToProps = {
    // setAnsIndex: setAnsIndex,
    addInputToHistory: addInputToHistory,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommandsScreen)
