import { loginPattern, passwordPattern } from '../../constants/validation';

const loginInput = {
  class: 'input login__wrapper',
  name: 'login',
  label: 'Логин',
  inputType: 'text',
  targetForEvents: true,
  pattern: loginPattern,
  events: {
    'blur': (e: Event) => {},
  },
};

const passwordInput = {
  class: 'input login__wrapper',
  name: 'password',
  label: 'Пароль',
  inputType: 'password',
  targetForEvents: true,
  pattern: passwordPattern,
};

const loginButton = {
  class: 'button login__button',
  text: 'Войти',
  type: 'submit',
};

const loginLink = {
  class: 'link login__link',
  href: '#',
  text: 'Зарегистрироваться',
};

export default {
  loginButton,
  loginInput,
  passwordInput,
  loginLink,
};
