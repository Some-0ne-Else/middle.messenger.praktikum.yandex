import { passwordPattern, passwordPatternDescription } from '../../constants/validation';
import { validateInput } from '../../helpers/validation';
import backImageUrl from '../../static/arrow_back.png';
import emptyAvatarUrl from '../../static/empty_avatar.png';

export const inputErrorClass = 'profile-input__input_error';
export const errorTextClass = 'profile-input__error-text_visible';

const onBlurEvent = {
  'blur': (e: Event) => {
    const input = e.target as HTMLInputElement;
    validateInput(input, inputErrorClass, errorTextClass);
  },
};

const profileOldPassword = {
  class: 'profile-input',
  name: 'oldPassword',
  inputType: 'password',
  label: 'Старый пароль',
  value: 'Oldpassword1',
  targetForEvents: true,
  pattern: passwordPattern,
  errorText: passwordPatternDescription,
  events: { ...onBlurEvent },
};

const profileNewPassword = {
  class: 'profile-input',
  name: 'newPassword',
  inputType: 'password',
  label: 'Новый пароль',
  value: 'Newpassword1',
  targetForEvents: true,
  pattern: passwordPattern,
  errorText: passwordPatternDescription,
  events: { ...onBlurEvent },
};

const profileRepeatNewPassword = {
  class: 'profile-input',
  name: 'newPassword',
  inputType: 'password',
  label: 'Повторите новый пароль',
  value: 'Newpassword1',
  targetForEvents: true,
  pattern: passwordPattern,
  errorText: passwordPatternDescription,
  events: { ...onBlurEvent },
};

const profileSaveButton = {
  class: 'button profile-password__save-button',
  type: 'submit',
  text: 'Сохранить',
};

const profileSidebarButton = {
  class: 'profile-sidebar__back-button',
  type: 'button',
  events: {
    'click': () => {
      window.history.back();
    },
  },
};
const profilePasswordContext = {
  profileOldPassword,
  profileNewPassword,
  profileRepeatNewPassword,
  profileSaveButton,
  backImageUrl,
  emptyAvatarUrl,
  profileSidebarButton,
};

export default profilePasswordContext;
