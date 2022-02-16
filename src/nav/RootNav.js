import React, {useMemo, useState} from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LiveScreen, MessagesScreen} from '~screens/';
import {CreateModalNav} from '~nav/';
import navContext from '~state/NavContext';

const NavProvider = navContext.Provider;
const Tab = createMaterialTopTabNavigator();

const RootNav = () => {
  const [mainSwipeEnabled, setMainSwipeEnabled] = useState(false);
  const [profileMenuSwipeEnabled, setProfileMenuSwipeEnabled] = useState(false);

  const nav = useMemo(
    () => ({
      mainSwipeEnabled,
      setMainSwipeEnabled,
      profileMenuSwipeEnabled,
      setProfileMenuSwipeEnabled,
    }),
    [mainSwipeEnabled, profileMenuSwipeEnabled],
  );

  return (
    <NavProvider value={nav}>
      <Tab.Navigator
        swipeEnabled={mainSwipeEnabled}
        lazy={false}
        keyboardDismissMode={'auto'}
        backBehavior={'initialRoute'}
        // nestedScrollEnabled={true}
        // lazyPlaceholder={}
        // timingConfig
        // screenConfig
        // swipeVelocityImpact
        // springVelocityScale
        // initialLayout
        // position
        // gestureHandlerProps
        // pager
        // style={{backgroundColor: mainSwipeEnabled ? 'green' : 'red'}}
        sceneContainerStyle={
          {
            // backgroundColor: profileMenuSwipeEnabled ? 'green' : 'red',
            // margin: 8,
            // padding: 8,
            // borderWidth: 1,
            // borderColor: 'white',
          }
        }
        tabBar={() => null}
        tabBarPosition={'top'}
        tabBarOptions={
          {
            // activeTintColor: 'navy',
            // inactiveTintColor: 'gray',
            // showIcon: false,
            // showLabel: false,
            // pressColor // android ripple
            // pressOpacity // iOS or old android
            // scrollEnabled
            // tabStyle: {borderWidth: 2}
            // indicatorStyle
            // labelStyle: {},
            // iconStyle
            // style: {backgroundColor: 'blue'}
            // allowFontScaling: true, // default
            // renderIndicator: () =>
          }
        }
        screenOptions={{}}
        initialRouteName={'CreateModalNav'}>
        <Tab.Screen name={'LiveScreen'} component={LiveScreen} options={{}} initialParams={{}} />
        <Tab.Screen name={'CreateModalNav'} component={CreateModalNav} options={{}} initialParams={{}} />
        <Tab.Screen name={'MessagesScreen'} component={MessagesScreen} options={{}} initialParams={{}} />
      </Tab.Navigator>
    </NavProvider>
  );
};

export default RootNav;
