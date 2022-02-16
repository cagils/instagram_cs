import {StyleSheet} from 'react-native';

const g = {
  screenBackgroundColor: '#ffffff',
  screenLiveBackgroundColor: '#000000',
  menuBackgroundColor: '#ffffff',
  statusBarBackgroundColor: '#f0f0f0',
  tabActiveTint: '#222222',
  tabInactiveTint: '#272727',
  headerTitleColor: '#272727',
  headerIconColor: '#272727',
  searchHeaderColor: '#999999',
  headerBgColor: '#fafafa',
  headerFontSize: 19,
  headerHeight: 97,
  searchTagsContainerBg: '#fafafa',
  normalFont: 'Roboto',
  boldFont: 'sans-serif-medium',
  fontColor: '#272727',
  storyBorderColorWatched: '#cbcbcb',
  storyBorderColorActive: '#ee5588',
  postHeaderFontSize: 13.5,
  postSubHeaderFontSize: 12.5,
  storyFontSize: 12,
  likedColor: '#ed4855',
  noUserPictureColor: '#dbdbdb',
  userCircleBorderColor: '#00000020',
  moreTextColor: '#999999',
  timestampFontSize: 12,
  timestampFontColor: '#999999',
};

const commonStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: g.screenBackgroundColor,
  },
  screenLive: {
    flex: 1,
    backgroundColor: g.screenLiveBackgroundColor,
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStyle: {
    backgroundColor: g.headerBgColor,
    height: g.headerHeight,
  },
  headerStyleNoShadow: {
    backgroundColor: g.headerBgColor,
    height: g.headerHeight,
    elevation: 0, // Android
    shadowOpacity: 0, // IOS
    borderBottomWidth: 0, // Default
  },
  headerTitleStyle: {
    color: g.headerTitleColor,
    fontSize: g.headerFontSize,
    fontFamily: 'sans-serif-medium',
  },
  headerTitleStyleWithIcon: {
    color: g.headerTitleColor,
    fontSize: g.headerFontSize,
    fontFamily: 'sans-serif-medium',
    marginLeft: -22,
  },
  headerTitleStyleSearch: {
    color: g.searchHeaderColor,
    fontSize: g.headerFontSize,
    fontFamily: 'sans-serif',
    marginLeft: -22,
  },
  headerIcon: {
    width: 32,
    height: 32,
    padding: 2,
    justifyContent: 'center',
  },
  headerLeft: {
    marginLeft: 12,
    alignItems: 'flex-start',
  },
  headerRight: {
    marginRight: 12,
    alignItems: 'flex-end',
  },
});

/* ANDROID FONTS:
  normal
  notoserif
  sans-serif
  sans-serif-light
  sans-serif-thin
  sans-serif-condensed
  sans-serif-medium
  serif
  Roboto
  monospace
*/

export default commonStyles;
export {g};
