import PATH from '../../constants/path';
import {
  loginPattern,
  passwordPattern,
  emailPattern,
  phonePattern,
  nameAndSurnamePattern,
  nameAndSurnamePatternDescription,
  emailPatternDescription,
  loginPatternDescription,
  phonePatternDescription,
  passwordPatternDescription,
} from '../../constants/validation';
import { validateInput } from '../../helpers/validation';

export const inputErrorClass = 'input__input_error';
export const errorTextClass = 'input__error-text_visible';

const onBlurEvent = {
  'blur': (e: Event) => {
    const input = e.target as HTMLInputElement;
    validateInput(input, inputErrorClass, errorTextClass);
  },
};

const emailInput = {
  class: 'input signup__wrapper',
  name: 'email',
  label: 'Почта',
  inputType: 'email',
  targetForEvents: true,
  pattern: emailPattern,
  errorText: emailPatternDescription,
  events: { ...onBlurEvent },
};
const loginInput = {
  class: 'input signup__wrapper',
  name: 'login',
  label: 'Логин',
  inputType: 'text',
  targetForEvents: true,
  pattern: loginPattern,
  errorText: loginPatternDescription,
  events: { ...onBlurEvent },
};

const nameInput = {
  class: 'input signup__wrapper',
  name: 'first_name',
  label: 'Имя',
  inputType: 'text',
  targetForEvents: true,
  pattern: nameAndSurnamePattern,
  errorText: nameAndSurnamePatternDescription,
  events: { ...onBlurEvent },
};

const surnameInput = {
  class: 'input signup__wrapper',
  name: 'second_name',
  label: 'Фамилия',
  inputType: 'text',
  targetForEvents: true,
  pattern: nameAndSurnamePattern,
  errorText: nameAndSurnamePatternDescription,
  events: { ...onBlurEvent },
};

const phoneInput = {
  class: 'input signup__wrapper',
  name: 'phone',
  label: 'Телефон',
  inputType: 'tel',
  targetForEvents: true,
  pattern: phonePattern,
  errorText: phonePatternDescription,
  events: { ...onBlurEvent },
};

const passwordInput = {
  class: 'input signup__wrapper',
  name: 'password',
  label: 'Пароль',
  inputType: 'password',
  targetForEvents: true,
  pattern: passwordPattern,
  errorText: passwordPatternDescription,
  events: { ...onBlurEvent },
};

const repeatPasswordInput = {
  class: 'input signup__wrapper',
  name: 'repeat-password',
  label: 'Пароль (ещё раз)',
  inputType: 'password',
  targetForEvents: true,
  pattern: passwordPattern,
  errorText: passwordPatternDescription,
  events: { ...onBlurEvent },
};

const signupButton = {
  class: 'button signup__button',
  text: 'Зарегистрироваться',
  type: 'submit',
};

const signupLink = {
  class: 'link signup__link',
  href: PATH.LOGIN,
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
