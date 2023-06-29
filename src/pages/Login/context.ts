const loginButton = {
  class: 'button login__button',
  text: 'Войти',
  type: 'submit',
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log('click');
    },
  },
};
const loginInput = {
  class: 'input login__wrapper',
  name: 'login',
  label: 'Логин',
  inputType: 'text',
};

const passwordInput = {
  class: 'input login__wrapper',
  name: 'password',
  label: 'Пароль',
  inputType: 'password',
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
