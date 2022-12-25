import React, {FC} from 'react';
import {
  Text as RNText,
  StyleSheet,
  TextProps as RNTextProps,
} from 'react-native';

interface TextProps extends RNTextProps {
  type?: 'DEFAULT' | 'BOLD' | 'REGULAR' | 'MEDIUM';
}

const Text: FC<TextProps> = ({children, type = 'DEFAULT', style, ...props}) => {
  if (type === 'BOLD') {
    return (
      <RNText {...props} style={[style, styles.textBold]}>
        {children}
      </RNText>
    );
  }
  if (type === 'MEDIUM') {
    return (
      <RNText {...props} style={[style, styles.textBold]}>
        {children}
      </RNText>
    );
  }
  return (
    <RNText {...props} style={[style, styles.text]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Poppins-Regular',
  },
  textBold: {
    fontFamily: 'Poppins-Bold',
  },
  medium: {
    fontFamily: 'Poppins-Bold',
  },
});
export default Text;
