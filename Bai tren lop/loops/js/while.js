// Lặp k biết trc số lần
/*
while (đieu kien) {
    --code
}
-> Điều kiện đúng --> Chạy câu lệnh --> Quay lại kiểm tra đk
do...while
do {
    --code
} while (dieukien)
-> chạy câu lệnh trong 'do' trước rồi mới kiểm điều kiện, điều kiên = true -> kiểm tra câu lệnh
*/
var i = 0, s = 0, n = 10;
while ( i <= n) {
    s += i;
    i++;
}
console.log(`S = ${s}`);
do {
    console.log(i);
    i++;
} while (i <= 10);