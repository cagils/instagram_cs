import React, {useCallback, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import navContext from '~state/NavContext';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import commonStyles from '~helpers/commonStyles';

const MessagesScreen = ({navigation, route}) => {
  const nav = useContext(navContext);
  const isFocused = useIsFocused();

  useFocusEffect(
    useCallback(() => {
      nav.setMainSwipeEnabled(true);
      return () => {
        nav.setMainSwipeEnabled(false);
      };
    }, [nav]),
  );

  return (
    <View style={styles.screen}>
      <Text>MessagesScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...commonStyles.screen,
  },
});

export default MessagesScreen;
