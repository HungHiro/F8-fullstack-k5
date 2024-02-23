//b1
console.log(`b1`)
const arrA1 = [1, 2, 3, 4];
console.log(`Mảng 1 là: arr1 = [${arrA1}]`);
const arrA2 = [3, 4, 5, 6];
console.log(`Mảng 2 là: arr2 = [${arrA2}]`);
function intersection(arrA1, arrA2) {
    return arrA1.filter(element => arrA2.includes(element));
}
const result = intersection(arrA1, arrA2);
console.log(`Mảng cần tìm là: arr = [${result}]`);

//b2
console.log(`b2`)
var arr2 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
console.log(`Mảng ban đầu là: arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]]`)
function flattenArray(arr) {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    });
    return result;
}
var flatArray = flattenArray(arr2);
console.log(`Mảng sau khi bị là phẳng là: arr = [${flatArray}]`);

//b3
console.log(`b3`)
var arr3 = [["a", 1, true], ["b", 2, false]];
console.log(`Mảng ban đầu là: arr = [["a", 1, true], ["b", 2, false]]`);
var strings = [];
var numbers = [];
var booleans = [];
arr3.forEach(subArr => {
  subArr.forEach(item => {
    if (typeof item === 'string') {
      strings.push(item);
    } else if (typeof item === 'number') {
      numbers.push(item);
    } else if (typeof item === 'boolean') {
      booleans.push(item);
    }
  });
});
var result3 = [strings, numbers, booleans];
console.log(`Kết qủa sau khi phân loại là : arr = [${result3}]`);
