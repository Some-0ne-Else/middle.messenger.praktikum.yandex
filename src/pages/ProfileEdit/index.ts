import loginTemplate from './index.tmpl';
import Block, { BlockInstance } from '../../helpers/block';
import ProfileInput from '../../components/ProfileInput';

import Button from '../../components/Button';
import context from './context';
import './styles.pcss';

const profileEmail = new ProfileInput(context.profileEmail);
const profileLogin = new ProfileInput(context.profileLogin);
const profileName = new ProfileInput(context.profileName);
const profileSurname = new ProfileInput(context.profileSurname);
const profileDisplayName = new ProfileInput(context.profileDisplayName);
const profilePhone = new ProfileInput(context.profilePhone);
const profileSaveButton = new Button(context.profileSaveButton);

interface Props {
  class: string;
  profileEmail: BlockInstance;
  profileLogin: BlockInstance;
  profileName: BlockInstance;
  profileSurname: BlockInstance;
  profileDisplayName: BlockInstance;
  profilePhone: BlockInstance;
  profileSaveButton: BlockInstance;
  backImageUrl: string;
  emptyAvatarUrl: string;
}

class Profile extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(loginTemplate, this.props);
  }
}

const ProfileEditPage = new Profile({
  class: 'profile',
  profileEmail,
  profileLogin,
  profileName,
  profileSurname,
  profileDisplayName,
  profilePhone,
  profileSaveButton,
  backImageUrl: context.backImageUrl,
  emptyAvatarUrl: context.emptyAvatarUrl,
});

export default ProfileEditPage;
