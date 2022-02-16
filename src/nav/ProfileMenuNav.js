import React, {useContext} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {MainNav} from '~nav/';
import NavContext from '~state/NavContext';
import {g} from '~helpers/commonStyles';

const Drawer = createDrawerNavigator();

const deviceWidth = Dimensions.get('window').width;

const ProfileMenuNav = ({route, navigation}) => {
  const nav = useContext(NavContext);

  const mainOptions = {
    // title: '',
    // drawerLabel: 'string' | ({focused, color} => {}),
    // drawerIcon: 'string' | ({focused, color, size} => {}),
    swipeEnabled: nav.profileMenuSwipeEnabled,
    // gestureEnabled: false,
    //  unmountOnBlur: false,
  };

  // EVENT: drawerOpen, drawerClose
  // NAVIGATION HELPERS: openDrawer, closeDrawer, toggleDrawer

  return (
    <Drawer.Navigator
      // screenOptions={{}}
      backBehavior={'initialRoute'}
      // openByDefault={false}
      drawerPosition={'right'}
      drawerType={'slide'} // 'front' | 'back' | 'slide' | 'permanent'
      drawerStyle={styles.drawerStyle}
      edgeWidth={deviceWidth}
      overlayColor={'transparent'}
      // sceneContainerStyle={{borderWidth: 2, borderColor: 'red'}}
      // drawerContent={({state, navigation, descriptors, progress}) => (drawer)}
      drawerContentOptions={
        {
          // activeTintColor: '',
          // activeBackgroundColor: '',
          // inactiveTintColor: '',
          // inactiveBackgroundColor: '',
          // itemStyle: {{}},
          // labelStyle: {{}},
          // contentContainerStyle: {{}},
          // style: {{}},
        }
      }
      initialRouteName="MainNav">
      <Drawer.Screen name={'MainNav'} component={MainNav} options={mainOptions} initialParams={{}} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: g.menuBackgroundColor,
    width: (2 / 3) * 100 + '%',
  },
});

export default ProfileMenuNav;
