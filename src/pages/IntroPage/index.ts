import template from './index.tmpl';
import Block from '../../helpers/block';
import './styles.pcss';

interface Props {
  class: string;
}

class Intro extends Block {
  constructor(props: Props) {
    super('main', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}

const IntroPage = new Intro({
  class: 'intro-page',
});

export default IntroPage;
