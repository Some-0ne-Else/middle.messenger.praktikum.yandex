const props = {
  name: 'Abby',
  chat: 'the last of us. Part II',
  getChat() {
    this._privateMethod();
  },
  _privateMethod() {
    // eslint-disable-next-line no-console
    console.log(this._privateProp);
  },
  __privateMethodToo() {},
  _privateProp: 'Нельзя получить просто так',
};

const checkPrivateProp = (prop: string | symbol) => prop.toString().startsWith('_');

const proxyProps = new Proxy(props, {
  get(target, prop) {
    if (checkPrivateProp(prop)) {
      throw new Error('Отказано в доступе');
    }
    const value = target[prop as keyof typeof props];
    return typeof value === 'function' ? value.bind(target) : value;
  },
  set(target, prop, value) {
    if (checkPrivateProp(prop)) {
      throw new Error('Нет прав');
    } else {
      // eslint-disable-next-line no-param-reassign
      target[prop as keyof typeof props] = value;
      return true;
    }
  },
  deleteProperty(target, prop) {
    if (checkPrivateProp(prop)) {
      throw new Error('Нет прав');
    } else {
      // eslint-disable-next-line no-param-reassign
      delete target[prop as keyof typeof props];
      return true;
    }
  },
});

export default proxyProps;
