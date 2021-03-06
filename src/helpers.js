export const isNumber = value => typeof value === 'number';
export const isEmpty = value => value == null || !(Object.keys(value) || value).length;
export const isNumeric = value => !isNaN(parseFloat(value)) && isFinite(value);
export const filterItems = (itemsToExclude, arrayToFilter) => arrayToFilter.filter(item => !itemsToExclude.includes(item));