export const randomId = (prefix = '') => `${prefix}-${Math.round((Math.random() * 36 ** 12)).toString(36)}`

