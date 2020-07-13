import * as React from 'react';
import {Text, Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import { AppColors } from '../Design/Colors';
import Tabs from './Tabs';
import TabNavigatorHeader from './TabNavigatorHeader';
import HistoryScreen from '../Screens/HistoryScreen';
import MainScreen from '../Screens/MainScreen';
import ConstantsScreen from '../Screens/ConstantsScreen';
import AddConstantScreen from '../Screens/ConstantsSubScreens/AddConstantScreen';
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
                    <Button 
                        title="new"
                        onPress={() => {
                            console.log("now")
                            navigation.navigate("AddConstant")
                        }}
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
