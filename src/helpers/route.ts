import Block, { ComponentProps } from './block';
import render from './render';

// TODO вынести в утилсы
const isEqual = (newPathname: string, pathname: string) => newPathname === pathname;

class Route {
  _pathname: string;

  _blockClass: Block;

  _block: null | Block;

  _props: ComponentProps;

  constructor(pathname: string, view: Block, props: ComponentProps) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (!this._block) {
      // @ts-expect-error TODO add proper type
      this._block = new this._blockClass();
      render(this._props.rootQuery, this._block!);
      return;
    }

    this._block.show();
  }
}

export default Route;

// const route = new Route('/buttons', Button, {
//   rootQuery: '.app',
// });

// route.render();

// console.log(route._pathname, route._props); // /buttons, {rootQuery: '.app'}

// route.navigate('/buttons'); // show
// route.navigate('/trash'); // не будет никакого лога
// route.leave(); // hide
