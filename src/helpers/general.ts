// eslint-disable-next-line import/prefer-default-export
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
