import Handlebars from "handlebars";
import { linkTemplate } from "./index.tmpl.js";
import './styles.pcss';

export const Link = ({ className, href, text }) => Handlebars.compile(linkTemplate)({ className, href, text })
