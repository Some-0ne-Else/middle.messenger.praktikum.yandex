import Block from '../../helpers/block';
import template from './index.tmpl';
import './styles.pcss';

type Props = {
  class: string;
  name: string;
  inputType: string;
  label: string;
  disabled?: string;
  value: string;
};

class ProfileInput extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
export default ProfileInput;
