const loginInput = {
  class: 'input login__wrapper',
  name: 'login',
  label: 'Логин',
  inputType: 'text',
  events: {
    'blur': () => {
      console.log('blur');
    },
    'focus': () => {
      console.log('focus');
    },
    'click': (e: Event) => {
      // console.log(e.target);
      console.log('click');
    },
  },
};

const passwordInput = {
  class: 'input login__wrapper',
  name: 'password',
  label: 'Пароль',
  inputType: 'password',
};

const loginButton = {
  class: 'button login__button',
  text: 'Войти',
  type: 'submit',
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log('click');
    },
    'focus': () => {
      console.log('focus');
    },
    'blur': () => {
      console.log('blur');
    },
  },
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
