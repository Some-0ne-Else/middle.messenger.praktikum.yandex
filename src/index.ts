import './vendor/normalize.css';
import './static/fonts/fonts.pcss';
import './style.pcss'

import { LoginPage } from './pages/Login';
import { InternalErrorPage } from './pages/InternalError';
import { NotFoundPage } from './pages/NotFound';
import { SignupPage } from './pages/Signup';
import { ProfilePage } from './pages/Profile';
import { ProfileEditPage } from './pages/ProfileEdit';
import { ProfilePasswordPage } from './pages/ProfilePassword';
import { ChatListPage } from './pages/ChatList';
import { IntroPage } from './pages/IntroPage';

document.addEventListener("DOMContentLoaded", ()=>{
  const root = document.querySelector('#app');

  root!.innerHTML = '';

  const getPage =() => {
    switch(window.location.pathname) {
      case '/login':{
        return LoginPage();
      }
      case '/signup':{
        return SignupPage();
      }
      case '/profile':{
        return ProfilePage()
      }
      case '/profile-edit':{
        return ProfileEditPage()
      }
      case '/profile-password':{
        return ProfilePasswordPage()
      }
      case '/chat-list':{
        return ChatListPage()
      }
      case '/emulate500':{
        return InternalErrorPage()
      }
      case '/':{
        return IntroPage()
      }
      default:
        return NotFoundPage();
    }
  }

  root!.innerHTML = getPage();

})
