import React from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import { AppColors } from '../Design/Colors';
import BottomInput from '../Components/History/BottomInput';
import InputRow from '../Components/History/InputRow';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.background,
    },
    keyboardAvoidStyle: {
        position: 'absolute',
        left: 0, 
        right: 0, 
        bottom: 0,
    },
    aligning: {
        justifyContent: 'center',
        flex: 1,
    },
});


class HistoryScreen extends React.Component {

    state = {
        showClear: false,
        waitingForStop: false,
    }

    onScroll = ({nativeEvent}) => {
        if (nativeEvent.contentOffset.y < -90 && !this.state.waitingForStop && !this.state.showClear) {
            console.log("show button")
            this.setState({waitingForStop: true})
            this.setState({showClear: true})
        } else if (nativeEvent.contentOffset.y > 35 && !this.state.waitingForStop && this.state.showClear) {
            console.log("hide button")
            this.setState({waitingForStop: true})
            this.setState({showClear: false})
        }
    }

    renderItem = ({item, index}) => {
        // if (item.type === Button) {
        //     if (this.state.showClear) {
        //         return item
        //     }
        //     return <View style={{height:35}}/>
        // }
        return <InputRow {...item} isAns={index === this.props.ansIndex}/>
    }
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.aligning}>
                    <FlatList
                        renderItem={this.renderItem} 
                        keyExtractor={(item, index) => index.toString()}
                        inverted={true}
                        onScroll={this.onScroll}
                        onMomentumScrollEnd={()=>{this.setState({waitingForStop: false})}}
                        keyboardShouldPersistTaps="always"
                        data={[
                            // <Button title="Clear History"/>,
                            ...this.props.inputsArray
                        ]}
                    />
                </View>
                <BottomInput />
                <KeyboardSpacer />
            </View>
        );
    }
}

// redux
const mapStateToProps = state => ({
    inputsArray: state.main.inputsArray,
    ansIndex: state.main.ansIndex,
})

const mapDispatchToProps = {
    // evaluateMain: evaluateMain,
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen)
