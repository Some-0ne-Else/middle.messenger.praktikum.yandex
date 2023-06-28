import template from './index.tmpl';
import Block from '../../helpers/block';
import './styles.pcss';

interface Props {
  class: string;
}

class ChatList extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const ChatListPage = new ChatList({
  class: 'chat-list',
});

export default ChatListPage;
