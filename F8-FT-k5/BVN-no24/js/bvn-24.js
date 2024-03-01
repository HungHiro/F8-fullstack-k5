//B1
console.log('b1');
function calculateSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== 'number') {
      return 'Lỗi: Tất cả các tham số phải là số.';
    }
    total += arguments[i];
  }
  return total;
}
// vd:
console.log(calculateSum(1, 2, 3, 4));
console.log(calculateSum(1, '2', 3));

// B2
console.log('b2');
Number.prototype.getCurrency = function(currencyUnit) {
  return this.toLocaleString() + ' ' + currencyUnit;
};

String.prototype.getCurrency = function(currencyUnit) {
  const number = parseFloat(this);
  if (isNaN(number)) {
    return 'Lỗi: Giá trị không phải là số.';
  }
  return number.toLocaleString() + ' ' + currencyUnit;
};

var price = 12000;
console.log(price.getCurrency('đ'));

var price = "12000000";
console.log(price.getCurrency('đ'));

//B3
console.log('b3');
const items = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

function buildNestedStructure(items) {
  let map = {}, result = [];
  items.forEach(item => {
    if (!item.children) item.children = [];
    map[item.id] = item;
    if (item.parent !== 0) {
      if (!map[item.parent]) {
        map[item.parent] = { children: [] };
      }
      map[item.parent].children.push(item);
    } else {
      result.push(item);
    }
  });
  result.forEach(item => {
    if (item.children.length === 0) {
      delete item.children;
    }
  });
  return result;
}

var categories = buildNestedStructure(items);
console.log(categories);

//B4
console.log('b4');
Array.prototype.reduce2 = function(callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const array = this;
  let accumulator = initialValue;
  let startIndex = 0;
  if (initialValue === undefined) {
    if (array.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};

// VD
const numbers = [1, 2, 8, 4, 0, 7];
const sum = numbers.reduce2((acc, current) => acc + current, 0);
console.log(sum);