import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import commonStyles from '~helpers/commonStyles';

const ActivityScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>ActivityScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...commonStyles.screen,
  },
});

export default ActivityScreen;
