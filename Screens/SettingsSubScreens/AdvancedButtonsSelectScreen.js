import React from 'react'
import { View, StyleSheet, Alert, SectionList, ScrollView } from 'react-native';
import { List, Toast, Content, Text, Button, Container, Root } from 'native-base';
import { connect } from 'react-redux';

import { AppColors, TextColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts';
import { Symbols } from '../../Design/Symbols';
import { renderSwitchItem } from '../../Components/Settings/listItems';
import { newButtonArrayButtons } from '../../Redux/buttonsActions';
import { floor } from 'mathjs';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background,
    },
    item: {
        backgroundColor: AppColors.background,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: AppColors.rowSeparator,
    },
    header: {
        backgroundColor: AppColors.background,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: AppColors.rowSeparator,
    },
    itemText: {
        color: TextColors.textInput,
        fontSize: FontSizes.settingItem,
    },
    headerText: {
        color: TextColors.textResult,
        fontSize: FontSizes.settingsHeader,
    },
});

const SWITCH_ITEM = "switchItem"


class AdvancedButtonsSelectScreen extends React.Component {

  state = {
    itemArray: [
      {text: "sum(", switchStatus: false, key: "sum"},
      {text: "mean(", switchStatus: false, key: "mean"},
      {text: "std(", switchStatus: false, key: "std"},
      {text: "var(", switchStatus: false, key: "var"},
      {text: "log(", switchStatus: false, key: "log"},
      {text: "log( ,10)", switchStatus: false, key: "log10"},
      {text: "\u03C0", switchStatus: false, key: "pi"},
      {text: "e", switchStatus: false, key: "e"},
      {text: "sqrt()", switchStatus: false, key: "sqrt"},
      {text: "x^2", switchStatus: false, key: "square"},
      {text: "x^y", switchStatus: false, key: "pwr"},
      {text: "cos(", switchStatus: false, key: "cos"},
      {text: "sin(", switchStatus: false, key: "sin"},
      {text: "tan(", switchStatus: false, key: "tan"},
    ],
  }

  componentDidMount() {
    console.log(this.props.buttonsArray)
    let buttonsArray = this.props.buttonsArray
    let dict = {}
    for (let i = 0; i < buttonsArray.length; i++) {
      for (let j = 0; j < buttonsArray[i].length; j++) {
        dict[buttonsArray[i][j]] = true
      }
    }
    this.setState({
      itemArray: this.state.itemArray.map(item => {
        if (item.key in dict) {
          item.switchStatus = true
        }
        return (item)
      })
    })
  }

  componentWillUnmount() {
    let buttonOnArray = this.state.itemArray.filter(item => item.switchStatus)
    buttonOnArray = buttonOnArray.map(item => item.key)
    let buttonCount = buttonOnArray.length
    let rowCount = floor(buttonCount / 5) + 1
    let buttonsPerRow = floor(buttonCount / rowCount)
    let rowsWithExtraCount = buttonCount % rowCount
    // console.log(buttonOnArray)
    // console.log(`buttonCount: ${buttonCount}; rowCount: ${rowCount}; buttonsPerRow: ${buttonsPerRow}; rowsWithExtraCount: ${rowsWithExtraCount}`)
    let tempButtonRowArray = []
    let newButtonsArray = []
    let startIndex = 0
    let endIndex = 0
    for (let i = 0; i < rowCount; i++) {
      if (rowsWithExtraCount > 0) {
        endIndex = startIndex + buttonsPerRow + 1
        rowsWithExtraCount -= 1
      } else {
        endIndex = startIndex + buttonsPerRow
      }
      newButtonsArray.push(buttonOnArray.slice(startIndex, endIndex))
      startIndex = endIndex
    }
    newButtonsArray.push([
      "openP", 
      "closeP", 
      "comma", 
      "shift",
    ])
    // console.log(newButtonsArray)
    this.props.newButtonArrayButtons(newButtonsArray)
  }

  onSwitchChange = (index) => () => {
    let newItemArray = this.state.itemArray
    newItemArray[index].switchStatus = ! newItemArray[index].switchStatus
    this.setState({
      itemArray:newItemArray
    })
  }

  renderItem = (item, index) => {
    return (renderSwitchItem({text: item.text, switchStatus: item.switchStatus, onValueChange:this.onSwitchChange(index)}))
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <List>
          {this.state.itemArray.map((item, index) => this.renderItem(item, index))}
        </List>
      </ScrollView>
      );
  }
}

// redux
const mapStateToProps = state => ({
  buttonsArray: state.buttons.buttonsArray
})

const mapDispatchToProps = {
  newButtonArrayButtons: newButtonArrayButtons,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedButtonsSelectScreen)

// export default AdvancedButtonsSelectScreen
