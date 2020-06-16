import React from 'react'
import { View, StyleSheet, Alert, SectionList } from 'react-native';
import { List, Toast, Content, Text, Button, Container, Root } from 'native-base';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import { AppColors, TextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import { renderHeader, renderPressItem, renderNavigateItem } from '../Components/Settings/listItems';
import { newButtonArrayButtons } from '../Redux/buttonsActions';
import { setAngleType } from '../Redux/mainActions';
import { forEach } from 'mathjs';

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

const newButtonsArray = [
  ['sqrt', 'square', 'pi', 'e'],
  ['openP', 'closeP', 'comma'],
  ['cos', 'sin', 'tan', 'shift'],
]

const defaultButtonsArray = [
  ['sqrt', 'square', 'pi', 'e', 'log10'],
  ['openP', 'closeP', 'pwr', 'log', 'comma'],
  ['cos', 'sin', 'tan', 'shift']
]



// state = {
//   data: [
//     {
//       title: "buttons",
//       data: [
//         {text: "new", onPress: ()=> {
//           this.props.newButtonArrayButtons(newButtonsArray)
//         }}, 
//         {text: "default", onPress: ()=> {
//           this.props.newButtonArrayButtons(defaultButtonsArray)
//         }}, 
//       ]
//     },
//     {
//       title: "angles",
//       data: [
//         {text: "deg", onPress: ()=> {
//           this.props.setAngleType("deg")
//         }}, 
//         {text: "grad", onPress: ()=> {
//           this.props.setAngleType("grad")
//         }}, 
//         {text: "rad", onPress: ()=> {
//           this.props.setAngleType("rad")
//         }}, 
//       ]
//     },
//     {
//       title: "about",
//       data: [
//         {text: "about", onPress: ()=> {
//           this.props.navigation.navigate("About")
//         }}, 
//       ]
//     },
//   ]
// }

const HEADER = "header"
const PRESS_ITEM = "pressItem"
const NAVIGATE_ITEM = "navigateItem"


class SettingsScreen extends React.Component {

  state = {
    itemArray: [
      {type: HEADER, params: {text: "Advanced Buttons"}},
      {type: PRESS_ITEM, params: {text: "New", onPress: ()=>{this.props.newButtonArrayButtons(newButtonsArray)}}},
      {type: PRESS_ITEM, params: {text: "Default", onPress: ()=>{this.props.newButtonArrayButtons(defaultButtonsArray)}}},
      {type: HEADER, params: {text: "Angle Configuration"}},
      {type: PRESS_ITEM, params: {text: "rad", onPress: () => {
        this.props.setAngleType("rad")
        Toast.show({text: 'angles: rad', buttonText: 'Ok', style:{backgroundColor: AppColors.toast}})
      }}},
      {type: PRESS_ITEM, params: {text: "deg", onPress: ()=>{
        this.props.setAngleType("deg")
        Toast.show({text: 'angles: deg', buttonText: 'Ok', style:{backgroundColor: AppColors.toast}})
      }}},
      {type: PRESS_ITEM, params: {text: "grad", onPress: ()=>{
        this.props.setAngleType("grad") 
        Toast.show({text: 'angles: grad', buttonText: 'Ok', style:{backgroundColor: AppColors.toast}})
      }}},
      {type: HEADER, params: {text: "Others"}},
      {type: NAVIGATE_ITEM, params: {text: "About", navigate: this.props.navigation.navigate, screenName: "About"}},
    ],
  }

  renderItem = (item) => {
    switch(item.type) {
      case HEADER: 
        return renderHeader({text: item.params.text})
      case PRESS_ITEM: 
        return renderPressItem({text: item.params.text, onPress: item.params.onPress})
      case NAVIGATE_ITEM: 
        return renderNavigateItem({text: item.params.text, navigate: item.params.navigate, screenName: item.params.screenName})
      default: 
        return renderPressItem({text: item.params.text})
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
      <List>
        {this.state.itemArray.map(item => this.renderItem(item))}
      </List>
      <Root/>
      </View> 
      );
  }
}


/*
<View style={styles.container}>
<List>
  {this.state.itemArray.map(item => this.renderItem(item))}
</List>

</View> 
*/

// redux
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  newButtonArrayButtons: newButtonArrayButtons,
  setAngleType: setAngleType,
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
