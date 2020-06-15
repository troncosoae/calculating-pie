import React from 'react'
import { View, StyleSheet, Button, Alert, Text, SectionList } from 'react-native';
import { connect } from 'react-redux';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

import { AppColors, TextColors } from '../Design/Colors';
import { FontSizes } from '../Design/Fonts';
import { newButtonArrayButtons } from '../Redux/buttonsActions'

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

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ text }) => (
  <View style={styles.item}>
      <TouchableOpacity style={styles.itemText}>
        <Text style={styles.itemText}>{text}</Text>
      </TouchableOpacity>
  </View>
);

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);


class SettingsScreen extends React.Component {

  renderItem = ({item: item}) => (
    <View style={styles.item}>
        <TouchableOpacity style={styles.itemText} 
        onPress={()=> {
          this.props.newButtonArrayButtons(newButtonsArray)
          }}>
          <Text style={styles.itemText}>{item}</Text>
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
            sections={DATA}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
