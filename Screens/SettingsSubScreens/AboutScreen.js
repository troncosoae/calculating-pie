import React from 'react'
import { View, StyleSheet, Button, Alert, Text } from 'react-native';

import { AppColors } from '../../Design/Colors';
import { FontSizes } from '../../Design/Fonts'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: AppColors.background,
      padding: 15,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
    titles: {
      color: AppColors.notQuiteWhite,
      fontSize: FontSizes.aboutTitles,
      justifyContent: 'flex-start',
      paddingTop: 20,
      paddingBottom: 10,
    },
    body: {
      color: AppColors.notQuiteWhite,
      fontSize: FontSizes.aboutBody,
      justifyContent: 'flex-start',
    },
  });

class AboutScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titles}>
                    About Eulers Calculator
                </Text>
                <Text style={styles.body}>
                    {"Calculator app meant to have all the functions a scientific calculator has and more. Define variables and functions. Use units and universal constants."}
                </Text>
                <Text style={styles.titles}>
                    Feedback
                </Text>
                <Text style={styles.body}>
                    {"Comments and suggestions are always welcome. Please add a review!"}
                </Text>
                <Text style={styles.titles}>
                    To explore new functions...
                </Text>
                <Text style={styles.body}>
                    {"Most functionalities of the app rely on the https://mathjs.org/ library. For more functionalities or information, check it out!"}
                </Text>
            </View>
        )
    }
}

export default AboutScreen
