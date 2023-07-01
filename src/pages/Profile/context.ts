import PATH from '../../constants/path';
import emptyAvatarUrl from '../../static/empty_avatar.png';

const profileHeader = {
  text: 'Иван',
};

const profileEmail = {
  class: 'profile-input',
  name: 'email',
  inputType: 'email',
  label: 'Почта',
  disabled: 'disabled',
  value: 'pochta@yandex.ru',
};

const profileLogin = {
  class: 'profile-input',
  name: 'login',
  inputType: 'text',
  label: 'Логин',
  disabled: 'disabled',
  value: 'ivanivanov',
};

const profileName = {
  class: 'profile-input',
  name: 'first_name',
  inputType: 'text',
  label: 'Имя',
  disabled: 'disabled',
  value: 'Иван',
};

const profileSurname = {
  class: 'profile-input',
  name: 'second_name',
  inputType: 'text',
  label: 'Фамилия',
  disabled: 'disabled',
  value: 'Иванов',
};

const profileDisplayName = {
  class: 'profile-input',
  name: 'display_name',
  inputType: 'text',
  label: 'Имя в чате',
  disabled: 'disabled',
  value: 'Иванов',
};

const profilePhone = {
  class: 'profile-input',
  name: 'phone',
  inputType: 'text',
  label: 'Телефон',
  disabled: 'disabled',
  value: '+79099673030',
};

const changeDataLink = {
  class: 'link profile__link',
  href: PATH.PROFILE_EDIT,
  text: 'Изменить данные',
};

const changePasswordLink = {
  class: 'link profile__link',
  href: PATH.PROFILE_PASSWORD,
  text: 'Изменить пароль',
};

const logoutLink = {
  class: 'link profile__link_red',
  href: PATH.ROOT,
  text: 'Выйти',
};

const profileSidebar = {
  class: 'profile-sidebar',
  events: {
    'click': () => {
      window.history.back();
    },
  },
};

export default {
  profileHeader,
  profileEmail,
  profileLogin,
  profileName,
  profileSurname,
  profileDisplayName,
  profilePhone,
  changeDataLink,
  changePasswordLink,
  logoutLink,
  emptyAvatarUrl,
  profileSidebar,
};
