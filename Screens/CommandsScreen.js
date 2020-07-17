import React from 'react';
import { View, StyleSheet, FlatList, Button, TextInput, RefreshControl, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AppColors, InputTextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import { CommandRow, HeaderCommandRow } from '../Components/Commands/CommandRow';
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
      paddingBottom: 5,
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

    state = {
        searchInput: "",
        commandsArray: [],
    }

    componentDidMount() {
        this.getCommands()
        this.props.navigation.addListener('focus', () => {
            this.getCommands()
        })
    }

    getCommands() {
        let commandsArray = []
        let i = 0
        this.props.commandsArray.forEach(sec => {
            commandsArray.push({headerName: sec.sectionName, type: "HEADER"})
            i += 1
            sec.commands.forEach(com => {
                commandsArray.push({...com, type: "COMMAND", 
                    filterVar: [sec.sectionName, com.textName, com.textDefine].join(" ")})
                i += 1
            })
        })
        this.setState({
            commandsArray: commandsArray,
        })
    }

    onPressCommand = (input) => () => {
        this.props.navigation.navigate("History", {prevScreen: "Commands", input: input})
    }

    renderItem = ({item, index}) => {
        if (item.type === "HEADER") {
            return <HeaderCommandRow 
                {...item}
            />
        }
        return <CommandRow 
            {...item}
            onPress={this.onPressCommand(item.textDefine)}
            onLongPress={()=>{}}
        />
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.padding}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => this.setState({ searchInput: text })}
                        value={this.state.searchInput}
                        placeholder="Search..."
                        placeholderTextColor={InputTextColors.placeholder}
                        autoCorrect={false}
                        autoCapitalize='none'
                        returnKeyType="search"
                        blurOnSubmit={true}
                        keyboardAppearance='dark'
                        selectionColor={AppColors.cursorColor}
                    />
                </View>
                <KeyboardAvoidingView style={styles.aligning} behavior="height" keyboardVerticalOffset={65}>
                    <FlatList
                        renderItem={this.renderItem} 
                        keyExtractor={(item, index) => index.toString()}
                        keyboardShouldPersistTaps="always"
                        data={
                            this.state.searchInput === "" ? this.state.commandsArray:
                            this.state.commandsArray.filter(
                                item => {
                                    if (item.type === "HEADER") {
                                        return true
                                    }
                                    return item.filterVar.toLowerCase().includes(this.state.searchInput.toLowerCase())
                                }
                                )
                            }
                    />
                </KeyboardAvoidingView>
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
