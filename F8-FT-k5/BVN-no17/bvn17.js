//b1
console.log('b1');
var a = Math.floor(Math.random() * 100), b = Math.floor(Math.random() * 100);
console.log('Số a ban đầu là:', a);
console.log('Số b ban đầu là:', b);
a ^= b;
b ^= a;
a ^= b;
console.log('Sau khi đổi, số a là:', a);
console.log('Sau khi đổi, số b là:', b);

//b2
console.log('b2');
var s = 10 + 20 + 5 ** 10 / 2;
console.log('Kết quả của biểu thức S = 10 + 20 + 5^10 / 2 là S =', s);
//b3.1
console.log('b3.1');
var d = Math.floor(Math.random() * 100), e = Math.floor(Math.random() * 100), f = Math.floor(Math.random() * 100);
console.log(`3 số ngẫu nhiên ban đầu là: ${d}, ${e}, ${f}`);
var max = Math.max(d, e, f);
console.log('Giá trị lớn nhất từ các số trên là:', max);
//b3.2
console.log('b3.2')
var g = Math.floor(Math.random() * 100), h = Math.floor(Math.random() * 100), k = Math.floor(Math.random() * 100);
console.log(`3 số ngẫu nhiên ban đầu là: ${g}, ${h}, ${k}`);
if (g >= h && g >= k) {
    console.log('Giá trị lớn nhất từ các số trên là:', g);
} else if (h >= g && h >= k) {
    console.log('Giá trị lớn nhất từ các số trên là:', h);
} else {
    console.log('Giá trị lớn nhất từ các số trên là:', k);
}
//b4
console.log('b4')
var m = Math.floor(Math.random() * 100), n = Math.floor(Math.random() * 100 - 50);
console.log(`2 số ngẫu nhiên ban đầu là: ${m}, ${n}`);
var result = m * n;
if (result >= 0) {
    console.log('Từ 2 số trên ta thấy 2 số trên cùng dấu')
} else {
    console.log('Từ 2 số trên ta thấy 2 số trên trái dấu')
}
//b5
console.log('b5')
var a5 = Math.floor(Math.random() * 100), b5 = Math.floor(Math.random() * 100), c5 = Math.floor(Math.random() * 100), d5, e5, f5;
console.log(`3 số theo thứ tự ngẫu nhiên ban đầu là: ${a5}, ${b5}, ${c5}`);
if (a5 < b5 && a5 < c5) {
    s1 = a5;
    if (b5 < c5) {
        s2 = b5;
        s3 = c5;
    } else {
        s2 = c5;
        s3 = b5;
    }
} else if (b5 < a5 && b5 < c5) {
    s1 = b5;
    if (a5 < c5) {
        s2 = a5;
        s3 = c5;
    } else {
        s2 = c5;
        s3 = a5;
    }
} else {
    s1 = c5;
    if (a5 < b5) {
        s2 = a5;
        s3 = b5;
    } else {
        s2 = b5;
        s3 = a5;
    }
}
console.log('Sau khi sắp xếp, ta được dãy số có giá trị tăng dần sau:', s1, s2, s3);