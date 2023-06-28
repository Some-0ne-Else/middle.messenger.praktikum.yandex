import template from './index.tmpl';
import Block, { BlockInstance } from '../../helpers/block';
import context from './context';
import './styles.pcss';
import Link from '../../components/Link';

const chatLink = new Link(context.chatLink);

interface Props {
  class: string;
  chatLink: BlockInstance;
}

class NotFound extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const NotFoundPage = new NotFound({
  class: 'not-found',
  chatLink,
});

export default NotFoundPage;
