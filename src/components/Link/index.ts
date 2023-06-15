import Handlebars from "handlebars";
import { linkTemplate } from "./index.tmpl.js";
import './styles.pcss';

type Props = {
  className: string;
  href: string;
  text: string;
}

export const Link = ({ className, href, text }: Props) => Handlebars.compile(linkTemplate)({ className, href, text })
