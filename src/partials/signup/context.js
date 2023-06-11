const emailInput = {
  class: "signup__wrapper",
  name: "email",
  label: "Почта",
  type: "email"
}
const loginInput = {
  class: "signup__wrapper",
  name: "login",
  label: "Логин",
  type: "text"
}

const nameInput = {
  class: "signup__wrapper",
  name: "first_name",
  label: "Имя",
  type: "text"
}

const surnameInput = {
  class: "signup__wrapper",
  name: "second_name",
  label: "Фамилия",
  type: "text"
}

const phoneInput = {
  class: "signup__wrapper",
  name: "phone",
  label: "Телефон",
  type: "tel"
}

const passwordInput = {
  class: "signup__wrapper",
  name: "password",
  label: "Пароль",
  type: "password"
}

const repeatPasswordInput = {
  class: "signup__wrapper",
  name: "repeat-password",
  label: "Пароль (ещё раз)",
  type: "password"
}

const signupButton = {
  class: "signup__button",
  text: "Зарегистрироваться",
  type: "submit",
};

const signupLink = {
  class: "",
  href: "#",
  text: "Войти"
}

export const signup = {
  emailInput,
  loginInput,
  nameInput,
  surnameInput,
  phoneInput,
  passwordInput,
  repeatPasswordInput,
  signupButton,
  signupLink
}
