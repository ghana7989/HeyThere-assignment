import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, View, Pressable} from 'react-native';
import {NearByUser} from 'src/types/screen';
import Text from '../atomic/Text';
import {colors} from 'src/theme';

interface ChatNowCardProps {
  user: NearByUser;
  onChatNowClick: (user: NearByUser) => void;
}
const {width} = Dimensions.get('window');
const ChatNowCard: FC<ChatNowCardProps> = ({user, onChatNowClick}) => {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.avatar}
          source={{
            uri: user.image,
          }}
        />
        <View style={styles.right}>
          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Text type="BOLD" style={styles.name}>
                {user.name}
              </Text>

              <Text style={styles.status}>
                {/* ideally we should get this data from server */}
                {Math.floor(Math.random() * 1000)} meters (online)
              </Text>
            </View>
          </View>
          <Pressable
            style={styles.buttonContainer}
            onPress={() => {
              onChatNowClick(user);
            }}>
            <Text type="BOLD" style={{color: colors.primary}}>
              Chat Now
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    width: width - 40,
    height: 100,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  right: {
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  details: {
    flex: 1,
  },
  detailsContainer: {
    flexDirection: 'row',
    width: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
  },
  status: {
    fontSize: 12,
    color: 'gray',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
export default ChatNowCard;
