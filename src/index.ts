import './vendor/normalize.css';
import './static/fonts/fonts.pcss';
import './style.pcss';

import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import InternalErrorPage from './pages/InternalError';
import render from './helpers/render';
import ChatListPage from './pages/ChatList';
import ProfilePage from './pages/Profile';

const rootId = '#app';

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
      case '/profile': {
        render(rootId, ProfilePage);
        break;
      }
      // case '/profile-edit': {
      //   return ProfileEditPage();
      // }
      // case '/profile-password': {
      //   return ProfilePasswordPage();
      // }
      case '/chat-list': {
        render(rootId, ChatListPage);
        break;
      }
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
