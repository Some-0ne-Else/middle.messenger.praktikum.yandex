import { v4 as generateUUID } from 'uuid';

import EventBus, { EventBusInstance } from './eventBus';
import shallowEqual from './shalowEqual';

export type ComponentProps = Record<string, any>;

type EventsInProps = {
  [key: string]: () => void;
};

export type BlockInstance = InstanceType<typeof Block>;

type Meta = {
  tagName: string;
  props: ComponentProps;
};

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  props: ComponentProps;

  eventBus: () => EventBusInstance;

  private _element: HTMLElement | null = null;

  public id = generateUUID();

  public children: Record<string, BlockInstance>;

  private _meta: Meta;

  constructor(tagName = 'div', propsWithChildren = {}) {
    const eventBus = new EventBus();

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this._meta = {
      tagName,
      props,
    };

    this.children = children;

    this.props = this._makePropsProxy({ ...props, id: this.id });

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: ComponentProps) {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {}

  public dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: ComponentProps, newProps: ComponentProps) {
    const isPropsChanged = this.componentDidUpdate(oldProps, newProps);
    if (isPropsChanged) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: ComponentProps, newProps: ComponentProps) {
    const isPropsEqual = shallowEqual({ a: oldProps, b: newProps });
    console.log('isPropsEqual', isPropsEqual);
    return isPropsEqual;
  }

  _addEvents() {
    const events: EventsInProps = this.props?.events;

    Object.entries(events).forEach(([eventName, eventFunction]) => {
      this._element?.addEventListener(eventName, eventFunction);
    });
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
    const fragment = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._element!.innerHTML = '';
    this._element!.append(fragment);
    this._addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: Record<string, unknown>) {
    const checkPrivateProp = (prop: string | symbol) => prop.toString().startsWith('_');
    const proxyProps = new Proxy(props, {
      get(target, prop) {
        if (checkPrivateProp(prop)) {
          throw new Error('Отказано в доступе');
        }
        const value = target[prop as keyof ComponentProps];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value: unknown) {
        if (checkPrivateProp(prop)) {
          throw new Error('Нет прав');
        } else {
          // eslint-disable-next-line no-param-reassign
          target[prop as keyof ComponentProps] = value;
          return true;
        }
      },
      deleteProperty() {
        throw new Error('Нет прав');
      },
    });
    return proxyProps;
  }

  protected compile(template: string, context: any /* TS */) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      contextAndStubs[name] = `div data-id="${component.id}"></div>`;
    });

    const compiledHtml = Handlebars.compile(template)(contextAndStubs);

    const temp = document.createElement('template');

    temp.innerHTML = compiledHtml;

    Object.entries(this.children).forEach(([, component]) => {
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

      if (!stub) {
        return;
      }

      component.getContent()?.append(...Array.from(stub.childNodes));
      stub.replaceWith(component.getContent()!);
    });

    return temp.content;
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
