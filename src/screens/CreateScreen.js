import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import Modal from 'react-native-modal';
import commonStyles from '~helpers/commonStyles';

const CreateScreen = ({route, navigation}) => {
  const [createModalEnabled, setCreateModalEnabled] = React.useState(true);

  return (
    <View style={styles.screen}>
      <Text>CreateScreen</Text>
      {/* <Button
        title={'Open Modal'}
        color={'orange'}
        onPress={() => {
          setCreateModalEnabled(true);
        }}
      />
      <Button
        title={'Navigate to Dummy'}
        color={'green'}
        onPress={() => {
          navigation.navigate('DummyScreen');
        }}
      />*/}
      {/*<Modal
        onBackButtonPress={() => {
          setCreateModalEnabled(false);
        }}
        style={{margin: 0}}
        isVisible={createModalEnabled}
        statusBarTranslucent
        hasBackdrop={false}
        // backdropOpacity={1}
        // backdropTransitionInTiming={0}
        // backdropTransitionOutTiming={0}
        // useNativeDriver // flash bug
        // hideModalContentWhileAnimating={true}
        // animationIn="fadeIn"
        // animationOut="fadeOut"
        // backdropColor="black"
        // customBackdrop={}
        // deviceHeight={}
        // deviceWidth={}
        // onBackdropPress={}
        // onModalWillHide={}
        // onModalHide={}
        // onModalWillShow={}
        // onModalShow={}
        // onSwipeStart
        // onSwipeMove
        // onSwipeComplete
        // onSwipeCancel
        // scrollOffset
        // scrollOffsetMax
        // scrollTo
        // scrollHorizontal
        // swipeThreshold
        // swipeDirection
        // propagateSwipe
        // coverScreen={false}
      >
        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
          <StatusBar hidden />
          <Text style={{textAlign: 'center', fontSize: 40}}>My Modal Screen</Text>
        </View>
      </Modal>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    ...commonStyles.screen,
  },
});

export default CreateScreen;
