import template from './index.tmpl';
import Block, { BlockInstance, EventsInProps } from '../../helpers/block';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';
import context, { inputErrorClass, errorTextClass } from './context';
import { validateForm } from '../../helpers/validation';
import './styles.pcss';

const loginButton = new Button(context.loginButton);
const loginInput = new Input(context.loginInput);
const passwordInput = new Input(context.passwordInput);
const loginLink = new Link(context.loginLink);

interface Props {
  class: string;
  loginButton: BlockInstance;
  loginInput: BlockInstance;
  passwordInput: BlockInstance;
  loginLink: BlockInstance;
  targetForEvents: boolean;
  events: EventsInProps;
}

class Login extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const LoginPage = new Login({
  class: 'login',
  loginButton,
  loginInput,
  passwordInput,
  loginLink,
  targetForEvents: true,
  events: {
    'submit': (e: Event) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const { isFormValid, formData } = validateForm(form, inputErrorClass, errorTextClass);
      if (!isFormValid) {
        // eslint-disable-next-line no-console
        console.log('Validation error');
      } else {
        // eslint-disable-next-line no-console
        console.log(formData);
      }
    },
  },
});

export default LoginPage;
