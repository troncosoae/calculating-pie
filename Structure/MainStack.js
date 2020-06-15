import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AppColors } from '../Design/Colors';
import Tabs from './Tabs';
import TabNavigatorHeader from './TabNavigatorHeader';
import HistoryScreen from '../Screens/HistoryScreen'
import MainScreen from '../Screens/MainScreen'
import SettingsScreen from '../Screens/SettingsScreen';
import AboutScreen from '../Screens/AboutScreen';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
            name="Main" 
            component={Tabs} 
            options={{
                headerTitle: 'Main',
                headerStyle: {
                    backgroundColor: AppColors.background,
                },
                headerTintColor: AppColors.notQuiteWhite,
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{ 
            headerTitle: 'Settings',
            headerStyle: {
                backgroundColor: AppColors.background,
            },
            headerTintColor: AppColors.notQuiteWhite,
            }}
        />
        <Stack.Screen 
            name="About" 
            component={AboutScreen} 
            options={{ 
            headerTitle: 'About',
            headerStyle: {
                backgroundColor: AppColors.background,
            },
            headerTintColor: AppColors.notQuiteWhite,
            }}
        />
    </Stack.Navigator>
  );
}

export default MainStack
