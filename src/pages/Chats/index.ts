import template from './index.tmpl';
import Block, { BlockInstance } from '../../helpers/block';
import './styles.pcss';

import Chat from '../../components/Chat';
import context from './context';
import ChatContent from '../../components/ChatContent';

const chatInstance = new Chat(context.chat1);
const chatInstance2 = new Chat(context.chat2);
const chatContent = new ChatContent(context.chatContent);

interface Props {
  class: string;
  chatInstance: BlockInstance;
  chatInstance2: BlockInstance;
  chatContent: BlockInstance;
}

class Chats extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const ChatsPage = new Chats({
  class: 'chats',
  chatInstance,
  chatInstance2,
  chatContent,
});

export default ChatsPage;
