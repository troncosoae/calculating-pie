import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';

import Tabs from './Tabs';
import MainStack from './MainStack';
import { clearHistory } from '../Redux/mainActions';
import { setSettingsAngle } from '../Redux/settingsActions';


class MountWrapper extends React.Component {

    componentDidMount() {
        this.props.clearHistory()
        this.props.setSettingsAngle("rad")
    }
  
    render(){
        return (
            <NavigationContainer>
                <MainStack />
            </NavigationContainer>
        )
    }
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = {
    clearHistory: clearHistory,
    setSettingsAngle: setSettingsAngle,
}

export default connect(mapStateToProps, mapDispatchToProps)(MountWrapper)
