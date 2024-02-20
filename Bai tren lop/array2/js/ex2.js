/*
reduce():

- Cú pháp:
result = array.reduce(callback, initialValue)

callback: 3 tham số
+ preValue
+ currentValue
+ index

Cách hoạt động:
1. Có initialValue: Vòng lặp sẽ chạy từ phần tử có index = 0 (chạy từ đầu)
- preValue của lần chạy đầ tiên sẽ là initialValue
- currentValue: Giá trị từng phần tử của mảng
2. K có initialValue: Vòng lặp sẽ chạy từ phần tử có index = 1 (bỏ qua cái đầu tiên)
- preValue của lần chạy đầu tiên sẽ là phần tử có index = 0
- currentValue: Giá trị từng phần tử của mảng

preValue của lần lặp sau sẽ là return của lần lặp trc
Giá trị của vòng lặp reduce --> Return của lần cuối cùng
*/
var numbers = [5, 10, 15, 20, 25];
result = numbers.reduce(function (preValue, currentValue, index) {
    console.log(preValue, currentValue, index);
    return preValue + currentValue ;
}, 0);
console.log(result);

// b1: Tìm phần tử lớn nhất + dùng reduce;
var numbers1 = [5, 10, 15, 31, 20, 25];
maxNum = numbers1.reduce(function (max, number) {
    return max < number ? number : max;
});
console.log(maxNum);

//b2: Tìm phần tử ở arrA mà k có ở arrB
var arrA = [1, 3, 5, 7, 2, 7, 9];
var arrB = [1, 5, 7];

var difArr = arrA.reduce(function(prev,current) {
    !arrB.includes(current) && prev.push(current);
    return prev;
}, [])
console.log(difArr)

// Tham chiếu:
var a = ["nguyen nguyen", "tuanhung@gmail.com"];
var b = a;
b[1] = "admin@gmail.com";
console.log(a);
console.log(b);
// đổi b --> vẫn sẽ đổi cả a
// dùng copy array để k bị v (dùng các phương thức có khả năng trả về 1 mảng)

var b = a.map(function(item) {
    return item
});
b = [...a]; // spread operator
b[1] = "admin@gmail.com";
// 2 cách trên chỉ copy phần bên ngoài (nông), muốn copy hết thì phải copy tiếp bên trong

// dùng JSON (deep copy)
console.log(a);
console.log(b);