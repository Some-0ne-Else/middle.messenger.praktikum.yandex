import PATH from '../../constants/path';
import {
  loginPattern,
  loginPatternDescription,
  passwordPattern,
  passwordPatternDescription,
} from '../../constants/validation';
import { validateInput } from '../../helpers/validation';

export const inputErrorClass = 'input__input_error';
export const textErrorClass = 'input__error-text_visible';

const onBlurEvent = {
  'blur': (e: Event) => {
    const input = e.target as HTMLInputElement;
    validateInput(input, inputErrorClass, textErrorClass);
  },
};

const loginInput = {
  class: 'input login__wrapper',
  name: 'login',
  label: 'Логин',
  inputType: 'text',
  targetForEvents: true,
  pattern: loginPattern,
  errorText: loginPatternDescription,
  events: { ...onBlurEvent },
};

const passwordInput = {
  class: 'input login__wrapper',
  name: 'password',
  label: 'Пароль',
  inputType: 'password',
  targetForEvents: true,
  pattern: passwordPattern,
  errorText: passwordPatternDescription,
  events: { ...onBlurEvent },
};

const loginButton = {
  class: 'button login__button',
  text: 'Войти',
  type: 'submit',
};

const loginLink = {
  class: 'link login__link',
  href: PATH.SIGNUP,
  text: 'Зарегистрироваться',
};

export default {
  loginButton,
  loginInput,
  passwordInput,
  loginLink,
};
