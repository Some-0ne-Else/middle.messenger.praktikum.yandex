import Handlebars from 'handlebars';
import template from './index.tmpl';
import './styles.pcss';

const IntroPage = () => Handlebars.compile(template)({});

export default IntroPage;
