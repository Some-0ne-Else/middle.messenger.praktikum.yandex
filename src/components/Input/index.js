import Handlebars from "handlebars";
import { inputTemplate } from "./index.tmpl.js";
import './styles.pcss';

export const Input = ({ className, name, type, label }) => Handlebars.compile(inputTemplate)({ className, name, type, label })
