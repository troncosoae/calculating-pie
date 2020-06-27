import React from 'react'
import { View, StyleSheet, Alert, SectionList, ScrollView } from 'react-native';
import { List, Toast, Content, Text, Button, Container, Root } from 'native-base';
import { connect } from 'react-redux';

import { AppColors, TextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import { renderHeader, renderPressItem, renderNavigateItem, renderSwitchItem, renderPressTickItem } from '../Components/Settings/listItems';
import { newButtonArrayButtons } from '../Redux/buttonsActions';
import { setAngleType } from '../Redux/mainActions';
import { setSettingsAngle } from '../Redux/settingsActions';
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

const HEADER = "header"
const PRESS_ITEM = "pressItem"
const PRESS_TICK_ITEM = "pressTickItem"
const NAVIGATE_ITEM = "navigateItem"
const SWITCH_ITEM = "switchItem"


class SettingsScreen extends React.Component {

  state = {
    angleType: 'rad',
    itemArray: [
      {type: HEADER, params: {text: "Advanced Buttons"}},
      {type: NAVIGATE_ITEM, params: {text: "Advanced Button Select", navigate: this.props.navigation.navigate, screenName: "AdvancedButtonsSelect"}},
      {type: HEADER, params: {text: "Angle Configuration"}},
      {type: PRESS_TICK_ITEM, params: {text: "rad", isActive:() => (this.props.angleType === 'rad'), onPress: () => {
        this.setAngleType("rad")
      }}},
      {type: PRESS_TICK_ITEM, params: {text: "deg", isActive:() => (this.props.angleType === 'deg'), onPress: ()=>{
        this.setAngleType("deg")
      }}},
      {type: PRESS_TICK_ITEM, params: {text: "grad", isActive:() => (this.props.angleType === 'grad'), onPress: ()=>{
        this.setAngleType("grad") 
        // Toast.show({text: 'angles: grad', buttonText: 'Ok', style:{backgroundColor: AppColors.toast}})
      }}},
      {type: HEADER, params: {text: "Others"}},
      {type: NAVIGATE_ITEM, params: {text: "About", navigate: this.props.navigation.navigate, screenName: "About"}},
    ],
  }

  setAngleType(angleType) {
    console.log(this.state.angleType)
    this.props.setAngleType(angleType)
    this.props.setSettingsAngle(angleType)
    this.setState({
      angleType: angleType
    })
  }

  renderItem = (item) => {
    switch(item.type) {
      case HEADER: 
        return renderHeader(item.params)
      case PRESS_ITEM: 
        return renderPressItem(item.params)
      case PRESS_TICK_ITEM: 
        return renderPressTickItem(item.params)
      case SWITCH_ITEM: 
        return renderSwitchItem(item.params)
      case NAVIGATE_ITEM: 
        return renderNavigateItem(item.params)
      default: 
        return renderPressItem(item.params)
    }
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
      <List>
        {this.state.itemArray.map(item => this.renderItem(item))}
      </List>
      </ScrollView> 
      );
  }
}

// redux
const mapStateToProps = state => ({
  angleType: state.settings.angleType
})

const mapDispatchToProps = {
  newButtonArrayButtons: newButtonArrayButtons,
  setAngleType: setAngleType,
  setSettingsAngle: setSettingsAngle,
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
