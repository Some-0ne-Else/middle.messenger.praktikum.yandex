import {
  emailPattern,
  nameAndSurnamePattern,
  nameAndSurnamePatternDescription,
  loginPattern,
  noValidationPattern,
  phonePattern,
  loginPatternDescription,
  emailPatternDescription,
  noValidationPatternDescription,
  phonePatternDescription,
} from '../../constants/validation';
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

const profileEmail = {
  class: 'profile-input',
  name: 'email',
  inputType: 'email',
  label: 'Почта',
  value: 'pochta@yandex.ru',
  targetForEvents: true,
  pattern: emailPattern,
  errorText: emailPatternDescription,
  events: { ...onBlurEvent },
};

const profileLogin = {
  class: 'profile-input',
  name: 'login',
  inputType: 'text',
  label: 'Логин',
  value: 'ivanivanov',
  targetForEvents: true,
  pattern: loginPattern,
  errorText: loginPatternDescription,
  events: { ...onBlurEvent },
};

const profileName = {
  class: 'profile-input',
  name: 'first_name',
  inputType: 'text',
  label: 'Имя',
  value: 'Иван',
  targetForEvents: true,
  pattern: nameAndSurnamePattern,
  errorText: nameAndSurnamePatternDescription,
  events: { ...onBlurEvent },
};

const profileSurname = {
  class: 'profile-input',
  name: 'second_name',
  inputType: 'text',
  label: 'Фамилия',
  value: 'Иванов',
  targetForEvents: true,
  pattern: nameAndSurnamePattern,
  errorText: nameAndSurnamePatternDescription,
  events: { ...onBlurEvent },
};

const profileDisplayName = {
  class: 'profile-input',
  name: 'display_name',
  inputType: 'text',
  label: 'Имя в чате',
  value: 'Иванов',
  targetForEvents: true,
  pattern: noValidationPattern,
  errorText: noValidationPatternDescription,
  events: { ...onBlurEvent },
};

const profilePhone = {
  class: 'profile-input',
  name: 'phone',
  inputType: 'text',
  label: 'Телефон',
  value: '+79099673030',
  targetForEvents: true,
  pattern: phonePattern,
  errorText: phonePatternDescription,
  events: { ...onBlurEvent },
};

const profileSaveButton = {
  class: 'button profile-edit__save-button',
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

export default {
  profileEmail,
  profileLogin,
  profileName,
  profileSurname,
  profileDisplayName,
  profilePhone,
  profileSaveButton,
  backImageUrl,
  emptyAvatarUrl,
  profileSidebarButton,
};
