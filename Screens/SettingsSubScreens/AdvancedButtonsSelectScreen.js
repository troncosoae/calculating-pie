import React from 'react'
import { View, StyleSheet, Alert, SectionList } from 'react-native';
import { List, Toast, Content, Text, Button, Container, Root } from 'native-base';
import { connect } from 'react-redux';

import { AppColors, TextColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts';
import { renderHeader, renderPressItem, renderNavigateItem, renderSwitchItem } from '../../Components/Settings/listItems';
import { newButtonArrayButtons } from '../../Redux/buttonsActions';

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
      {type: SWITCH_ITEM, params: {text: "switch", onSwitch: {}}},
    ],
  }

  renderItem = (item) => {
    return (renderSwitchItem({text: item.params.text, onSwitch: {}}))
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

// redux
const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  newButtonArrayButtons: newButtonArrayButtons,
}

export default connect(mapStateToProps, mapDispatchToProps)(AdvancedButtonsSelectScreen)

// export default AdvancedButtonsSelectScreen
