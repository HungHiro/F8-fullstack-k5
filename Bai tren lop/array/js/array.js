/* Mảng (Array)
    - Kiểu dữ liệu tham chiếu
    - Tập hợp n giá trị trong 1 biến
    - Bản chất là object (1 dạng của object)
    - 2 phần:
        + Element: giá trị của 1 phần tử trong mảng
        + Index: Chỉ số để truy cập vào phần tử trong mảng (Bắt đầu từ 0)
   Có 2 loại mảng:
   - Mảng 1 chiều
   - Mảng đa chiều
   Hàm tạo của mảng là Array
*/
var users = [
    'Đi đu đưa đi',
    '----',
    'tập tập',
    'Nguyễn nguyên ng',
];
var customers = new Array(); // éo ai dùng vì nó dài
console.log(Array.prototype);
console.log(users, typeof(users));
// truy cập phần tử mảng: xác định đc index
console.log(users[0]);

// thay đổi giá trị phần tử
users[0] = 'hai ba';
console.log(users, typeof(users));

// thêm phần tử mới vào cuối mảng
users[users.length] = 'chín mười'
console.log(users)

// Duyệt mảng:
// for
for (let index = 0; index < users.length; index++) {
    console.log(users[index]);
}
// for in
for (var index in users) {
    console.log(users[index])
}
// for of
for (var user of users) {
    console.log(user)
}
// Lưu ý: vòng lặp for in sẽ lấy đc cả index và key

// xóa phần tử trong mảng
var result = [];
var count = 0;
for (var index in users) {
    if (index !== "2") {
        result[count] = users[count];
        count++;
    }
}
// b1: chèn 1 phần tử vào đầu mảng
var add = ["abc"]
var result1 = [add];
for (var user of users) {
    result1[result1.length] = user;
}
console.log(result1)
