import Handlebars from "handlebars";
import { loginTemplate } from "./index.tmpl.js";
import { loginContext } from "./context.js";
import './styles.pcss';

export const LoginPage = (context = loginContext) => Handlebars.compile(loginTemplate)(context);
