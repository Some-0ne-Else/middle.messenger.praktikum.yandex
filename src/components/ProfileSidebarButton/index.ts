import Block from '../../helpers/block';
import template from './index.tmpl';
import './styles.pcss';

import backImageUrl from '../../static/arrow_back.png';

interface Props {
  class: string;
  type: string;
}

class ProfileSidebar extends Block {
  constructor(props: Props) {
    super('button', props);
  }

  render() {
    return this.compile(template, { ...this.props, backImageUrl });
  }
}

export default ProfileSidebar;
