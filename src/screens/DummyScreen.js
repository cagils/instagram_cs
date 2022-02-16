import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '~components/Button';
import commonStyles from '~helpers/commonStyles';

const DummyScreen = ({route, navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>DummyScreen</Text>
      <Button
        title={'Push New Dummy'}
        color={'green'}
        onPress={() => {
          navigation.push('DummyScreen');
        }}
      />
      <Button
        title={'Push New Not A Dummy'}
        color={'pink'}
        onPress={() => {
          navigation.push('NotADummyScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...commonStyles.screen,
  },
});

export default DummyScreen;
