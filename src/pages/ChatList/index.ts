import Handlebars from 'handlebars';
import chatListTemplate from './index.tmpl';
import './styles.pcss';

const ChatListPage = () => Handlebars.compile(chatListTemplate)({});

export default ChatListPage;
