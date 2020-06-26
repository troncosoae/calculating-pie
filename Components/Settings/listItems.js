import React from 'react'
import { View, StyleSheet, Button, Alert, SectionList, TouchableOpacity } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon, Picker, Switch } from 'native-base';

import { AppColors, TextColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts';

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

export const renderHeader = ({text}) => (
    <ListItem itemDivider style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
    </ListItem>
)

export const renderPressItem = ({text, onPress}) => (
    <ListItem style={styles.item} onPress={onPress}>
        <Text style={styles.itemText}>{text}</Text>
    </ListItem>
)

export const renderNavigateItem = ({text, navigate, screenName}) => (
    <ListItem style={styles.item} onPress={()=>{navigate(screenName)}}>
        <Left><Text style={styles.itemText}>{text}</Text></Left>
        <Right><Icon name="arrow-forward" /></Right>
    </ListItem>
)

export const renderSwitchItem = ({text, onSwitch}) => (
    <ListItem style={styles.item}>
        <Left><Text style={styles.itemText}>{text}</Text></Left>
        <Right><Switch value={false} /></Right>
    </ListItem>
)
