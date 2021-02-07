import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';

import Tabs from './Tabs';
import MainStack from './MainStack';
import { clearHistory, setAngleType } from '../Redux/mainActions';
import { setSettingsAngle } from '../Redux/settingsActions';
import { AppColors } from '../Design/Colors';


class MountWrapper extends React.Component {

    componentDidMount() {
        // console.log(this.props.angleType)
        // console.log(this.props.parser)
        this.props.setAngleType(this.props.angleType)
    }
  
    render(){
        return (
            <SafeAreaView style={styles.container}>
            <NavigationContainer>    
                <MainStack />
            </NavigationContainer>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppColors.navigationHeaderBackground
    },
  });
  

const mapStateToProps = state => ({
  angleType: state.settings.angleType,
  parser: state.main.parser,
  stateTotal: state
})

const mapDispatchToProps = {
    clearHistory: clearHistory,
    setSettingsAngle: setSettingsAngle,
    setAngleType: setAngleType,
}

export default connect(mapStateToProps, mapDispatchToProps)(MountWrapper)
