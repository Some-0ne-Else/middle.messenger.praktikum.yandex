import './vendor/normalize.css';
import './static/fonts/fonts.pcss';
import './style.pcss';

import LoginPage from './pages/Login';
import NotFoundPage from './pages/NotFound';
import InternalErrorPage from './pages/InternalError';
import render from './helpers/render';
import ChatPage from './pages/Chats';
import ProfilePage from './pages/Profile';
import ProfileEditPage from './pages/ProfileEdit';
import ProfilePasswordPage from './pages/ProfilePassword';
import SignupPage from './pages/Signup';
import IntroPage from './pages/IntroPage';
import PATH from './constants/path';

const rootId = '#app';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector(rootId);
  root!.innerHTML = '';
  const { pathname } = window.location;

  const getPage = () => {
    switch (pathname) {
      case PATH.LOGIN: {
        render(rootId, LoginPage);
        break;
      }
      case PATH.SIGNUP: {
        render(rootId, SignupPage);
        break;
      }
      case PATH.PROFILE: {
        render(rootId, ProfilePage);
        break;
      }
      case PATH.PROFILE_EDIT: {
        render(rootId, ProfileEditPage);
        break;
      }
      case PATH.PROFILE_PASSWORD: {
        render(rootId, ProfilePasswordPage);
        break;
      }
      case PATH.CHATS: {
        render(rootId, ChatPage);
        break;
      }
      case PATH.INTERNAL_ERROR: {
        render(rootId, InternalErrorPage);
        break;
      }
      case PATH.ROOT: {
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
