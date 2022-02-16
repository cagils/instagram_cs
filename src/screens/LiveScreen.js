import React, {useCallback, useContext} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import navContext from '~state/NavContext';
import commonStyles from '~helpers/commonStyles';

const LiveScreen = () => {
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
      {isFocused ? <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} /> : <StatusBar />}
      <Text style={{color: '#848484'}}>LiveScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...commonStyles.screenLive,
  },
});

export default LiveScreen;
