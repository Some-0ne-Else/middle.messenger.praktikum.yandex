import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

const loginButton = {
  className: 'login__button',
  text: 'Войти',
  type: 'submit',
};

const loginInput = {
  className: 'login__wrapper',
  name: 'login',
  label: 'Логин',
  type: 'text',
};

const passwordInput = {
  className: 'login__wrapper',
  name: 'password',
  label: 'Пароль',
  type: 'password',
};

const loginLink = {
  className: '',
  href: '#',
  text: 'Зарегистрироваться',
};

const loginContext = {
  loginInput: Input(loginInput),
  passwordInput: Input(passwordInput),
  loginButton: Button(loginButton),
  loginLink: Link(loginLink),
};

export default loginContext;
