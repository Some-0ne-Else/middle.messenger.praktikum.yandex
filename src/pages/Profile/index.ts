import template from './index.tmpl';
import Block, { BlockInstance } from '../../helpers/block';
import ProfileInput from '../../components/ProfileInput';
import Link from '../../components/Link';
import context from './context';
import './styles.pcss';

const profileEmail = new ProfileInput(context.profileEmail);
const profileLogin = new ProfileInput(context.profileLogin);
const profileName = new ProfileInput(context.profileName);
const profileSurname = new ProfileInput(context.profileSurname);
const profileDisplayName = new ProfileInput(context.profileDisplayName);
const profilePhone = new ProfileInput(context.profilePhone);
const changeDataLink = new Link(context.changeDataLink);
const changePasswordLink = new Link(context.changePasswordLink);
const logoutLink = new Link(context.logoutLink);

interface Props {
  class: string;
  profileHeader: string;
  profileEmail: BlockInstance;
  profileLogin: BlockInstance;
  profileName: BlockInstance;
  profileSurname: BlockInstance;
  profileDisplayName: BlockInstance;
  profilePhone: BlockInstance;
  changeDataLink: BlockInstance;
  changePasswordLink: BlockInstance;
  logoutLink: BlockInstance;
  backImageUrl: string;
  emptyAvatarUrl: string;
}

class Profile extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const ProfilePage = new Profile({
  class: 'profile',
  profileHeader: context.profileHeader.text,
  profileEmail,
  profileLogin,
  profileName,
  profileSurname,
  profileDisplayName,
  profilePhone,
  changeDataLink,
  changePasswordLink,
  logoutLink,
  backImageUrl: context.backImageUrl,
  emptyAvatarUrl: context.emptyAvatarUrl,
});

export default ProfilePage;
