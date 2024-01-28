/*
Vòng lặp:
    - Cú pháp trong lập trình
    - Lặp đi lặp lại 1 đoạn chương trình để giải quyết bài toán
2 loại:
    - Biết trc số lần lặp
    - Không biết trước: while, do while
1. Vòng lặp for
for (gia_tri_khoi_tao; dieu_kien_dung; buoc_nhay) {
    --code
}
*/
for (var i = 0; i < 5; i++) {
    console.log(`Hello: ${i}`);
};
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        console.log(`i = ${i} - j = ${j}`);
    }
}
// b1: cho S = 1 + 2 + 3 + 4+ ... + N
var n = 99;
var total = 0;
for (var i = 1; i <= n; i++) {
    total += i;
}
console.log(total);
/*
Chạy chương trình với n = 5
    - i = 1 ==> total = total + i = 0 + 1 = 1
    - i = 2 ==> total = total + i = 1 + 2 = 3
    - i = 3 ==> total = total + i = 3 + 3 = 6
    - i = 4 ==> total = total + i = 6 + 4 = 10
    - i = 5 ==> total = total + i = 10 + 5 = 15
*/

//b2: tính trung bình cộng các số chẵn từ 1 -> n
var n = 10;
var S = 0, j = 0;
for (let i = 1; i <= n ; i++) {
    if (i % 2 === 0) {
        j++;
        S += i;
    }
}
var total = S / j;
console.log(total);
//b3: Tính giá trị biểu thức: S = 1 + 1*2 + 1*2*3 + 1*2*3*...*N
var n3 = 10;
var S3 = 0, Sm = 1;
for (let i = 1; i <= n3; i++) {
    Sm *= i;
    S3 += Sm;
}
console.log(S3);
//b4: Tìm số nguyên tố: > 1, là số nguyên, chỉ chia hết cho 1 và chính nó
var n = 10;
var isPrime = true;
if (n % 1 === 0 || n <= 1) {
    isPrime = false;
} else {
    for ( let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false
            break; // Thoát vòng lặp gần nhất khi tìm ra đáp án
        }
    }
}
console.log(isPrime); // => Đặt cờ hiệu (đặt 1 cái củ cải nào đó ra để làm mốc)
