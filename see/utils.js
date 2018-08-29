export function getVal (obj, key) {
  return key.split('.').reduce((obj, name) => obj[name], obj)
}
