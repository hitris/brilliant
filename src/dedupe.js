/**
 * 去除数组中的重复元素
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} array 将要元素去重的数组
 * @returns {Array} 返回去重后的新数组
 */
const dedupe = (array) => {
  return Array.from(new Set(array));
};
export default dedupe;
