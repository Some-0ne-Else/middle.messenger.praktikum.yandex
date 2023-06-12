import Handlebars from "handlebars";
import { profilePasswordTemplate } from "./index.tmpl";
import { profilePasswordContext } from "./context";
import './styles.pcss';

export const ProfilePasswordPage = (context = profilePasswordContext) => Handlebars.compile(profilePasswordTemplate)(context);
