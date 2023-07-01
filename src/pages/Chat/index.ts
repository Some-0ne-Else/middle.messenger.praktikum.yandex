import template from './index.tmpl';
import Block from '../../helpers/block';
import './styles.pcss';

interface Props {
  class: string;
}

class Chat extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const ChatPage = new Chat({
  class: 'chat',
});

export default ChatPage;
