import Block from '../../helpers/block';
import buttonTemplate from './index.tmpl';
import './styles.pcss';

interface Props {
  className: string;
  text: string;
  type: string;
}

class Button extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(buttonTemplate, this.props);
  }
}

export default Button;
