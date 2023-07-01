import Block from '../../helpers/block';
import template from './index.tmpl';
import './styles.pcss';

interface Props {
  class: string;
}

class ChatContent extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default ChatContent;
