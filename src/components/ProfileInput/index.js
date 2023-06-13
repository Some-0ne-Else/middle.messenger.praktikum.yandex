import Handlebars from "handlebars";
import { profileInputTemplate } from "./index.tmpl.js";
import './styles.pcss';

export const ProfileInput = ({ className, name, type, label, disabled, value }) => Handlebars.compile(profileInputTemplate)({ className, name, type, label, disabled, value })
