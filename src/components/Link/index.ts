import Block from '../../helpers/block';
import template from './index.tmpl';
import './styles.pcss';

type Props = {
  class: string;
  href: string;
  text: string;
};

class Link extends Block {
  constructor(props: Props) {
    super('a', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

export default Link;
