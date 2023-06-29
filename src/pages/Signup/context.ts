const emailInput = {
  class: 'signup__wrapper',
  name: 'email',
  label: 'Почта',
  inputType: 'email',
};
const loginInput = {
  class: 'signup__wrapper',
  name: 'login',
  label: 'Логин',
  inputType: 'text',
};

const nameInput = {
  class: 'signup__wrapper',
  name: 'first_name',
  label: 'Имя',
  inputType: 'text',
};

const surnameInput = {
  class: 'signup__wrapper',
  name: 'second_name',
  label: 'Фамилия',
  inputType: 'text',
};

const phoneInput = {
  class: 'signup__wrapper',
  name: 'phone',
  label: 'Телефон',
  inputType: 'tel',
};

const passwordInput = {
  class: 'signup__wrapper',
  name: 'password',
  label: 'Пароль',
  inputType: 'password',
};

const repeatPasswordInput = {
  class: 'signup__wrapper',
  name: 'repeat-password',
  label: 'Пароль (ещё раз)',
  inputType: 'password',
};

const signupButton = {
  class: 'signup__button',
  text: 'Зарегистрироваться',
  type: 'submit',
};

const signupLink = {
  class: '',
  href: '#',
  text: 'Войти',
};

export default {
  emailInput,
  loginInput,
  nameInput,
  surnameInput,
  phoneInput,
  passwordInput,
  repeatPasswordInput,
  signupButton,
  signupLink,
};
