/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-escape */
export const loginPattern = '^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-zd_-]{2,20}$';

export const passwordPattern = '(?=.*[A-Za-z])(?=.*\d)(?=.*[A-Z])[A-Za-z\d]{8,40}';

export const firstNameSecondNamePattern = '[A-ZА-ЯЁ]+[a-zA-Zа-яА-ЯЁё-]*';

// eslint-disable-next-line max-len
export const emailPattern = '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
export const phonePattern = '^[\\\\+]*\\\d{10,15}$';
