import React, {useContext} from 'react';

// import {Text, View, Easing} from 'react-native';
import {createStackNavigator, TransitionPresets, HeaderStyleInterpolators} from '@react-navigation/stack';

import {CreateScreen, DummyScreen} from '~screens/';
import Iconer from '~helpers/Iconer';
import NavContext from '~state/NavContext';
import commonStyles from '~helpers/commonStyles';

const Stack = createStackNavigator();

const CreateNav = ({route, navigation}) => {
  const nav = useContext(NavContext);

  /*const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({current, next, layouts}) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
            {
              rotate: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: ['360deg', '0deg'],
              }),
            },
            {
              scale: next
                ? next.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.9],
                  })
                : 1,
            },
          ],
        },
        overlayStyle: {
          opacity: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
          }),
        },
      };
    },
  };*/

  /*  const TransitionSpecConfig = {
      animation: 'timing',
      config: {
        duration: 1000,
        easing: Easing.inOut(Easing.cubic),
      },
    };*/

  const screenOptions = {
    title: 'Photo',
    headerStyle: {...commonStyles.headerStyle},
    headerTitleStyle: {...commonStyles.headerTitleStyle},
    headerShown: true,
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    ...TransitionPresets.SlideFromRightIOS,
    headerStyleInterpolator: HeaderStyleInterpolators.forNoAnimation,
    // HEADERSTYLEINTERPOLATORS:
    // forNoAnimation, forSlideUp, forSlideRight, forSlideLeft, forFade, forUIKit
    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    // CARDSTYLEINTERPOLATORS:
    // forNoAnimation, forScaleFromCenterAndroid, forRevealFromBottomAndroid,
    // forFadeFromBottomAndroid, forModalPresentationIOS, forVerticalIOS, forHorizontalIOS
    /*    transitionSpec: {
          open: TransitionSpecConfig,
          close: TransitionSpecConfig,
        },*/
  };
  const createOptions = {
    headerBackTitleVisible: false,
    headerBackImage: () => <Iconer.EvilIcons name={'close'} size={34} />,
    // Default React Navigation back image is very similar to <Iconer.Feather name={'arrow-left'} size={24} />
  };
  const dummyOptions = {};

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      headerMode={'float'}
      mode={'modal'}
      initialRouteName={'CreateScreen'}>
      <Stack.Screen name={'CreateScreen'} component={CreateScreen} options={createOptions} initialParams={{}} />
      <Stack.Screen name={'DummyScreen'} component={DummyScreen} options={dummyOptions} initialParams={{}} />
      <Stack.Screen name={'NotADummyScreen'} component={DummyScreen} options={dummyOptions} initialParams={{}} />
    </Stack.Navigator>
  );
};

export default CreateNav;
