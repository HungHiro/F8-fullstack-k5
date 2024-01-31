/*
Closure:
Như vd ở dưới, hàm show nếu k đc gọi ("show()") thì sẽ k sử dụng đc => closure
=> là hàm có thể truy cập vào các thuộc tính (biến) của scope chứa nó
3 phạm vi mà hàm closure truy cập đc:
    - Biến cục bộ của chính nó
    - Biến cục bộ của hàm cha
    - Biến toàn cục
*/
// vd:
function init() {
    console.log("init");
    function show() {
        console.log("show");
    }
    return show;
};
var show = init();
show();

function sum(a) {
    return function add(b) {
        return a + b;
    };
};

var a = 10;
var add = sum(a);
var b = 20;
var c = 30;
console.log(add(a));
console.log(add(c));

/*Expression function

*/
var getMessage = function () {
    console.log("Hoc js");
};
getMessage();

// IIFE: định nghĩa hàm r thực thi luôn => bọc ngoài hàm = dấu ngoặc tròn rồi gọi bằng dấu ngoặc tròn ngay sau, vd:
(function (msg) {
    console.log("hoc tai f88", msg);
})("ahhii");
