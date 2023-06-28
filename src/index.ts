import './vendor/normalize.css';
import './static/fonts/fonts.pcss';
import './style.pcss';

import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
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
  // render(rootId, LoginPage);
  render(rootId, NotFoundPage);

  // const root = document.querySelector(rootId);
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
