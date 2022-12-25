import React, {FC} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {colors} from 'src/theme';

interface ButtonProps extends PressableProps {
  onPress: (event: GestureResponderEvent) => void;
  isDisabled?: boolean;
  style?: StyleProp<ViewStyle>;
}
const Button: FC<ButtonProps> = props => {
  return (
    <>
      <Pressable
        {...props}
        style={[
          props.style,
          styles.button,
          props.isDisabled && styles.disabledButton,
        ]}
        onPress={
          props.isDisabled
            ? () => {}
            : (event: GestureResponderEvent) => props.onPress(event)
        }>
        {props.children}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  disabledButton: {
    backgroundColor: 'grey',
  },
});
export default Button;
