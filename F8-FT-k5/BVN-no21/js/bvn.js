//b1
console.log('b1');
const arr1 = [5, 1, 4, 2, 8, 10, 23];
console.log(`Mảng ban đầu là arr = [${arr1}]`)
function getMinAndMax(arr) {
    if (arr.length === 0) {
      return 'Mảng rỗng';
    }
    let max = arr[0];
    let min = arr[0];
    let getMax = 0;
    let getMin = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        getMax = i;
      }
      if (arr[i] < min) {
        min = arr[i];
        getMin = i;
      }
    }
    return {
        maxNum: max,
        maxNumAddress: getMax,
        minNum: min,
        minNumAddress: getMin
    };
};
const result1 = getMinAndMax(arr1);
console.log(result1);

//b2
console.log('b2');
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//thử kết quả khác bằng mẳng dưới đây
// const arr2 = [1, 4, 6, 8, 9, 10, 12];
console.log(`Mảng ban đầu là: arr = [${arr2}]`)
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function averagePrime(arr) {
  let total = 0;
  let countNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      total += arr[i];
      countNum++;
    }
  }
  if (countNum === 0) {
    return "Không có số nguyên tố";
  }
  return total / countNum;
}
const result2 = averagePrime(arr2);
result2 === "Không có số nguyên tố" ? console.log("Không có số nguyên tố") : console.log(result2);

//b3
console.log('b3');
const arr3 = [1, 2, 3, 3, 5, 4, 5, 7, 7, 5, 6];
console.log(`Mảng ban đầu là: arr = [${arr3}]`);
function filterArr(arr) {
  let arrAfter = [];
  for (let i = 0; i < arr.length; i++) {
    let isAlive = false;
    for (let j = 0; j < arrAfter.length; j++) {
      if (arr[i] === arrAfter[j]) {
        isAlive = true;
        break;
      }
    }
    if (!isAlive) {
      arrAfter.push(arr[i]);
    }
  }
  return arrAfter;
};
const result3 = filterArr(arr3);
console.log('Mảng mới là:', result3);

//b4
console.log('b4');
const arr4 = [2, 1, 5, 4, 3, 6, 14, 8, 21, 10, 13, 12, 11];
console.log(`Mảng ban đầu là: arr = [${arr4}]`);
const addNum4 = 23, n4 = 10;
console.log(`Số cần chèn là: ${addNum4}, vị trí chèn là ${n4}`)
function ascendingArr(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function chenSo(arr, addNum4) {
  let index4 = n4;
  for (let i = 0; i < n4; i++) {
    if (arr[i] > addNum4) {
      index4 = i;
      break;
    }
  }
  arr.splice(index4, 0, addNum4);
  return arr;
}
const result4 = chenSo(arr4, addNum4);
n4 > arr4.length ? console.log(`Vị trí chèn lớn hơn độ dài của mảng nên số sẽ chèn vào cuối mảng, mảng mới sau khi chèn là: arr = [${result4}]`) : console.log('Mảng mới sau khi chèn là: arr = ', result4);
console.log(typeof(result4))