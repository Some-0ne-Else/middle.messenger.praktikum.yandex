import Handlebars from "handlebars";
import { template } from "./index.tmpl.js";
import './styles.pcss';

export const IntroPage = () => Handlebars.compile(template)();
