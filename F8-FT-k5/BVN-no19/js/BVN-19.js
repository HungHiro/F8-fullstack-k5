// b1
var a1 = Math.floor(Math.random() * 100 - 50);
// Thử số khác bằng biến dưới đây:
// var a1 = -20;
console.log(`Số N ban đầu là: ${a1} (F5 để hiển thị kết quả cho số khác nhé, số từ 40 trở lên có thể đợi tính hơi lâu)`)
function isPrime1(n) {
    if (n <= 0 || n % 1 !== 0) return false;
    return true;
}
function fibonacci(n) {
    if (isPrime1(n) && n <= 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function showSeriesFibonacci(b) {
    let result = "";
    function serie(n) {
        if (n > 0) {
            serie(n - 1);
            result += fibonacci(n) + ", ";
        }
    }
    serie(b);
    return result.slice(0, -2);
}
let b1 = showSeriesFibonacci(a1);
if (a1 < 0) {
    console.log(`Số k phù hợp, nhập lại số khác nhé`);
} else {
    console.log(`Dãy fibonacci với ${a1} phần tử là: ${b1}`);
}

// b2
var a2 = Math.floor(Math.random() * 1000 - 200);
// Thử số khác bằng biến dưới đây:
// var a2 = -111;
console.log(`Số cần đảo ngược là: ${a2} (F5 để hiển thị kết quả cho số khác nhé)`)
var b2 = 0;
if (a2 < 0) {
    b2 = -1 * a2 + "";
} else {
    b2 = a2 + "";
}
function isPrime2(n) {
    if (n % 1 !== 0) return false;
    return true;
}
function newNumber(n) {
    var c2 = "", d2 = n.length - 1, e2 = 0;
    for (let i = d2; i >= 0; i--) {
        c2 += n[i];
    }
    return e2 = +c2;
}
if (isPrime2(a2)) {
    if (a2 >= 0) {
        console.log(`Số bị đảo ngược thành: ${newNumber(b2)}`);
    } else {
        console.log(`Số bị đảo ngược thành: ${-newNumber(b2)}`);
    }
} else {
    console.log(`Số k phù hợp, nhập lại số khác nhé!`);
}

// b3
var a3 = Math.floor(Math.random() * 10000);
// thử số khác bằng biến dưới đây:
// var a3 = 1302;
console.log(`Số cần đọc là: ${a3} (F5 để hiển thị kết quả cho số khác nhé)`)
const ten10 = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];
const unit = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
function isPrime3(n) {
    if (n % 1 !== 0) return false;
    return true;
}
function readNumber(n) {
    if (n < 10) return unit[n];
    else if (n < 100) return ten10[Math.floor(n / 10)] + " " + (n % 10 !== 0 ? "" + unit[n % 10] : "");
    else if (n < 1000) return readNumber(Math.floor(n / 100)) + " trăm " + (n % 100 !== 0 ? "" + readNumber(n % 100) : "");
    else return readNumber(Math.floor(n / 1000)) + " ngàn " + (n % 1000 !== 0 ? "" + readNumber(n % 1000) : "");
}
if (isPrime3(a3)) {
    console.log(`Số ${a3} đọc là ${readNumber(a3)}`)
} else {
    console.log(`Số k phù hợp, nhập lại số khác nhé!`)
}