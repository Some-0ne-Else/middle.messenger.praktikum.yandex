import Block from '../../helpers/block';
import inputTemplate from './index.tmpl';
import './styles.pcss';

interface Props {
  class: string;
  inputType: string;
  name: string;
  label: string;
  pattern?: string;
}

class Input extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(inputTemplate, this.props);
  }
}
export default Input;
