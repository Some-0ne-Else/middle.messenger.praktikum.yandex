import backImageUrl from '../../static/arrow_back.png';
import emptyAvatarUrl from '../../static/empty_avatar.png';

const profileOldPassword = {
  class: 'profile-input',
  name: 'oldPassword',
  inputType: 'password',
  label: 'Старый пароль',
  value: '********',
};

const profileNewPassword = {
  class: 'profile-input',
  name: 'newPassword',
  inputType: 'password',
  label: 'Новый пароль',
  value: '************',
};

const profileRepeatNewPassword = {
  class: 'profile-input',
  name: 'newPassword',
  inputType: 'password',
  label: 'Повторите новый пароль',
  value: '************',
};

const profileSaveButton = {
  class: 'button profile-password__save-button',
  type: 'submit',
  text: 'Сохранить',
};

const profilePasswordContext = {
  profileOldPassword,
  profileNewPassword,
  profileRepeatNewPassword,
  profileSaveButton,
  backImageUrl,
  emptyAvatarUrl,
};

export default profilePasswordContext;
