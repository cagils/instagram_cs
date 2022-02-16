import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const Button = ({onPress, title, color = 'purple', style, textStyle}) => {
  const getButtonStyle = ({pressed}) => [styles.buttonStyle, style, {backgroundColor: pressed ? '#00000066' : color}];
  const getTextStyle = ({pressed}) => [styles.textStyle, textStyle, {color: pressed ? color : 'white'}];

  return (
    <Pressable
      onPress={onPress}
      style={getButtonStyle}
      android_ripple={{color: 'white'}}
      //android_disableSound={true}
      //delayLongPress={370}
      //disabled={true}
      //hitSlop={5} // or Rect
      //pressRetentionOffset={5} // or Rec
      //onLongPress={() => null}
      //onPressIn={() => null}
      //onPressOut={() => null}
    >
      {({pressed}) => <Text style={getTextStyle({pressed})}>{title}</Text>}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    margin: 8,
    borderRadius: 4,
  },
  textStyle: {
    textAlign: 'center',
  },
});
