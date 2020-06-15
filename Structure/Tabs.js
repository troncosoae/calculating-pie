import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import Toast from 'react-native-simple-toast';

import TabNavigatorHeader from './TabNavigatorHeader'
import HistoryScreen from '../Screens/HistoryScreen'
import MainScreen from '../Screens/MainScreen'

const Tab = createMaterialTopTabNavigator();

class Tabs extends React.Component {
  render() {
    return(
      <Tab.Navigator 
        tabBar={props =><TabNavigatorHeader {...props}/>}
      >
          <Tab.Screen name="Main" component={MainScreen} />
          <Tab.Screen name="History" component={HistoryScreen} />
      </Tab.Navigator>
    )
  }
}

// function Tabs(stackNavigation) {
//   return (
//     <Tab.Navigator tabBar={props =><TabNavigatorHeader {...props} stackNavigation={stackNavigation}/>}>
//         <Tab.Screen name="Main" component={CalculatorScreen} />
//         <Tab.Screen name="History" component={HistoryScreen} />
//     </Tab.Navigator>
//   );
// }

export default Tabs