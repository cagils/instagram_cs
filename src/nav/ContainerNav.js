import React from 'react';
import {ScrollView, View} from 'react-native';

import PostsFeed from '~components/PostsFeed';

// TODO: Under Construction!

const ContainerNav = ({route, navigation}) => {
  return (
    <View
      // onStartShouldSetResponder={() => true}
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
      <ScrollView
        // nestedScrollEnabled={true}
        style={{backgroundColor: 'white'}}
        contentContainerStyle={{}}>
        <PostsFeed />
      </ScrollView>
    </View>
  );
};

export default ContainerNav;
