import Handlebars from 'handlebars';
import loginTemplate from './index.tmpl';
import loginContext from './context';
import './styles.pcss';

const LoginPage = (context = loginContext) => Handlebars.compile(loginTemplate)(context);

export default LoginPage;
