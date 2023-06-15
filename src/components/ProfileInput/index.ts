import Handlebars from "handlebars";
import { profileInputTemplate } from "./index.tmpl.js";
import './styles.pcss';

type Props = {
  className: string;
  name: string;
  type: string;
  label: string;
  disabled?: string;
  value: string;
}
export const ProfileInput = ({ className, name, type, label, disabled, value }: Props) => Handlebars.compile(profileInputTemplate)({ className, name, type, label, disabled, value })
