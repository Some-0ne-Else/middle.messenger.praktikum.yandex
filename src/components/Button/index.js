import Handlebars from "handlebars";
import { buttonTemplate } from "./index.tmpl.js";
import './styles.pcss';

export const Button = ({ className, text, type }) => Handlebars.compile(buttonTemplate)({ className, text, type })
