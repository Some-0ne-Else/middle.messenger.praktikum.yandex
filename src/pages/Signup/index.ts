import template from './index.tmpl';
import Block, { BlockInstance, EventsInProps } from '../../helpers/block';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';
import context, { inputErrorClass, errorTextClass } from './context';
import { validateForm } from '../../helpers/validation';

import './styles.pcss';

const emailInput = new Input(context.emailInput);
const loginInput = new Input(context.loginInput);
const nameInput = new Input(context.nameInput);
const surnameInput = new Input(context.surnameInput);
const phoneInput = new Input(context.phoneInput);
const passwordInput = new Input(context.passwordInput);
const repeatPasswordInput = new Input(context.repeatPasswordInput);
const signupButton = new Button(context.signupButton);
const signupLink = new Link(context.signupLink);

interface Props {
  class: string;
  emailInput: BlockInstance;
  loginInput: BlockInstance;
  nameInput: BlockInstance;
  surnameInput: BlockInstance;
  phoneInput: BlockInstance;
  passwordInput: BlockInstance;
  repeatPasswordInput: BlockInstance;
  signupButton: BlockInstance;
  signupLink: BlockInstance;
  targetForEvents: boolean;
  events: EventsInProps;
}

class Signup extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const SignupPage = new Signup({
  class: 'signup',
  emailInput,
  loginInput,
  nameInput,
  surnameInput,
  phoneInput,
  passwordInput,
  repeatPasswordInput,
  signupButton,
  signupLink,
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

export default SignupPage;
