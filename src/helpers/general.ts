/* eslint-disable no-param-reassign */
export const trim = (value: string, symbols?: string) => {
  const valueWithoutSpaces = value.replace(/\s/g, '');

  if (symbols) {
    return symbols.split('').reduce((acc, symbol) => {
      const regExp = new RegExp(`${symbol}`, 'g');
      return acc.replace(regExp, '');
    }, valueWithoutSpaces);
  }
  return valueWithoutSpaces;
};

type Indexed<T = unknown> = {
  [key in string]: T;
};

const isObject = (value: Indexed) => typeof value === 'object' && value instanceof Object;

const copyObject = (source: Indexed, destination: Indexed = {}) => {
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in source) {
    if (isObject(source[key] as Indexed)) {
      if (destination[key]) {
        destination[key] = copyObject(destination[key] as Indexed, source[key] as Indexed);
      } else {
        destination[key] = copyObject(source[key] as Indexed);
      }
    }
    destination[key] = source[key];
  }
  return destination;
};

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
  return copyObject(rhs, lhs);
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }
  if (!isObject(object as Indexed)) {
    return object;
  }

  const splittedPath = path.split('.');

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const newObject = splittedPath.reduceRight((acc, path, index) => {
    if (index === splittedPath.length - 1) {
      acc = value as Indexed;
    }
    return { [path]: acc };
  }, {});

  return merge(object as Indexed, newObject);
}
