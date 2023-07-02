import template from './index.tmpl';
import Block, { BlockInstance, EventsInProps } from '../../helpers/block';
import ProfileInput from '../../components/ProfileInput';
import Button from '../../components/Button';
import context, { errorTextClass, inputErrorClass } from './context';
import './styles.pcss';
import { validateForm } from '../../helpers/validation';
import ProfileSidebar from '../../components/ProfileSidebarButton';

const profileOldPassword = new ProfileInput(context.profileOldPassword);
const profileNewPassword = new ProfileInput(context.profileNewPassword);
const profileRepeatNewPassword = new ProfileInput(context.profileRepeatNewPassword);
const profileSaveButton = new Button(context.profileSaveButton);
const profileSidebarButton = new ProfileSidebar(context.profileSidebarButton);

interface Props {
  class: string;
  profileOldPassword: BlockInstance;
  profileNewPassword: BlockInstance;
  profileRepeatNewPassword: BlockInstance;
  profileSaveButton: BlockInstance;
  profileSidebarButton: BlockInstance;
  emptyAvatarUrl: string;
  targetForEvents: boolean;
  events: EventsInProps;
}

class ProfilePassword extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const ProfilePasswordPage = new ProfilePassword({
  class: 'profile-password',
  profileOldPassword,
  profileNewPassword,
  profileRepeatNewPassword,
  profileSaveButton,
  emptyAvatarUrl: context.emptyAvatarUrl,
  profileSidebarButton,
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

export default ProfilePasswordPage;
