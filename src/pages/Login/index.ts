import loginTemplate from './index.tmpl';
import Block, { BlockInstance } from '../../helpers/block';
import Button from '../../components/Button';
import Input from '../../components/Input';
import context from './context';

import './styles.pcss';

const loginButton = new Button(context.loginButton);
const loginInput = new Input(context.loginInput);
const passwordInput = new Input(context.passwordInput);

interface Props {
  class: string;
  loginButton: BlockInstance;
  loginInput: BlockInstance;
  passwordInput: BlockInstance;
}

class Login extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(loginTemplate, this.props);
  }
}

const LoginPage = new Login({
  class: 'login',
  loginButton,
  loginInput,
  passwordInput,
});

export default LoginPage;
