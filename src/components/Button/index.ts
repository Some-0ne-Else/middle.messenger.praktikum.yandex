import Block from '../../helpers/block';
import buttonTemplate from './index.tmpl';
import './styles.pcss';

interface Props {
  class: string;
  text: string;
  type: string;
}

class Button extends Block {
  constructor(props: Props) {
    super('button', props);
  }

  render() {
    return this.compile(buttonTemplate, this.props);
  }
}

export default Button;
