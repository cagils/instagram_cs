import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

import {NavigationContainer} from '@react-navigation/native';
import RootNav from '~nav/RootNav';
import {g} from '~helpers/commonStyles';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle={'dark-content'} translucent backgroundColor={g.statusBarBackgroundColor} />
        <RootNav />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
