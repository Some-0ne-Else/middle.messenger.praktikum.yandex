import { ProfileInput } from "../../components/ProfileInput";
import { Button } from "../../components/Button";
import backImageUrl from "../../static/arrow_back.png";
import emptyAvatarUrl from "../../static/empty_avatar.png";

const profileOldPassword = {
  className: "",
  name: "oldPassword",
  type: "password",
  label: "Старый пароль",
  value: "********",
};

const profileNewPassword = {
  className: "",
  name: "newPassword",
  type: "password",
  label: "Новый пароль",
  value: "************",
};

const profileRepeatNewPassword = {
  className: "",
  name: "newPassword",
  type: "password",
  label: "Повторите новый пароль",
  value: "************",
};

const profileSaveButton = {
  className: "profile-password__save-button",
  type: "submit",
  text: "Сохранить"
}

export const profilePasswordContext = {
  profileOldPassword: ProfileInput(profileOldPassword),
  profileNewPassword: ProfileInput(profileNewPassword),
  profileRepeatNewPassword: ProfileInput(profileRepeatNewPassword),
  profileSaveButton: Button(profileSaveButton),
  backImageUrl: backImageUrl,
  emptyAvatarUrl: emptyAvatarUrl,
};
