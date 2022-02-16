import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Iconer from '~helpers/Iconer';
import commonStyles, {g} from '~helpers/commonStyles';

// TODO: Under construction

const TagsContainer = () => {
  return (
    <View style={styles.tagsContainer}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{}}
        style={{
          marginHorizontal: 3,
        }}>
        <View style={styles.tagBox}>
          <Iconer.MaterialCommunityIcons
            name={'television-classic'}
            size={16}
            color={'#333'}
            style={{marginRight: 6}}
          />
          <Text style={styles.tagText}>IGTV</Text>
        </View>
        <View style={styles.tagBox}>
          <Iconer.FontAwesome5 name={'shopping-bag'} size={13} color={'#333'} style={{marginRight: 6}} />
          <Text style={styles.tagText}>Shopping</Text>
        </View>
        <View style={styles.tagBox}>
          <Iconer.FontAwesome name={'heart'} size={13} color={'#333'} style={{marginRight: 6}} />
          <Text style={styles.tagText}>Well-being</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Architecture</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Decor</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Art</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Food</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Style</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>TV & Movies</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Humor</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>DIY</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Music</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Beauty</Text>
        </View>
        <View style={styles.tagBox}>
          <Text style={styles.tagText}>Sports</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    ...commonStyles.rowCenter,
    height: 36,
    backgroundColor: g.searchTagsContainerBg,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tagBox: {
    ...commonStyles.rowCenter,
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    marginHorizontal: 3,
    height: 28,
    paddingHorizontal: 16,
  },
  tagText: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'sans-serif-medium',
  },
});

export default TagsContainer;
