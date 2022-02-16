import React, {useCallback, useContext, useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import navContext from '~state/NavContext';
import {useHeaderHeight} from '@react-navigation/stack';
import StoriesBar from '~components/StoriesBar';
import PostsFeed from '~components/PostsFeed';
import commonStyles from '~helpers/commonStyles';

const HomeScreen = ({route, navigation}) => {
  const headerHeight = useHeaderHeight();

  const params = route.params;
  const insets = useSafeAreaInsets();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight: () => <Button onPress={() => setCount((c) => c + 1)} title="Update count" />,
      // header: () => null,
    });
  }, [navigation]);

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
    <View
      // onStartShouldSetResponder={() => true}
      style={styles.screen}>
      <ScrollView
        // nestedScrollEnabled={true}
        style={{backgroundColor: 'white'}}
        contentContainerStyle={{}}>
        <StoriesBar />
        <PostsFeed />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...commonStyles.screen,
  },
});

export default HomeScreen;
