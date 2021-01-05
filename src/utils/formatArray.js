export default function(array, maxNum) {
  let tempArray = [];
  let count = 0;
  return array.reduce((p, c, index, array) => {
    /**
     * 如果临时数组累计了5个数据则push
     * 重置数据
     * 将这次的数据push到临时数组中
     */
    if (count < maxNum) {
      tempArray.push(c);
      count++;
    }
    if (count === maxNum || index === array.length - 1) {
      p.push(tempArray);
      tempArray = [];
      count = 0;
    }
    return p;
  }, []);
}
