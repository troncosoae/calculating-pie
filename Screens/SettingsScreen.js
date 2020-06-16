import React from 'react'
import { View, StyleSheet, Button, Alert, Text, SectionList } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import { AppColors, TextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import { newButtonArrayButtons } from '../Redux/buttonsActions';
import { setAngleType } from '../Redux/mainActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
  item: {
    backgroundColor: AppColors.background,
    padding: 15,
  },
  header: {
    backgroundColor: AppColors.background,
    padding: 10,
  },
  itemText: {
    color: TextColors.textInput,
    fontSize: FontSizes.settingItem,
  },
  headerText: {
    color: TextColors.textInput,
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


class SettingsScreen extends React.Component {

  state = {
    data: [
      {
        title: "buttons",
        data: [
          {text: "new", onPress: ()=> {
            this.props.newButtonArrayButtons(newButtonsArray)
          }}, 
          {text: "default", onPress: ()=> {
            this.props.newButtonArrayButtons(defaultButtonsArray)
          }}, 
        ]
      },
      {
        title: "buttons",
        data: [
          {text: "deg", onPress: ()=> {
            this.props.setAngleType("deg")
          }}, 
          {text: "grad", onPress: ()=> {
            this.props.setAngleType("grad")
          }}, 
          {text: "rad", onPress: ()=> {
            this.props.setAngleType("rad")
          }}, 
        ]
      },
    ]
  }

  renderItem = ({item: item}) => (
    <View style={styles.item}>
        <TouchableOpacity style={styles.itemText} 
        onPress={item.onPress}>
          <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
    </View>
  )

  renderHeader = ({ section: { title } }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
  
  render() {
    return (
        <View style={styles.container}>
          <SectionList
            sections={this.state.data}
            keyExtractor={(item, index) => item + index}
            renderItem={this.renderItem}
            renderSectionHeader={this.renderHeader}
          />
        </View>
      );
  }
}

// redux
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  newButtonArrayButtons: newButtonArrayButtons,
  setAngleType: setAngleType,
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
