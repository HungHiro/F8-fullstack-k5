/* 
Biểu thức = Toán tử + Toán hạng
vd: total = a + b + c;

1. Toán tử số học:
    +, -, *, \, % (chia lấy dư), **(lũy thừa)
    ++, --
 */
var a = 10;
a = a + 1;
a--;
--a;
console.log(a);

var count = 1;
var total = 10 + count++;
console.log('tong', total);
console.log('dem', count);

var count1 = 0;
var total = count1++ + ++count1;
console.log(total);

var a = 1;
var total = ++a - --a * a++ + a--; // 2 - 1 * 1 + 2
console.log(total);
