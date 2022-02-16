import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ActivityScreen} from '~screens/';
import NavContext from '~state/NavContext';
import commonStyles from '~helpers/commonStyles';

const Stack = createStackNavigator();

const ActivityNav = ({route, navigation}) => {
  const nav = useContext(NavContext);

  const screenOptions = {
    title: 'Activity',
    headerStyle: commonStyles.headerStyle,
    headerTitleStyle: commonStyles.headerTitleStyle,
  };

  return (
    <Stack.Navigator initialRouteName={'ActivityScreen'} screenOptions={screenOptions} headerMode={'float'}>
      <Stack.Screen name={'ActivityScreen'} component={ActivityScreen} options={{}} initialParams={{}} />
    </Stack.Navigator>
  );
};

export default ActivityNav;
