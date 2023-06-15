import Handlebars from "handlebars";
import { buttonTemplate } from "./index.tmpl.js";
import './styles.pcss';

type Props = {
  className: string;
  text: string;
  type: string;
}

export const Button = ({ className, text, type } : Props) => Handlebars.compile(buttonTemplate)({ className, text, type })
