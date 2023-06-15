import Handlebars from "handlebars";
import { signupTemplate } from "./index.tmpl.js";
import { signupContext } from "./context.js";
import './styles.pcss';

export const SignupPage = (context = signupContext) => Handlebars.compile(signupTemplate)(context);
