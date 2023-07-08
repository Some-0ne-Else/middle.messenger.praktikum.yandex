import Block from '../../helpers/block';
import template from './index.tmpl';
import './styles.pcss';

interface Props {
  class: string;
  chatImage: string;
  username: string;
  lastMessage: string;
  timestamp: string;
}

class Chat extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default Chat;
