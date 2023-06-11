import { ProfileInput } from "../../components/ProfileInput";
import { Link } from "../../components/Link";
import backImageUrl from "../../static/arrow_back.png";
import emptyAvatarUrl from "../../static/empty_avatar.png";

const profileEmail = {
  className: "",
  name: "email",
  type: "email",
  label: "Почта",
  disabled: "disabled",
  value: "pochta@yandex.ru",
};

const profileLogin = {
  className: "",
  name: "login",
  type: "text",
  label: "Логин",
  disabled: "disabled",
  value: "ivanivanov",
};

const profileName = {
  className: "",
  name: "first_name",
  type: "text",
  label: "Имя",
  disabled: "disabled",
  value: "Иван",
};

const profileSurname = {
  className: "",
  name: "second_name",
  type: "text",
  label: "Фамилия",
  disabled: "disabled",
  value: "Иванов",
};

const profileDisplayName = {
  className: "",
  name: "display_name",
  type: "text",
  label: "Имя в чате",
  disabled: "disabled",
  value: "Иванов",
};

const profilePhone = {
  className: "",
  name: "display_name",
  type: "text",
  label: "Имя в чате",
  disabled: "disabled",
  value: "Иванов",
};
const changeDataLink = {
  className: 'profile__link',
   href: "#",
   text: "Изменить данные"
};

const changePasswordLink = {
  className: 'profile__link',
   href: "#",
   text: "Изменить пароль"
};

const logoutLink = {
  className: 'profile__link_red',
   href: "#",
   text: "Выйти"
};

export const profileContext = {
  profileEmail: ProfileInput(profileEmail),
  profileLogin: ProfileInput(profileLogin),
  profileName: ProfileInput(profileName),
  profileSurname: ProfileInput(profileSurname),
  profileDisplayName: ProfileInput(profileDisplayName),
  profilePhone: ProfileInput(profilePhone),
  changeDataLink: Link(changeDataLink),
  changePasswordLink: Link(changePasswordLink),
  logoutLink: Link(logoutLink),
  backImageUrl: backImageUrl,
  emptyAvatarUrl: emptyAvatarUrl,
};
