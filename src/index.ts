import './vendor/normalize.css';
import './static/fonts/fonts.pcss';
import './style.pcss';

import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import InternalErrorPage from './pages/InternalError';
import render from './helpers/render';

const rootId = '#app';

// const loginButton2 = {
//   class: 'button login__button',
//   text: 'Войти',
//   type: 'submit',
//   events: {
//     click: (e: Event) => {
//       e.preventDefault();
//       console.log('click');
//     },
//   },
// };

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector(rootId);
  root!.innerHTML = '';
  const { pathname } = window.location;

  const getPage = () => {
    switch (pathname) {
      case '/login': {
        render(rootId, LoginPage);
        break;
      }
      // case '/signup': {
      //   return SignupPage();
      // }
      // case '/profile': {
      //   return ProfilePage();
      // }
      // case '/profile-edit': {
      //   return ProfileEditPage();
      // }
      // case '/profile-password': {
      //   return ProfilePasswordPage();
      // }
      // case '/chat-list': {
      //   return ChatListPage();
      // }
      case '/emulate500': {
        render(rootId, InternalErrorPage);
        break;
      }
      // case '/': {
      //   return IntroPage();
      // }
      default:
        render(rootId, NotFoundPage);
        break;
    }
  };

  getPage();
});
