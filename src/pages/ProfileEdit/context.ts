import { ProfileInput } from "../../components/ProfileInput";
import { Button } from "../../components/Button";
import backImageUrl from "../../static/arrow_back.png";
import emptyAvatarUrl from "../../static/empty_avatar.png";

const profileEmail = {
  className: "",
  name: "email",
  type: "email",
  label: "Почта",
  value: "pochta@yandex.ru",
};

const profileLogin = {
  className: "",
  name: "login",
  type: "text",
  label: "Логин",
  value: "ivanivanov",
};

const profileName = {
  className: "",
  name: "first_name",
  type: "text",
  label: "Имя",
  value: "Иван",
};

const profileSurname = {
  className: "",
  name: "second_name",
  type: "text",
  label: "Фамилия",
  value: "Иванов",
};

const profileDisplayName = {
  className: "",
  name: "display_name",
  type: "text",
  label: "Имя в чате",
  value: "Иванов",
};

const profilePhone = {
  className: "",
  name: "phone",
  type: "text",
  label: "Телефон",
  value: "+7(909)9673030",
};


const profileSaveButton = {
  className: "profile-edit__save-button",
  type: "submit",
  text: "Сохранить"
}


export const profileEditContext = {
  profileEmail: ProfileInput(profileEmail),
  profileLogin: ProfileInput(profileLogin),
  profileName: ProfileInput(profileName),
  profileSurname: ProfileInput(profileSurname),
  profileDisplayName: ProfileInput(profileDisplayName),
  profilePhone: ProfileInput(profilePhone),
  profileSaveButton: Button(profileSaveButton),
  backImageUrl: backImageUrl,
  emptyAvatarUrl: emptyAvatarUrl,
};
