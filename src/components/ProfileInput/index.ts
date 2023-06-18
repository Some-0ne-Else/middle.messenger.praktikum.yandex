import Handlebars from 'handlebars';
import profileInputTemplate from './index.tmpl';
import './styles.pcss';

type Props = {
  className: string;
  name: string;
  type: string;
  label: string;
  disabled?: string;
  value: string;
};
const ProfileInput = ({ className, name, type, label, disabled, value }: Props) =>
  Handlebars.compile(profileInputTemplate)({
    className,
    name,
    type,
    label,
    disabled,
    value,
  });

export default ProfileInput;
