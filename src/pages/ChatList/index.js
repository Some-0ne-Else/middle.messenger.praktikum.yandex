import Handlebars from "handlebars";
import { chatListTemplate } from "./index.tmpl";
import './styles.pcss';

export const ChatListPage = () => Handlebars.compile(chatListTemplate)();
