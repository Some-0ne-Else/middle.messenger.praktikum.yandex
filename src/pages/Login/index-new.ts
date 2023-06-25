import loginTemplate from './index.tmpl';
import Block, { BlockInstance } from '../../helpers/block';
import props from './context-new';
import Button from '../../components/Button/index-new';
import './styles.pcss';

// const loginButtonInstance = new Button(props.loginButton);

interface Props {
  loginButton: BlockInstance;
  events: {};
}

class Login extends Block {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile(loginTemplate, this.props);
  }
}

export default Login;
