import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';

import User from '~components/User';
import commonStyles, {g} from '~helpers/commonStyles';

import {getSelfStoryCircle, getStoryCircles} from '~data/api_from_db';

const StoriesBar = () => {
  const [stories, setStories] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setStories(getStoryCircles());
      return () => {};
    }, []),
  );

  return (
    <View style={styles.storiesContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={commonStyles.flexCenter}>
        <View style={styles.story}>
          <User self data={getSelfStoryCircle()} />
          <View style={styles.userName}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.userNameText}>
              {'Your Story'}
            </Text>
          </View>
        </View>
        {stories.map((story, i) => (
          <View key={i} style={styles.story}>
            <User data={story} />
            <View style={styles.userName}>
              <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.userNameText}>
                {story.username}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    ...commonStyles.rowCenter,
    height: 96,
    borderBottomColor: '#dddddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  selfStory: {
    marginLeft: 3,
  },
  story: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 82,
    marginTop: 3,
  },
  userName: {
    ...commonStyles.flexCenter,
    marginHorizontal: 3,
  },
  userNameText: {
    marginTop: 2,
    fontSize: g.storyFontSize,
    fontFamily: g.normalFont,
    color: g.fontColor,
  },
});

export default StoriesBar;
