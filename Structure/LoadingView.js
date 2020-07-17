import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { AppColors } from '../Design/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.background,
  },
});

export default class LoadingView extends React.Component {

    render() {
        return(<View style={styles.container}/>)
    }
}