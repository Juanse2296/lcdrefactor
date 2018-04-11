export const isNumber = val => typeof val === 'number';
export const isEmpty = val => val == null || !(Object.keys(val) || val).length;