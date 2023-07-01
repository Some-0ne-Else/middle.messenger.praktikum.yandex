import Block from '../../helpers/block';
import template from './index.tmpl';
import './styles.pcss';

import backImageUrl from '../../static/arrow_back.png';

const targetForEvents = true;

interface Props {
  class: string;
  targetForEvents?: boolean;
}

class ProfileSidebar extends Block {
  constructor(props: Props) {
    super('aside', props);
  }

  render() {
    return this.compile(template, { backImageUrl, targetForEvents, ...this.props });
  }
}

export default ProfileSidebar;
