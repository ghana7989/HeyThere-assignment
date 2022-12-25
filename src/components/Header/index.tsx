import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface HeaderProps {
  children?: React.ReactNode | React.ReactNode[];
}
const Header: FC<HeaderProps> = () => {
  return (
    <>
      <Text>Hello I am header</Text>
    </>
  );
};

export default Header;
