import React, {useCallback, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import navContext from '~state/NavContext';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import commonStyles from '~helpers/commonStyles';

const ProfileScreen = ({route, navigation}) => {
  const nav = useContext(navContext);
  const isFocused = useIsFocused();

  useFocusEffect(
    useCallback(() => {
      nav.setProfileMenuSwipeEnabled(true);
      return () => {
        nav.setProfileMenuSwipeEnabled(false);
      };
    }, [nav]),
  );

  return (
    <View style={styles.screen}>
      <Text>ProfileScreen</Text>
      {/* <View style={{flexDirection: 'row', height: 100}}>
        <GHScrollView horizontal style={{backgroundColor: 'lightgrey'}}>
          {[...Array(5)].map((value, index, array) => (
            <View key={index} style={{width: 150, backgroundColor: 'pink', margin: 2, padding: 2, borderWidth: 1}}>
              <Text>Scroll View</Text>
            </View>
          ))}
        </GHScrollView>
      </View>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...commonStyles.screen,
  },
});

export default ProfileScreen;
