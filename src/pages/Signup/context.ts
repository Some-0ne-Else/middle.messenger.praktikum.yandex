import PATH from '../../constants/path';
import {
  loginPattern,
  passwordPattern,
  emailPattern,
  phonePattern,
  firstNameSecondNamePattern,
} from '../../constants/validation';
import { validateInput } from '../../helpers/validation';

export const inputErrorClass = 'input__input_error';

const onBlurEvent = {
  'blur': (e: Event) => {
    const input = e.target as HTMLInputElement;
    validateInput(input, inputErrorClass);
  },
};

const emailInput = {
  class: 'input signup__wrapper',
  name: 'email',
  label: 'Почта',
  inputType: 'email',
  targetForEvents: true,
  pattern: emailPattern,
  events: { ...onBlurEvent },
};
const loginInput = {
  class: 'input signup__wrapper',
  name: 'login',
  label: 'Логин',
  inputType: 'text',
  targetForEvents: true,
  pattern: loginPattern,
  events: { ...onBlurEvent },
};

const nameInput = {
  class: 'input signup__wrapper',
  name: 'first_name',
  label: 'Имя',
  inputType: 'text',
  targetForEvents: true,
  pattern: firstNameSecondNamePattern,
  events: { ...onBlurEvent },
};

const surnameInput = {
  class: 'input signup__wrapper',
  name: 'second_name',
  label: 'Фамилия',
  inputType: 'text',
  targetForEvents: true,
  pattern: firstNameSecondNamePattern,
  events: { ...onBlurEvent },
};

const phoneInput = {
  class: 'input signup__wrapper',
  name: 'phone',
  label: 'Телефон',
  inputType: 'tel',
  targetForEvents: true,
  pattern: phonePattern,
  events: { ...onBlurEvent },
};

const passwordInput = {
  class: 'input signup__wrapper',
  name: 'password',
  label: 'Пароль',
  inputType: 'password',
  targetForEvents: true,
  pattern: passwordPattern,
  events: { ...onBlurEvent },
};

const repeatPasswordInput = {
  class: 'input signup__wrapper',
  name: 'repeat-password',
  label: 'Пароль (ещё раз)',
  inputType: 'password',
  targetForEvents: true,
  pattern: passwordPattern,
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
