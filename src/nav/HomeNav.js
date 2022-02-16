import React, {useContext} from 'react';
import {Image, Platform, Pressable, StyleSheet, View} from 'react-native';

import {createStackNavigator, HeaderStyleInterpolators, TransitionPresets} from '@react-navigation/stack';
import {DummyScreen, HomeScreen} from '~screens/';
import navContext from '~state/NavContext';
import Iconer from '~helpers/Iconer';
import commonStyles, {g} from '~helpers/commonStyles';
// import {useTheme} from '@react-navigation/native';
import logo from '~assets/images/instagram-header-logo-full-lighter.png';

const Stack = createStackNavigator();

const HomeNav = ({route, navigation}) => {
  //const {colors} = useTheme();
  const nav = useContext(navContext);
  const iconColor = g.headerIconColor;

  const homeOptions = {
    // title: 'Static Home',
    // headerShown: false,
    // headerRight: () => <Button onPress={() => {}} title="Info" color={'orange'} />,
    // headerBackTitleVisible: false,
    // headerBackImage: () => <Iconer.Ionicons name={'camera-outline'} size={34} />,
    // headerLeft: (props) => <HeaderBackButton {...props} onPress={() => {}} />,
    headerLeft: (props) => (
      <Pressable
        onPress={() => {
          navigation.navigate('LiveScreen');
        }}>
        <View style={styles.logoLeft}>
          <Iconer.FontAwesome color={iconColor} style={{}} name={'camera'} size={24} />
        </View>
      </Pressable>
    ),
    headerRight: (props) => (
      <Pressable
        onPress={() => {
          navigation.navigate('MessagesScreen');
        }}>
        <View style={styles.logoRight}>
          <Iconer.FontAwesome color={iconColor} style={{}} name={'paper-plane-o'} size={24} />
        </View>
      </Pressable>
    ),
    title: 'Instagram',
    headerTitleStyle: commonStyles.headerTitleStyleWithIcon,
    headerTitle: ({children: currentTitle, onLayout, allowFontScaling, tintColor, style}) => (
      <View style={styles.headerLogoContainer}>
        <Image resizeMode={'contain'} style={styles.headerLogo} source={logo} />
      </View>
    ),
    /*    headerStyle: {
          ...Platform.select({
            android: {
              elevation: 4, // default was 4
            },
            ios: {
              shadowOpacity: 0.85,
              shadowRadius: 0,
              shadowOffset: {
                width: 0,
                height: StyleSheet.hairlineWidth,
              },
            },
            default: {
              borderBottomWidth: StyleSheet.hairlineWidth,
            },
          }),
        },*/
    /*headerTitle: ({children: currentTitle, onLayout, allowFontScaling, tintColor, style}) => (
        <Animated.Text
          accessibilityRole="header"
          numberOfLines={1}
          style={[styles.title, {color: tintColor === undefined ? colors.text : tintColor}, style]}>
          <Iconer.Ionicons name={'camera-outline'} size={34}/>
          {currentTitle}
        </Animated.Text>
        ),*/
  };
  const homeOptionsF = ({navigation, route}) => ({
    // title: route.params?.myTitle ?? 'NONE',
  });
  const homeInitialParams = {
    // myTitle: 'Initial Param MyTitle',
  };
  const screenOptions = {
    headerStyle: commonStyles.headerStyle,
    headerTitleStyle: commonStyles.headerTitleStyle,
    title: 'Instagram',
    headerShown: true,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    ...TransitionPresets.SlideFromRightIOS,
    headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation,

    // headerTitleStyle: {backgroundColor: '#9ef1cc'},
    // headerBackTitleStyle: {backgroundColor: '#df88df'},
    // headerLeftContainerStyle: {backgroundColor: '#e2dd99'},
    // headerRightContainerStyle: {backgroundColor: '#aa7fe3'},
    // headerTitleContainerStyle: {backgroundColor: '#fa727c'},
    // headerTintColor: 'blue',
    // headerTransparent: true,
  };

  return (
    // mode={'modal'} only affects iOS and the user can swipe down to dismiss
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={screenOptions} headerMode={'float'}>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={homeOptions}
        initialParams={homeInitialParams}
      />
      <Stack.Screen name={'DummyScreen'} component={DummyScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  title: Platform.select({
    ios: {
      fontSize: 17,
      fontWeight: '600',
    },
    android: {
      fontSize: 20,
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    default: {
      fontSize: 18,
      fontWeight: '500',
    },
  }),
  headerLogoContainer: {
    ...commonStyles.headerTitleStyleWithIcon,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 6,
  },
  headerLogo: {
    height: 26,
    width: 100,
  },
  logoLeft: {
    ...commonStyles.headerIcon,
    ...commonStyles.headerLeft,
  },
  logoRight: {
    ...commonStyles.headerIcon,
    ...commonStyles.headerRight,
  },
});

export default HomeNav;
