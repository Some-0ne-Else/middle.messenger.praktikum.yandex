import EventBus from './eventBus';
import shallowEqual from '../helpers/shalowEqual';

type Meta = {
  tagName: string;
  props: unknown;
};

type ComponentProps = Record<string, unknown>;

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  props: ComponentProps;

  eventBus: () => EventBus;

  _element: HTMLElement | null = null;

  _meta: Meta;

  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount(/* oldProps */) {
    console.log('componentDidMount');
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: ComponentProps, newProps: ComponentProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: ComponentProps, newProps: ComponentProps) {
    const isPropsEqual = shallowEqual({ a: oldProps, b: newProps });
    console.log(isPropsEqual);
    if (isPropsEqual) {
      return false;
    }
    return true;
  }

  setProps = (nextProps: ComponentProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...this.props }, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element!.innerHTML = block;
  }

  // Может переопределять пользователь, необязательно трогать
  render() {
    return '';
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: Record<string, unknown>) {
    const checkPrivateProp = (prop: string | symbol) => prop.toString().startsWith('_');
    const proxyProps = new Proxy(props, {
      get(target, prop) {
        if (checkPrivateProp(prop)) {
          throw new Error('Отказано в доступе');
        }
        const value = target[prop as keyof typeof props];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value: unknown) {
        if (checkPrivateProp(prop)) {
          throw new Error('Нет прав');
        } else {
          // eslint-disable-next-line no-param-reassign
          target[prop as keyof typeof props] = value;
          return true;
        }
      },
      deleteProperty() {
        throw new Error('Нет прав');
      },
    });
    return proxyProps;
  }

  _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  show() {
    this.getContent()!.style.display = 'block';
  }

  hide() {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
