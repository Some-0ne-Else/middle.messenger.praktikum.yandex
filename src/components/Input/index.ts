import Handlebars from "handlebars";
import { inputTemplate } from "./index.tmpl.js";
import './styles.pcss';

type Props = {
  className: string;
  name: string;
  type: string;
  label: string;
}

export const Input = ({ className, name, type, label }: Props) => Handlebars.compile(inputTemplate)({ className, name, type, label })
