import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';

const emailInput = {
  className: "signup__wrapper",
  name: "email",
  label: "Почта",
  type: "email"
}
const loginInput = {
  className: "signup__wrapper",
  name: "login",
  label: "Логин",
  type: "text"
}

const nameInput = {
  className: "signup__wrapper",
  name: "first_name",
  label: "Имя",
  type: "text"
}

const surnameInput = {
  className: "signup__wrapper",
  name: "second_name",
  label: "Фамилия",
  type: "text"
}

const phoneInput = {
  className: "signup__wrapper",
  name: "phone",
  label: "Телефон",
  type: "tel"
}

const passwordInput = {
  className: "signup__wrapper",
  name: "password",
  label: "Пароль",
  type: "password"
}

const repeatPasswordInput = {
  className: "signup__wrapper",
  name: "repeat-password",
  label: "Пароль (ещё раз)",
  type: "password"
}

const signupButton = {
  className: "signup__button",
  text: "Зарегистрироваться",
  type: "submit",
};

const signupLink = {
  className: "",
  href: "#",
  text: "Войти"
}

export const signupContext = {
  emailInput: Input(emailInput),
  loginInput: Input(loginInput),
  nameInput: Input(nameInput),
  surnameInput: Input(surnameInput),
  phoneInput: Input(phoneInput),
  passwordInput: Input(passwordInput),
  repeatPasswordInput: Input(repeatPasswordInput),
  signupButton: Button(signupButton),
  signupLink: Link(signupLink)
}
