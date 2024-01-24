// b1
console.log('b1');
// Thử các trường hợp bằng biến ở dưới đây:
// var distance = 5;
var distance = Math.floor(Math.random() * 200);
var costPerKm, money, discount = 0.1;
console.log(`Độ dài quãng đường đã đi là ${distance}km`)
if (distance <= 1) {
    costPerKm = 15000;
} else if (distance <= 5) {
    costPerKm = 13500;
} else if (distance <= 120) {
    costPerKm = 11000;
} else {
    costPerKm = 11000;
}
if (distance <= 120) {
    money = distance * costPerKm;
} else {
    money = distance * costPerKm - distance * costPerKm * discount;
}
console.log(`Số tiền phải trả khi đi ${distance} km là: ${money}đ`);

// b2 
console.log("b2");
// Thử input bằng biến dưới đây:
// var input = 25;
var input = Math.floor(Math.random() * 1000);
console.log(`Số điện tiêu thụ tháng này là: ${input} số`)
var output; 
if (input <= 50) {
    output = input * 1.687;
} else if (input <= 100) {
    output = 50 * 1.678 + (input - 50) * 1.734;
} else if (input <= 200) {
    output = 50 * 1.678 + 50 * 1.734 + (input - 100) * 2.014;
} else if (input <= 300) {
    output = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (input - 200) * 2.536;
} else if (input <= 400) {
    output = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + (input - 300) * 2.834;
} else {
    output = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + 100 * 2.834 + (input - 400) * 2.927;
}
console.log(`Số tiền phải trả khi tiêu thụ ${input} số điện là: ${(output * 1000).toFixed()}đ`);

// b3
console.log("b3")
// Thử với số n khác bằng biến dưới đây:
// var n = 3;
var n = Math.floor(Math.random() * 100);
console.log(`Số nguyên n là: ${n}`)
var S = 0;
for (let i = 0; i <= n; i++) {
    S += i * (i + 1);
}
console.log(`Tổng số S với công thức S= 1*2 + 2*3 + 3*4 + ... + n*(n+1) khi cho trước số nguyên n là: ${S}`);

// b4
console.log("b4");
// Thử với số a khác bằng biến dưới đây:
// var a4 = ;
var a4 = Math.floor(Math.random() * 1000000 + 2);
var count4 = 0, b4 = a4 / 2;
console.log(`Số nguyên cần kiểm tra là: ${a4}`);
for (let i = 2; i < b4; i++) {
    if (a4 % i === 0) {
        count4 ++;
    }
}
if (count4 > 0) {
    console.log(`Số ${a4} không phải số nguyên tố`)
} else {
    console.log(`Số ${a4} là số nguyên tố`)
}

// b5
console.log("b5");
// Thử số N theo biến dưới đây:
// var n5 = 4;
var n5 = Math.floor(Math.random() * 10 + 1);
console.log(`Tam giác có chiều cao là ${n5} dòng`)
var m5 = 1;
for (let i = 1; i <= n5; i++) {
  let p5 = "";
  for (let j = 1; j <= i; j++) {
    p5 += m5 + " ";
    m5++;
  }
  console.log(p5);
}

// b6
console.log("b6");
var a6 = "";
for(let i = 1; i <= 8; i++) {
    let b6 = '';
    for(let j = 1; j <= 8; j++) {
        if ((i + j) % 2 == 0) {
            b6 += '@ ';
        } else {
            b6 += '# ';
        }
    }
    a6 += b6 + "\n";
}
console.log(a6);

// b7
console.log("b7");
console.log("Bảng cửu chương như sau:");
for (let i = 1; i <= 9; i++) {
  let a7 = "";
  let b7;
  for (let j = 1; j <= 10; j++) {
    b7 = i * j;
    a7 +=  `${i} * ${j} = ${b7}   `;
  }
  console.log(a7);
}

// b8
console.log("b8");
var n8 = Math.floor(Math.random() * 10000 + 1)
console.log("N đã cho là:", n8)
function tinhTongS(a8) {
    if (a8 === 1) return 1;
    return 1 / a8 + tinhTongS(a8 - 1);
}
var S8 = tinhTongS(n8);
console.log(`Với N đã cho, tổng S của biểu thức S = 1 + 1/2 + 1/3 + 1/4 + 1/5 +…+1/N là: ${S8}`);
