import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';

import { iconColors, AppColors } from '../Design/Colors'

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: AppColors.navigationHeaderBackground,
      paddingTop: Constants.statusBarHeight + 5,
    },
    rowDirection: {
      flexDirection: 'row',
    },
    padding: {
        paddingVertical: 5,
    },
    paddingIcons: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    flexStart: {
        flex: 1,
        justifyContent: 'flex-start', 
        paddingLeft: 15,
    },
    flexEnd: {
        flex: 1,
        justifyContent: 'flex-end', 
        paddingRight: 15,
    }
})

function TabNavigatorHeader({ state, descriptors, navigation, position }) {
    return (
        <View style={[styles.container, styles.padding]}>
            <View style={[styles.flexStart, styles.rowDirection]}>
                <Icon 
                    name='calculator-variant'
                    style={styles.paddingIcons}
                    type='material-community'
                    color={state.index == 0 ? iconColors.colorOn : iconColors.colorNeutral}
                    onPress={()=>{
                        Keyboard.dismiss()
                        navigation.navigate("Main")
                    }}
                />
                <Icon 
                    name='ios-list-box'
                    style={styles.paddingIcons}
                    type='ionicon'
                    color={state.index == 1 ? iconColors.colorOn : iconColors.colorNeutral}
                    onPress={()=>{
                        navigation.navigate("History")
                    }}
                />
            </View>
            <View style={[styles.flexEnd, styles.rowDirection]}>
                <Icon 
                    name='question'
                    style={styles.paddingIcons}
                    type='font-awesome'
                    color={iconColors.colorExtras}
                    onPress={()=>{}}
                />
                <Icon 
                    name='pi-box'
                    style={styles.paddingIcons}
                    type='material-community'
                    color={iconColors.colorExtras}
                    onPress={()=>{}}
                />
                <Icon 
                    name='book-open-page-variant'
                    style={styles.paddingIcons}
                    type='material-community'
                    color={iconColors.colorExtras}
                    onPress={()=>{console.log(state)}}
                />
                <Icon 
                    name='settings'
                    style={styles.paddingIcons}
                    type='material-icons'
                    color={iconColors.colorExtras}
                    onPress={()=>{
                        navigation.navigate("Settings")
                    }}
                />
            </View>
        </View>
    )
}


export default TabNavigatorHeader