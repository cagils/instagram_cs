import React, {useContext} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {ProfileScreen} from '~screens/';
import NavContext from '~state/NavContext';
import commonStyles, {g} from '~helpers/commonStyles';
import Iconer from '~helpers/Iconer';

const Stack = createStackNavigator();

const ProfileNav = ({route, navigation}) => {
  const nav = useContext(NavContext);
  const iconColor = g.headerIconColor;

  const screenOptions = {
    title: 'madchuckle',
    headerStyle: commonStyles.headerStyleNoShadow,
    headerTitleStyle: commonStyles.headerTitleStyle,
    headerLeft: (props) => (
      <Pressable onPress={() => {}}>
        <View style={styles.logoLeft}>
          <Iconer.Fontisto color={iconColor} style={{}} name={'plus-a'} size={22} />
        </View>
      </Pressable>
    ),
    headerRight: (props) => (
      <Pressable
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <View style={styles.logoRight}>
          <Iconer.SimpleLineIcons color={iconColor} style={{}} name={'menu'} size={22} />
        </View>
      </Pressable>
    ),
  };

  return (
    <Stack.Navigator initialRouteName={'ProfileScreen'} screenOptions={screenOptions} headerMode={'float'}>
      <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} options={{}} initialParams={{}} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logoLeft: {
    ...commonStyles.headerIcon,
    ...commonStyles.headerLeft,
  },
  logoRight: {
    ...commonStyles.headerIcon,
    ...commonStyles.headerRight,
  },
});

export default ProfileNav;
