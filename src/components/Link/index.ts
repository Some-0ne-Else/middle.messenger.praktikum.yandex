import Handlebars from 'handlebars';
import linkTemplate from './index.tmpl';
import './styles.pcss';

type Props = {
  className: string;
  href: string;
  text: string;
};

const Link = ({ className, href, text }: Props) =>
  Handlebars.compile(linkTemplate)({ className, href, text });

export default Link;
