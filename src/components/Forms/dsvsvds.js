// let obj = {
//   names: 'dasha',
//   surname: 'masha',
//   thirdname: 'rita',
//   etc: 'goga',
// }

// let arr = [
//   {
//     item: 'ffo',
//     title: 'hoho',
//   },
//   {
//     item: 'derok',
//     title: 'biba',
//   }
// ]

// const mergeCartwithData = (outputData, items) => {
//   items.forEach((item, idx) => outputData[item])
//   return outputData;
// }

// mergeCartwithData(obj, arr)

// console.log(obj)

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }

