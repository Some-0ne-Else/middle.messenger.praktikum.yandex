import Handlebars from 'handlebars';
import inputTemplate from './index.tmpl';
import './styles.pcss';

type Props = {
  className: string;
  name: string;
  type: string;
  label: string;
};

const Input = ({ className, name, type, label }: Props) =>
  Handlebars.compile(inputTemplate)({
    className,
    name,
    type,
    label,
  });

export default Input;
