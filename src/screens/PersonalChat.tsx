import React, {FC, useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {PersonalChatScreenProps} from 'src/types/navigation';

const PersonalChat: FC<PersonalChatScreenProps> = ({route}) => {
  const {name, id, image} = route.params;
  const [messages, setMessages] = useState([] as any);

  useEffect(() => {
    setMessages([
      {
        _id: '39404bb2-7ceb-4a7d-9274-57afd2a8a590',
        createdAt: '2022-12-26T04:11:21.942Z',
        text: 'Hi brooo',
        user: {_id: 1},
      },
      {
        _id: 1,
        createdAt: '2022-12-26T04:11:15.372Z',
        text: 'Hello developer',
        user: {
          _id: '383d61d4-46b0-48ff-b98c-6c5b15ac6376',
          avatar:
            'https://i.pravatar.cc/300?383d61d4-46b0-48ff-b98c-6c5b15ac6376',
          name: 'Lisa',
        },
      },
    ]);
  }, [id, image, name]);

  const onSend = useCallback((msgs = []) => {
    fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
      headers: {
        'X-Api-Key': 'l0HidCCv/J4uwYTh585a7w==jvp3a0r6a9PvyLx5',
      },
    })
      .then(res => res.json())
      .then(data => {
        setMessages((previousMessages: any[] | undefined) =>
          GiftedChat.append(previousMessages, [
            generateMessage(data[0].fact),
            ...msgs,
          ]),
        );
      });
  }, []);

  return (
    <GiftedChat
      infiniteScroll
      renderUsernameOnMessage
      messages={messages}
      onSend={m => onSend(m)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default PersonalChat;

function generateMessage(msg: string) {
  return {
    _id: new Date().getUTCMilliseconds().toString(),
    createdAt: new Date(),
    text: msg,
    user: {
      _id: '383d61d4-46b0-48ff-b98c-6c5b15ac6376',
      avatar: 'https://i.pravatar.cc/300?383d61d4-46b0-48ff-b98c-6c5b15ac6376',
      name: 'Lisa',
    },
  };
}
