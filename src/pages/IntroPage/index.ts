import template from './index.tmpl';
import Block from '../../helpers/block';
import PATH from '../../constants/path';
import './styles.pcss';

interface Props {
  class: string;
  loginUrl: string;
  signupUrl: string;
  profileUrl: string;
  profileEditUrl: string;
  profilePasswordUrl: string;
  internalErrorUrl: string;
  notFoundUrl: string;
  chatsUrl: string;
}

class Intro extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const IntroPage = new Intro({
  class: 'intro-page',
  loginUrl: PATH.LOGIN,
  signupUrl: PATH.SIGNUP,
  profileUrl: PATH.PROFILE,
  profileEditUrl: PATH.PROFILE_EDIT,
  profilePasswordUrl: PATH.PROFILE_PASSWORD,
  internalErrorUrl: PATH.INTERNAL_ERROR,
  notFoundUrl: PATH.NOT_FOUND,
  chatsUrl: PATH.CHATS,
});

export default IntroPage;
