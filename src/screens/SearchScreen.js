import React from 'react';
import {StyleSheet, View} from 'react-native';
import commonStyles from '~helpers/commonStyles';
import TagsContainer from '~components/TagsContainer';
import SearchGrid from '~components/SearchGrid';
import Button from '~components/Button';

const SearchScreen = ({route, navigation}) => {
  return (
    <View style={styles.screen}>
      <Button title={'Push It !'} onPress={() => navigation.push('ContainerNav')} color={'blue'} />
      <TagsContainer />
      <SearchGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...commonStyles.screen,
  },
});

export default SearchScreen;
