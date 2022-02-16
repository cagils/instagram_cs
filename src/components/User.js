import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

import commonStyles, {g} from '~helpers/commonStyles';
import Iconer from '~helpers/Iconer';

const User = ({data = {}, inPost = false, style = {}}) => {
  const noStory = !data.status.has_story;
  const watched = data.status.story_seen;
  const hasProfileImage = data.profile_pic_url !== '';
  const iconSize = 50 * (inPost ? 30 / 56 : 1);
  const styles = getStyles({inPost, noStory, watched});

  return (
    <View style={style}>
      <View style={styles.userCircleHalo}>
        <View style={styles.userCircle}>
          {hasProfileImage ? (
            <ImageBackground style={styles.imageBackground} resizeMode="cover" source={{uri: data.profile_pic_url}}>
              <View style={styles.userCircleBorder} />
            </ImageBackground>
          ) : (
            <View style={styles.userCircleBorder}>
              <Iconer.FontAwesome5 style={styles.icon} solid name={'user'} size={iconSize} color={'white'} />
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const getStyles = ({inPost, noStory, watched}) => {
  const haloSize = inPost ? 36 : 64;
  const circleSize = inPost ? 30 : 56;
  const watchedBorderWidth = inPost ? 0 : 1;
  const activeBorderWidth = inPost ? 1.6 : 2;
  const haloBorderWidth = noStory ? 0 : watched ? watchedBorderWidth : activeBorderWidth;
  const haloColor = watched ? g.storyBorderColorWatched : g.storyBorderColorActive;
  const circleBorderWidth = inPost ? 1 : 1.2;
  const vectorIconMarginTop = 20 * (inPost ? 30 / 56 : 1);

  return StyleSheet.create({
    userCircleHalo: {
      ...commonStyles.flexCenter,
      width: haloSize,
      height: haloSize,
      borderRadius: haloSize / 2,
      borderWidth: haloBorderWidth,
      borderColor: haloColor,
    },
    userCircle: {
      backgroundColor: g.noUserPictureColor,
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      overflow: 'hidden',
    },
    userCircleBorder: {
      ...commonStyles.flexCenter,
      flex: 1,
      borderRadius: circleSize / 2,
      borderColor: g.userCircleBorderColor,
      borderWidth: circleBorderWidth,
      overflow: 'hidden',
    },
    imageBackground: {
      width: '100%',
      height: '100%',
    },
    icon: {
      marginTop: vectorIconMarginTop,
    },
  });
};

export default User;
