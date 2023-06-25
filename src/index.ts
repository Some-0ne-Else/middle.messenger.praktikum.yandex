import './vendor/normalize.css';
import './static/fonts/fonts.pcss';
import './style.pcss';

// import InternalErrorPage from './pages/InternalError';
// import NotFoundPage from './pages/NotFound';
// import SignupPage from './pages/Signup';
// import ProfilePage from './pages/Profile';
// import ProfileEditPage from './pages/ProfileEdit';
// import ProfilePasswordPage from './pages/ProfilePassword';
// import ChatListPage from './pages/ChatList';
// import IntroPage from './pages/IntroPage';

import LoginPage from './pages/Login/index-new';
import Button from './components/Button/index-new';
import render from './draft/render';

const rootId = '#app';

const loginButton = {
  className: 'login__button',
  text: 'Войти',
  type: 'submit',
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log('click');
    },
  },
};

const loginButton2 = {
  className: 'login__button',
  text: 'Войти2',
  type: 'submit',
  events: {
    click: (e: Event) => {
      e.preventDefault();
      console.log('click2');
    },
  },
};
document.addEventListener('DOMContentLoaded', () => {
  // const root = document.querySelector('#app');
  const buttonInstance = new Button(loginButton);
  const buttonInstance2 = new Button(loginButton2);
  const LoginInstance = new LoginPage({
    loginButton: buttonInstance,
    // events: {},
  });

  render(rootId, LoginInstance);

  setTimeout(() => {
    buttonInstance.setProps({
      text: 'Войти222',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          console.log('click2');
        },
      },
    });
  }, 2000);

  // setTimeout(() => {
  //   console.log('--------------');
  //   LoginInstance.setProps({
  //     loginButton: buttonInstance2,
  //     // events: {},
  //   });
  // }, 3000);

  // root!.innerHTML = '';

  // const getPage = () => {
  //   switch (window.location.pathname) {
  //     case '/login': {
  //       return LoginPage();
  //     }
  //     case '/signup': {
  //       return SignupPage();
  //     }
  //     case '/profile': {
  //       return ProfilePage();
  //     }
  //     case '/profile-edit': {
  //       return ProfileEditPage();
  //     }
  //     case '/profile-password': {
  //       return ProfilePasswordPage();
  //     }
  //     case '/chat-list': {
  //       return ChatListPage();
  //     }
  //     case '/emulate500': {
  //       return InternalErrorPage();
  //     }
  //     case '/': {
  //       return IntroPage();
  //     }
  //     default:
  //       return NotFoundPage();
  //   }
  // };

  // root!.innerHTML = getPage();
});
