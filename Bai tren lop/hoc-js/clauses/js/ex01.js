/*
Câu lệnh rẽ nhánh if else
1. Dạng thiếu
if (condition) {
    //Code
}

2. Dạng đầy đủ
if (condition) {
    code
} else {
    code
}

3. Dạng nhiều nhánh
if (condition) {
    code
} else  if (condition) {
    code
} else {
    code
}

4. Dạng lồng nhau
if (condition) {
    if (condition) {
    code
    } else {
        code
    }
} else {
    code
}
 */
var number = 0;
if (number) {
    console.log('Giá trị đúng')
} else {
    console.log('Giá trị sai')
};
document.write('<h1>học tại f88</h1>')
// bt: tính lương thực nhận sau khi trừ thuế => Cho trước tổng lương --> Tính lương sau khi trừ thuế theo bảng sau
// <= 5tr --> 0%
// > 5tr <= 15tr --> 3%
// trên 15tr --> 5%


// var luong = 10000000;
// var luongcuoi;
// var catphe;
// console.log('Lương của m ban đầu là:', luong)
// if (luong <= 5000000) {
//     catphe = 0;
//     console.log('Lương của m sẽ éo bị trừ thuế nên sẽ là:', luongcuoi)
// } else if (luong < 15000000) {
//     catphe = 0.03
//     console.log('lương của m hơi cao, m sẽ bị cắt phế 3% nên còn:', luongcuoi)
// } else {
//     catphe = 0.05
//     console.log('lương của m quá cao, m sẽ bị cắt phế 5% nên còn:', luongcuoi)
// }
// luongcuoi = luong - luong * catphe;