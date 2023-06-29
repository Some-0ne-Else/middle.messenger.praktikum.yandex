import './vendor/normalize.css';
import './static/fonts/fonts.pcss';
import './style.pcss';

import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import InternalErrorPage from './pages/InternalError';
import render from './helpers/render';
import ChatListPage from './pages/ChatList';
import ProfilePage from './pages/Profile';
import ProfileEditPage from './pages/ProfileEdit';
import ProfilePasswordPage from './pages/ProfilePassword';
import SignupPage from './pages/Signup';
import IntroPage from './pages/IntroPage';

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
      case '/signup': {
        render(rootId, SignupPage);
        break;
      }
      case '/profile': {
        render(rootId, ProfilePage);
        break;
      }
      case '/profile-edit': {
        render(rootId, ProfileEditPage);
        break;
      }
      case '/profile-password': {
        render(rootId, ProfilePasswordPage);
        break;
      }
      case '/chat-list': {
        render(rootId, ChatListPage);
        break;
      }
      case '/emulate500': {
        render(rootId, InternalErrorPage);
        break;
      }
      case '/': {
        render(rootId, IntroPage);
        break;
      }
      default:
        render(rootId, NotFoundPage);
        break;
    }
  };

  getPage();
});
