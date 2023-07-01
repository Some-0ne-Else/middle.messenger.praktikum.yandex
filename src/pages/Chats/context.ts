import defaultChatImage from '../../static/default_chat_image.png';
import messageCounterImage from '../../static/message_counter.png';

const chat1 = {
  class: 'chat',
  chatImage: defaultChatImage,
  username: 'Андрей',
  lastMessage:
    'Какое-то сообщение Какое-то сообщение Какое-то сообщение Какое-то сообщение Какое-то сообщение Какое-то сообщение',
  timestamp: '15:12',
  messageCounterImage,
  messageCounter: '4',
  events: {
    'click': () => {
      console.log('click');
    },
  },
};

const chat2 = {
  class: 'chat',
  chatImage: defaultChatImage,
  username: 'Петр',
  lastMessage: 'Друзья, у меня для вас особенный выпуск новостей!',
  timestamp: '15:12',
  messageCounterImage,
  messageCounter: '2',
  events: {
    'click': () => {
      console.log('click2');
    },
  },
};

const chatContent = {
  class: 'chat-content',
};

export default {
  chat1,
  chat2,
  chatContent,
};
