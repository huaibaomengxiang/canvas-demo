export function getVal (obj, key) {
  return key.split('.').reduce((obj, name) => obj[name], obj)
}
/**
 * 对数组进行排序
 * @param {需要处理的数组} arr
 * @param {处理对象数组时需要传入的每项的标记属性} key
 * @param {是否是降序，默认升序} isDescend
 */
export function arrSort (arr, key, isDescend) {
  // 对每项是对象的数组排序
  arr.sort(function (a, b) {
    if (isDescend) return b[key] - a[key]
    else return a[key] - b[key]
  })
  return arr
}
