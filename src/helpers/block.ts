import { v4 as generateUUID } from 'uuid';
import Handlebars from 'handlebars';

import EventBus, { EventBusInstance } from './eventBus';
import shallowEqual from './shalowEqual';

export type ComponentProps = Record<string, any>;

export type EventsInProps = {
  [key: string]: (e: Event) => void;
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

  static attributes = ['class', 'href', 'type'];

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
    Object.entries(this.props).forEach(([key, value]) => {
      if (Block.attributes.includes(key)) {
        this._element!.setAttribute(key, value);
      }
    });
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
    const isPropsEqual = this.componentDidUpdate(oldProps, newProps);
    if (!isPropsEqual) {
      this._removeEvents(oldProps);
      Object.keys(this.children).forEach((key) => {
        this.children[key].setProps(newProps[key].props);
      });

      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps: ComponentProps, newProps: ComponentProps) {
    const isPropsEqual = shallowEqual({ a: oldProps, b: newProps });
    return isPropsEqual;
  }

  private _addEvents() {
    const events: EventsInProps = this.props?.events ?? {};

    Object.entries(events).forEach(([eventName, eventFunction]) => {
      if (this.props.targetForEvents) {
        const target = this._element?.querySelector('[targetForEvents=true]');
        target?.addEventListener(eventName, eventFunction);
      } else this._element?.addEventListener(eventName, eventFunction);
    });
  }

  private _removeEvents(oldProps: ComponentProps) {
    const events: EventsInProps = oldProps?.events;
    if (!events) {
      return;
    }
    Object.entries(events).forEach(([eventName, eventFunction]) => {
      if (this.props.targetForEvents) {
        const target = this._element?.querySelector('[targetForEvents=true]');
        target?.removeEventListener(eventName, eventFunction);
      } else this._element?.removeEventListener(eventName, eventFunction);
    });
  }

  public setProps = (nextProps: ComponentProps) => {
    if (!nextProps) {
      return;
    }
    const oldProps = { ...this.props };
    Object.assign(this.props, nextProps);
    this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
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

  protected compile(template: string, context: Record<string, unknown>) {
    const contextAndStubs = { ...context };
    Object.entries(this.children).forEach(([name, { id }]) => {
      contextAndStubs[name] = `<div data-id="${id}"></div>`;
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

  private _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  public show() {
    this.getContent()!.style.display = 'block';
  }

  public hide() {
    this.getContent()!.style.display = 'none';
  }
}

export default Block;
