import React from 'react';
import {ScrollView, StyleSheet, useWindowDimensions, View} from 'react-native';

import commonStyles from '~helpers/commonStyles';

const sp = 2;

// TODO: no colors and styles fixed yet

const SearchGrid = () => {
  const w = useWindowDimensions().width;

  const size = (w - 2 * sp) / 3.0;

  const sizes = {
    gridItem: {
      width: size,
      height: size,
    },
    gridItemBig: {
      width: size * 2 + sp,
      height: size * 2 + sp,
    },
    gridColItemLong: {
      width: size,
      height: size * 2 + sp,
    },
  };

  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={{width: '100%'}}>
      <View style={styles.grid}>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
        <View style={styles.gridRow}>
          <View>
            <View style={[styles.gridItem, sizes.gridItem]} />
            <View style={[styles.gridItem, sizes.gridItem]} />
          </View>
          <View style={[styles.gridItemBig, sizes.gridItemBig]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItemBig, sizes.gridItemBig]} />
          <View>
            <View style={[styles.gridItem, sizes.gridItem]} />
            <View style={[styles.gridItem, sizes.gridItem]} />
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridColItemLong, sizes.gridColItemLong]} />
          <View>
            <View style={styles.gridRow}>
              <View style={[styles.gridItem, sizes.gridItem]} />
              <View style={[styles.gridItem, sizes.gridItem]} />
            </View>
            <View style={styles.gridRow}>
              <View style={[styles.gridItem, sizes.gridItem]} />
              <View style={[styles.gridItem, sizes.gridItem]} />
            </View>
          </View>
        </View>
        <View style={styles.gridRow}>
          <View>
            <View style={styles.gridRow}>
              <View style={[styles.gridItem, sizes.gridItem]} />
              <View style={[styles.gridItem, sizes.gridItem]} />
            </View>
            <View style={styles.gridRow}>
              <View style={[styles.gridItem, sizes.gridItem]} />
              <View style={[styles.gridItem, sizes.gridItem]} />
            </View>
          </View>
          <View style={[styles.gridColItemLong, sizes.gridColItemLong]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
        <View style={styles.gridRow}>
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
          <View style={[styles.gridItem, sizes.gridItem]} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  gridRow: {
    alignSelf: 'center',
    ...commonStyles.rowCenter,
  },
  gridItem: {
    backgroundColor: 'gray',
    marginRight: sp,
    marginBottom: sp,
  },
  gridItemBig: {
    backgroundColor: 'brown',
    marginRight: sp,
    marginBottom: sp,
  },
  gridColItemLong: {
    backgroundColor: 'orange',
    marginRight: sp,
    marginBottom: sp,
  },
});

export default SearchGrid;
