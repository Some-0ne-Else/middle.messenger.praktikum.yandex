import Handlebars from "handlebars";
import { internalErrorTemplate } from "./index.tmpl";
import { internalErrorContext } from "./context";
import './styles.pcss';

export const InternalErrorPage = (context = internalErrorContext) => Handlebars.compile(internalErrorTemplate)(context);
