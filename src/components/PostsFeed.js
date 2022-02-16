import React, {useCallback, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';
import Post from '~components/Post';

import {getPosts} from '~data/api_from_db';

const PostsFeed = () => {
  const [postData, setPostData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setPostData(getPosts());
      return () => {};
    }, []),
  );

  return (
    <View style={{}}>
      <ScrollView style={{}} contentContainerStyle={styles.scrollContainer}>
        {postData.map((data) => (
          <Post key={data.id} data={data} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
  },
});

export default PostsFeed;
