//B1
console.log('b1')
console.log('ủa giống b1 bvn d24')
//B2
console.log('b2')
console.log('ủa giống b2 bvn d24')
//B3
console.log('b3')
var myArray = [1, 2, 3];
console.log(`Mảng ban đầu là: myArray = [${myArray}]`);

Array.prototype.push2 = function() {
  for (var i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }
  return this.length;
};
myArray.push2(4); //Thêm 4
myArray.push2('năm'); //Thêm 'năm'
console.log(myArray);

//B4
console.log('b4')
var myArray4 = [1, 2, 3, 4, 5, 6];
console.log(`Mảng ban đầu là: myArray = [${myArray4}]`);
Array.prototype.filter2 = function(callback) {
  var filteredArray = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};
var filtered = myArray4.filter2(function(element) {
  return element > 3;
});

console.log(filtered); 