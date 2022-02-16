import React, {useContext} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ActivityNav, HomeNav, ProfileNav, SearchNav} from '~nav/';
import navContext from '~state/NavContext';

// import CustomTabBar from '~components/TabBar/BottomTabBar';
import Iconer from '~helpers/Iconer';

import {g} from '~helpers/commonStyles';

const Tab = createBottomTabNavigator();

const MainNav = ({navigation, route}) => {
  const nav = useContext(navContext);

  const screenOptionsF = ({navigation, route}) => ({
    // title: 'fallback',
    // tabBarVisible: false,
    // tabBarIcon: ({focused, color, size}) => {},
    // tabBarLabel: 'Title String' || {focused, color} => (),
    // tabBarBadge: 'String' | 3,
    // tabBarButton: () => component
    // tabBarAccessibilityLabel: '',
    // unmountOnBlur: false // default
  });

  // EVENTS EMITTED: tabPress, tabLongPress
  // NAVIGATION HELPERS: jumpTo

  const tabBarOptions = {
    activeTintColor: g.tabActiveTint,
    inactiveTintColor: g.tabInactiveTint,
    // activeBackgroundColor: 'red',
    // inactiveBackgroundColor: 'red',
    // tabStyle: {borderWidth: 2},
    showLabel: false,
    // labelStyle: {},
    // labelPosition: 'below-icon' | 'beside-icon', default is orientation specific
    // adaptive: true, // default
    // allowFontScaling: true, // default
    // keyboardHidesTabBar: false, // default
    // safeAreaInsets: {top: 1, right: 1, left: 1, bottom: 1},
    style: {},
  };

  const homeOptions = {
    // tabBarBadge: 3,
    tabBarIcon: ({focused, color, size}) => (
      <Iconer.Ionicons name={focused ? 'home' : 'home-outline'} size={size + 2} color={color} />
    ),
  };
  const searchOptions = {
    tabBarIcon: ({focused, color, size}) => (
      <Iconer.Ionicons name={focused ? 'search' : 'search-outline'} size={size + 4} color={color} />
    ),
  };
  const createOptions = {
    tabBarIcon: ({focused, color, size}) => (
      <Iconer.FontAwesome name={focused ? 'plus-square' : 'plus-square-o'} size={size + 6} color={color} />
    ),
  };
  const activityOptions = {
    tabBarIcon: ({focused, color, size}) => (
      <Iconer.FontAwesome name={focused ? 'heart' : 'heart-o'} size={size} color={color} />
    ),
  };
  const profileOptions = {
    tabBarIcon: ({focused, color, size}) => (
      <Iconer.Ionicons name={focused ? 'person-circle' : 'person-circle-outline'} size={size + 4} color={color} />
    ),
  };
  const emptyComponent = () => null;
  return (
    <Tab.Navigator
      screenOptions={screenOptionsF}
      backBehavior={'history'}
      lazy={false}
      // tabBar={(props) => <CustomTabBar {...props} />}
      tabBarOptions={tabBarOptions}
      style={{}}
      initialRouteName={'HomeNav'}>
      <Tab.Screen name={'HomeNav'} component={HomeNav} options={homeOptions} initialParams={{}} />
      <Tab.Screen name={'SearchNav'} component={SearchNav} options={searchOptions} initialParams={{}} />
      <Tab.Screen
        name={'CreatePreNav'}
        component={emptyComponent}
        options={createOptions}
        initialParams={{}}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('CreateNav');
          },
        }}
      />
      <Tab.Screen name={'ActivityNav'} component={ActivityNav} options={activityOptions} initialParams={{}} />
      <Tab.Screen name={'ProfileNav'} component={ProfileNav} options={profileOptions} initialParams={{}} />
    </Tab.Navigator>
  );
};

export default MainNav;
