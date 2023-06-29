import backImageUrl from '../../static/arrow_back.png';
import emptyAvatarUrl from '../../static/empty_avatar.png';

const profileEmail = {
  class: 'profile-input',
  name: 'email',
  inputType: 'email',
  label: 'Почта',
  value: 'pochta@yandex.ru',
};

const profileLogin = {
  class: 'profile-input',
  name: 'login',
  inputType: 'text',
  label: 'Логин',
  value: 'ivanivanov',
};

const profileName = {
  class: 'profile-input',
  name: 'first_name',
  inputType: 'text',
  label: 'Имя',
  value: 'Иван',
};

const profileSurname = {
  class: 'profile-input',
  name: 'second_name',
  inputType: 'text',
  label: 'Фамилия',
  value: 'Иванов',
};

const profileDisplayName = {
  class: 'profile-input',
  name: 'display_name',
  inputType: 'text',
  label: 'Имя в чате',
  value: 'Иванов',
};

const profilePhone = {
  class: 'profile-input',
  name: 'phone',
  inputType: 'text',
  label: 'Телефон',
  value: '+7(909)9673030',
};

const profileSaveButton = {
  class: 'button profile-edit__save-button',
  type: 'submit',
  text: 'Сохранить',
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
};
