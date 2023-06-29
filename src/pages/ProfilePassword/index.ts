import template from './index.tmpl';
import Block, { BlockInstance } from '../../helpers/block';
import ProfileInput from '../../components/ProfileInput';
import Button from '../../components/Button';
import context from './context';
import './styles.pcss';

const profileOldPassword = new ProfileInput(context.profileOldPassword);
const profileNewPassword = new ProfileInput(context.profileNewPassword);
const profileRepeatNewPassword = new ProfileInput(context.profileRepeatNewPassword);
const profileSaveButton = new Button(context.profileSaveButton);

interface Props {
  class: string;
  profileOldPassword: BlockInstance;
  profileNewPassword: BlockInstance;
  profileRepeatNewPassword: BlockInstance;
  profileSaveButton: BlockInstance;
  backImageUrl: string;
  emptyAvatarUrl: string;
}

class ProfileEdit extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const ProfilePasswordPage = new ProfileEdit({
  class: 'profile',
  profileOldPassword,
  profileNewPassword,
  profileRepeatNewPassword,
  profileSaveButton,
  backImageUrl: context.backImageUrl,
  emptyAvatarUrl: context.emptyAvatarUrl,
});

export default ProfilePasswordPage;
