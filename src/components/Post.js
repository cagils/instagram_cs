import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

import Ago from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import {canonical} from 'javascript-time-ago/gradation';

import User from '~components/User';
import Iconer from '~helpers/Iconer';
import commonStyles, {g} from '~helpers/commonStyles';

Ago.addLocale(en);
const ago = new Ago('en-US');

const PostHeader = ({data}) => {
  const hasLocation = data.info.location !== '';
  // const separator = <Text> &#8226; </Text>;

  return (
    <View style={styles.postHeader}>
      <View style={styles.postUser}>
        <View style={styles.userCircle}>
          <User inPost data={data.user} />
          <View style={styles.userName}>
            <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.userNameText}>
              {data.user.username}
            </Text>
            {hasLocation && (
              <View style={styles.infoLine}>
                <Text style={styles.infoText}>{data.info.location}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
      <Iconer.Feather name={'more-vertical'} color={g.fontColor} size={20} />
    </View>
  );
};

const PostMedia = ({data}) => {
  return (
    <View style={styles.postMedia}>
      <ImageBackground
        style={[styles.imageBg, {aspectRatio: data.media.aspect_ratio}]}
        resizeMode={'cover'}
        source={{uri: data.media.url}}>
        <View />
      </ImageBackground>
    </View>
  );
};

const PostFooter = ({data}) => {
  const lineLimit = 2;
  const likeColor = data.status.is_liked ? g.likedColor : g.fontColor;
  const likeIcon = data.status.is_liked ? 'heart' : 'heart-o';
  const saveIcon = data.status.is_saved ? 'bookmark' : 'bookmark-o';
  const hasLikes = data.status.likes_count > 0;
  const hasCaption = data.info.caption.length > 0;
  const hasComments = data.status.comments_count > 0;

  const agoStyle = {
    gradation: canonical,
    flavour: ['long-convenient', 'long'],
    units: ['now', 'second', 'minute', 'hour', 'day', 'week', 'month', 'year'],
  };

  const agoTime = ago.format(new Date(data.info.timestamp), agoStyle);

  return (
    <View style={styles.postFooter}>
      <View style={styles.controls}>
        <Iconer.FontAwesome style={styles.iconLeft} name={likeIcon} size={25} color={likeColor} />
        <Iconer.Ionicons style={styles.iconLeft} name={'chatbubble-outline'} size={26} color={g.fontColor} />
        <Iconer.Ionicons style={styles.iconLeft} name={'paper-plane-outline'} size={26} color={g.fontColor} />
        <View style={styles.iconSeparator} />
        <Iconer.FontAwesome style={styles.iconRight} name={saveIcon} size={28} color={g.fontColor} />
      </View>
      {hasLikes && <Text style={styles.likeCountText}>{data.status.likes_count} likes</Text>}
      {hasCaption && (
        <Text
          // onTextLayout={onTextLayout}
          // ellipsizeMode={'tail'}
          // numberOfLines={lineLimit}
          style={styles.captionText}>
          <Text style={styles.captionUsernameText}>{data.user.username}</Text> {data.info.caption}
          {/*<Text style={styles.moreText}>... more</Text>*/}
        </Text>
      )}
      {hasComments && <Text style={styles.moreText}>View all {data.status.comments_count} comments</Text>}
      <Text style={styles.timestampText}>{agoTime}</Text>
    </View>
  );
};

const Post = ({data}) => {
  return (
    <View>
      <PostHeader data={data} />
      <PostMedia data={data} />
      <PostFooter data={data} />
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    ...commonStyles.rowCenter,
    height: 52,
    paddingHorizontal: 14,
  },
  postUser: {
    ...commonStyles.rowCenter,
    flex: 1,
  },
  userCircle: {
    ...commonStyles.rowCenter,
    marginTop: 0,
  },
  userName: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 8,
    marginRight: 12,
    flex: 1,
  },
  userNameText: {
    fontSize: g.postHeaderFontSize,
    fontFamily: g.boldFont,
    color: g.fontColor,
    textAlignVertical: 'center',
  },
  infoLine: {
    ...commonStyles.rowCenter,
  },
  infoText: {
    fontSize: g.postSubHeaderFontSize,
    fontFamily: g.normalFont,
    color: g.fontColor,
    textAlignVertical: 'center',
    lineHeight: 13,
  },
  postMedia: {
    ...commonStyles.flexCenter,
    backgroundColor: '#666',
    flex: 1,
  },
  imageBg: {
    ...commonStyles.flexCenter,
    flex: 1,
    width: '100%',
  },
  iconLeft: {
    padding: 1,
    marginRight: 12,
  },
  iconSeparator: {
    flex: 1,
  },
  iconRight: {
    padding: 1,
  },
  postFooter: {
    marginHorizontal: 14,
  },
  controls: {
    ...commonStyles.rowCenter,
    height: 46,
  },
  likeCountText: {
    //
  },
  captionText: {
    flex: 1,
  },
  captionUsernameText: {
    fontWeight: 'bold',
  },
  moreText: {
    color: g.moreTextColor,
  },
  timestampText: {
    fontSize: g.timestampFontSize,
    color: g.timestampFontColor,
    marginVertical: 4,
  },
});

export default Post;
