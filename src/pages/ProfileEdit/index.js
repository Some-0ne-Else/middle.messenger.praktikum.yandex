import Handlebars from "handlebars";
import { profileEditTemplate } from "./index.tmpl";
import { profileEditContext } from "./context";
import './styles.pcss';

export const ProfileEditPage = (context = profileEditContext) => Handlebars.compile(profileEditTemplate)(context);
