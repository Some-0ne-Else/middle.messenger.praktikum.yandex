import Handlebars from 'handlebars';
import signupTemplate from './index.tmpl';
import signupContext from './context';
import './styles.pcss';

const SignupPage = (context = signupContext) => Handlebars.compile(signupTemplate)(context);

export default SignupPage;
