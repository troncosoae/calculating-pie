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
                    About Calculator-Nut
                </Text>
                <Text style={styles.body}>
                    {"This app was created because, as a team, we think it doesn't make sense to have such a powerfull computer in our hands all day and not have access to a good calculator for free. This one of course doesn't come close to meeting the standards either, but we are giving it our best to get as close as possible. "}
                </Text>
                <Text style={styles.titles}>
                    Plan for the future
                </Text>
                <Text style={styles.body}>
                    {"In the future we plan on expanding the functionalities of the advanced section, such as a choice between rad/deg, derivatives and integrals. We also intend to include a cursor in the main section and a few choices of colors. \n"}
                    {"Unfortunately, we will have to restrict some of these functionalities to premium users (in app purchases) because we intend to recover the initial investment. "}
                </Text>
                <Text style={styles.titles}>
                    Finally...
                </Text>
                <Text style={styles.body}>
                    {"If you have any opinions, suggestions or have detected a bug somewhere please post a comment. Like we said, our interest is to improve this calculator so that one day we actually can meet the expected standards. "}
                </Text>
            </View>
        )
    }
}

export default AboutScreen
