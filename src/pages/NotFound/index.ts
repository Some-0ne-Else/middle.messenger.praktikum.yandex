import Handlebars from "handlebars";
import { notFoundTemplate } from "./index.tmpl";
import { notFoundContext } from "./context";
import './styles.pcss';

export const NotFoundPage = (context = notFoundContext) => Handlebars.compile(notFoundTemplate)(context);
