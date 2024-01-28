/* 
Biểu thức = Toán tử + Toán hạng
vd: total = a + b + c;

1. Toán tử số học:
    +, -, *, \, % (chia lấy dư), **(lũy thừa)
    ++, --

2. Toán tử gán (=)
    Khi không gán thì giá trị mặc định là undefined
    Toán tử gán mở rộng:
    +=, -=, *=, /=, %= (chia lấy dư)

3. Toán tử quan hệ (so sánh): chỉ trả về TRUE/FALSE
    <, >, >=, <=, !=, ==, ===, !==

4. Toán tử kết hợp:
    - và (&&): đúng khi tất cả đúng
    - hoặc (||): sai khi tất cả sai
    - Phủ định (!): ngược lại
Khi sử dụng toán tử kết hợp thì cần sử dụng thêm cặp ngoặc tròn để nhóm các biểu thức
Nếu tồn tại cả 3 toán tử kết hợp trong 1 biểu thức thì thứ tự ưu tiên sẽ như sau: ! > && > ||

5. Toán tử 3 ngôi
Điều kiện ? Giá trị đúng : Giá trị sai
Chỉ gán với giá trị biểu thức

6. Toán tử nullish (??)
result = biến ?? Giá trị mặc định => kiểm tra biến có khac null or undefined hay không
--> Nếu có thì lấy giá trị trước '??'
--> Nếu k thì lấy giá trị sau dấu '??'

7. Truthy / Falsy
    Truthy : khi đưa giá trị các biến vào biểu thức logic thì sẽ tự động ép kiểu về 'true' --> k tất cả k phải falsy thì là truthy
    Falsy: Khi đưa giá trị các biến vào biểu thức logic thì sẽ tự động ép kiểu về 'false' => null, undefined, '', NaN, false, 0

8. Toán tử &&
    Nếu giá trị trước && là truthy thì lấy giá trị sau dấu && còn falsy thì lấy trước
9. Toán tử ||
    Nếu giá trị trước || là tìm được bất kì thằng nào là truthy thì lấy chính thằng truthy đó còn éo tìm thấy thằng nào thì lấy sau dấu ||
*/
//1
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
var total = ++a - --a * a++ + a--; // 2 - 1 * 1 + 2)
console.log(total);
// 2
var b = 10;
b += 1; // b = b + 10
console.log(b);

// 3
var c = 1;
var d = c > 2;
console.log(d);

var e = '1';
console.log(e == c);

// 4
var f = 10;
var g = f > 10 && f < 20 || f < 5;
console.log(g);

// 5
var h = Math.floor(Math.random() * 10 + 5);
var k = h >= 10 ? "hello f88" : "có qq";
console.log(k);

// 6
var m = 10;
var n = m ?? 'không xác định';
console.log(n)
// Viết lại toán tử nulllish bằng toán tử 3 ngôi
var o = null;
var t = o === null || undefined ? 'Không xác định' : o;
console.log(t)

// 7
var a7 = -0n;
var b7 = a7 ? 'hello f88' : 'không xác định';
console.log(b7);

// 8
var a8 = 10;
var b8 = a8 && 'xác định đê';
var c8 = false && 'a8';
console.log(b8,'/', c8);

// 9
var a9 = 0;
var b9 = a9 || '' || 'f88';
console.log(b9)