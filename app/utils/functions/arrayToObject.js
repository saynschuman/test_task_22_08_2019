/* eslint-disable no-param-reassign */
export const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item
    return obj
  }, {})

/* eslint-disable no-param-reassign */
export const arrayToObjectBool = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item
    return { ...obj, [item[keyField]]: false }
  }, {})
