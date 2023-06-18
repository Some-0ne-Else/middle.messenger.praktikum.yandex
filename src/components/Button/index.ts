import Handlebars from 'handlebars';
import buttonTemplate from './index.tmpl';
import './styles.pcss';

interface Props {
  className: string
  text: string
  type: string
}

const Button = ({ className, text, type }: Props) => Handlebars.compile(buttonTemplate)({ className, text, type });

export default Button;
