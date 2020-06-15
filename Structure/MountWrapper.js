import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './Tabs';
import MainStack from './MainStack';


class MountWrapper extends React.Component {
  
    render(){
        return (
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        )
    }
}


export default MountWrapper
