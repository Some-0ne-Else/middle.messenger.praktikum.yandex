import Handlebars from "handlebars";
import { profileTemplate } from "./index.tmpl";
import { profileContext } from "./context";
import './styles.pcss';

export const ProfilePage = (context = profileContext) => Handlebars.compile(profileTemplate)(context);
