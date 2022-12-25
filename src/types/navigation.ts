import {RouteProp} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  PersonalChat: {id: string; name: string; image: string};
};
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type PersonalChatScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'PersonalChat'
>;
export type PersonalChatScreenRouteProp = RouteProp<
  RootStackParamList,
  'PersonalChat'
>;
