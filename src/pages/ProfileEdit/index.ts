import Handlebars from 'handlebars';
import profileEditTemplate from './index.tmpl';
import profileEditContext from './context';
import './styles.pcss';

const ProfileEditPage = (context = profileEditContext) =>
  Handlebars.compile(profileEditTemplate)(context);

export default ProfileEditPage;
