import template from './index.tmpl';
import Block, { BlockInstance, EventsInProps } from '../../helpers/block';
import ProfileInput from '../../components/ProfileInput';

import Button from '../../components/Button';
import context, { inputErrorClass } from './context';
import './styles.pcss';
import { validateForm } from '../../helpers/validation';

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
  targetForEvents: boolean;
  events: EventsInProps;
}

class ProfileEdit extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const ProfileEditPage = new ProfileEdit({
  class: 'profile-edit',
  profileEmail,
  profileLogin,
  profileName,
  profileSurname,
  profileDisplayName,
  profilePhone,
  profileSaveButton,
  backImageUrl: context.backImageUrl,
  emptyAvatarUrl: context.emptyAvatarUrl,
  targetForEvents: true,
  events: {
    'submit': (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const { isFormValid, formData } = validateForm(form, inputErrorClass);
      if (!isFormValid) {
        console.log('Validation error');
      } else {
        console.log(formData);
      }
    },
  },
});

export default ProfileEditPage;
