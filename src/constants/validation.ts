/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
export const loginPattern = '^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\\d_-]{2,20}$';
export const loginPatternDescription = `От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).`;

export const passwordPattern = '(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,40}';
export const passwordPatternDescription = 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.';

export const nameAndSurnamePattern = '[A-ZА-ЯЁ]+[a-zA-Zа-яА-ЯЁё-]*';
export const nameAndSurnamePatternDescription = 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).';

export const emailPattern = '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
export const emailPatternDescription = 'Латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.';

export const phonePattern = '^[\\\\+]*\\\d{10,15}$';
export const phonePatternDescription = 'От 10 до 15 символов, состоит из цифр, может начинается с плюса.';

export const noValidationPattern = '.*';
export const noValidationPatternDescription = '';

export const notEmptyPattern = '.+';
export const notEmptyPatternDescription = "Не должно быть пустым."
