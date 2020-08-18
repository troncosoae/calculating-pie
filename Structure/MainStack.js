import * as React from 'react';
import {Text, Button} from 'react-native'
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';

import { AppColors } from '../Design/Colors';
import Tabs from './Tabs';
import TabNavigatorHeader from './TabNavigatorHeader';
import HistoryScreen from '../Screens/HistoryScreen';
import MainScreen from '../Screens/MainScreen';
import ConstantsScreen from '../Screens/ConstantsScreen';
import AddConstantScreen from '../Screens/ConstantsSubScreens/AddConstantScreen';
import CommandsScreen from '../Screens/CommandsScreen';
import AddCommandScreen from '../Screens/CommandsSubScreens/AddCommandScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/SettingsSubScreens/AboutScreen';
import AdvancedButtonsSelectScreen from '../Screens/SettingsSubScreens/AdvancedButtonsSelectScreen';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator 
    initialRouteName="Main"
    screenOptions={{
        headerTintColor: AppColors.notQuiteWhite,
        headerStyle: { 
            backgroundColor: AppColors.navigationHeaderBackground,
            shadowColor: 'transparent',
        },
      }}
    >
        <Stack.Screen 
            name="Main" 
            component={Tabs} 
            options={{
                headerTitle: 'Main',
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="Constants" 
            component={ConstantsScreen} 
            options={({navigation}) => ({
                headerTitle: 'Constants',
                headerRight: () => (
                    <Icon 
                        name='library-add'
                        type='materialicons'
                        style={{paddingRight:20}}
                        color={AppColors.inactiveTintColor}
                        onPress={()=>{navigation.navigate("AddConstant")}}
                    />
                ),
            })}
        />
        <Stack.Screen 
            name="AddConstant" 
            component={AddConstantScreen} 
            options={{ 
                headerTitle: 'Add Constant',
            }}
        />
        <Stack.Screen 
            name="Commands" 
            component={CommandsScreen} 
            options={({navigation}) => ({
                headerTitle: 'Commands',
                headerRight: () => (
                    <Icon 
                        name='library-add'
                        type='materialicons'
                        style={{paddingRight:20}}
                        color={AppColors.inactiveTintColor}
                        onPress={()=>{navigation.navigate("AddCommand")}}
                    />
                ),
            })}
        />
        <Stack.Screen 
            name="AddCommand" 
            component={AddCommandScreen} 
            options={{ 
                headerTitle: 'Add Command',
            }}
        />
        <Stack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{ 
                headerTitle: 'Settings',
            }}
        />
        <Stack.Screen 
            name="About" 
            component={AboutScreen} 
            options={{ 
                headerTitle: 'About',
            }}
        />
        <Stack.Screen 
            name="AdvancedButtonsSelect" 
            component={AdvancedButtonsSelectScreen} 
            options={{ 
                headerTitle: 'Advanced Buttons Select',
            }}
        />
    </Stack.Navigator>
  );
}

export default MainStack
