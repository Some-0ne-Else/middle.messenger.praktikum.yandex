import template from './index.tmpl';
import Block, { BlockInstance, EventsInProps } from '../../helpers/block';
import ProfileInput from '../../components/ProfileInput';

import Button from '../../components/Button';
import context, { errorTextClass, inputErrorClass } from './context';
import './styles.pcss';
import { validateForm } from '../../helpers/validation';
import ProfileSidebar from '../../components/ProfileSidebarButton';

const profileEmail = new ProfileInput(context.profileEmail);
const profileLogin = new ProfileInput(context.profileLogin);
const profileName = new ProfileInput(context.profileName);
const profileSurname = new ProfileInput(context.profileSurname);
const profileDisplayName = new ProfileInput(context.profileDisplayName);
const profilePhone = new ProfileInput(context.profilePhone);
const profileSaveButton = new Button(context.profileSaveButton);
const profileSidebarButton = new ProfileSidebar(context.profileSidebarButton);

interface Props {
  class: string;
  profileSidebarButton: BlockInstance;
  profileEmail: BlockInstance;
  profileLogin: BlockInstance;
  profileName: BlockInstance;
  profileSurname: BlockInstance;
  profileDisplayName: BlockInstance;
  profilePhone: BlockInstance;
  profileSaveButton: BlockInstance;
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
  profileSidebarButton,
  profileEmail,
  profileLogin,
  profileName,
  profileSurname,
  profileDisplayName,
  profilePhone,
  profileSaveButton,
  emptyAvatarUrl: context.emptyAvatarUrl,
  targetForEvents: true,
  events: {
    'submit': (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const { isFormValid, formData } = validateForm(form, inputErrorClass, errorTextClass);
      if (!isFormValid) {
        // eslint-disable-next-line no-console
        console.log('Validation error');
      } else {
        // eslint-disable-next-line no-console
        console.log(formData);
      }
    },
  },
});

export default ProfileEditPage;
