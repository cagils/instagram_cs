import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {CreateNav, ProfileMenuNav} from '~nav/';

const Stack = createStackNavigator();

const CreateModalNav = ({route, navigation}) => {
  const screenOptions = {
    headerShown: false,
  };

  const createOptions = {
    gestureEnabled: true,
    gestureDirection: 'vertical',
    ...TransitionPresets.ModalSlideFromBottomIOS,
  };

  return (
    <Stack.Navigator initialRouteName={'ProfileMenuNav'} screenOptions={screenOptions} mode={'modal'}>
      <Stack.Screen name={'CreateNav'} component={CreateNav} options={createOptions} initialParams={{}} />
      <Stack.Screen name={'ProfileMenuNav'} component={ProfileMenuNav} options={{}} initialParams={{}} />
    </Stack.Navigator>
  );
};

export default CreateModalNav;
