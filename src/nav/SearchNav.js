import React, {useContext} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';

import {createStackNavigator, Header} from '@react-navigation/stack';
import {SearchScreen} from '~screens/';
import NavContext from '~state/NavContext';
import commonStyles, {g} from '~helpers/commonStyles';
import Iconer from '~helpers/Iconer';
import ContainerNav from '~nav/ContainerNav';

const Stack = createStackNavigator();

const SearchNav = ({route, navigation}) => {
  const nav = useContext(NavContext);
  const iconColor = g.headerIconColor;

  const screenOptions = {
    headerStyle: {...commonStyles.headerStyleNoShadow},
    headerTitleStyle: {...commonStyles.headerTitleStyle},
    title: 'Search',
    animationEnabled: false,
    //...TransitionPresets.DefaultTransition,
    //headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  };

  const containerOptions = {
    title: 'Another Screen',
    header: (headerOptions) => <Header {...headerOptions} />,
  };

  const searchOptions = {
    headerTitleStyle: {...commonStyles.headerTitleStyleSearch},
    headerLeft: (props) => (
      <Pressable
        onPress={() => {
          navigation.navigate('LiveScreen');
        }}>
        <View style={styles.logoLeft}>
          <Iconer.Feather color={iconColor} style={{}} name={'search'} size={22} />
        </View>
      </Pressable>
    ),
    headerRight: (props) => (
      <Pressable onPress={() => {}}>
        <View style={styles.logoRight}>
          <Iconer.Feather color={iconColor} style={{}} name={'user-plus'} size={22} />
        </View>
      </Pressable>
    ),
  };

  return (
    <Stack.Navigator initialRouteName={'SearchScreen'} screenOptions={screenOptions} headerMode={'float'}>
      <Stack.Screen name={'SearchScreen'} component={SearchScreen} options={searchOptions} initialParams={{}} />
      <Stack.Screen name={'ContainerNav'} component={ContainerNav} options={containerOptions} initialParams={{}} />
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

export default SearchNav;
