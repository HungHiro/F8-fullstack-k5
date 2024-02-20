// Array method
// mảng là kiểu dữ liệu tham chiếu, k thể so sánh, khi so sánh thì nó luôn khác nhau.
/*
find(): lặp qua từng phần tử của mảng, trả về phần tử đầu tiên nếu callback return true
findLast(): giống find() nhưng nó trả về kết quả cuối cùng.
findIndex(): lặp qua từng phần tử và trả về index đầu tiên nếu callback return true
findLastIndex(): lặp qua từng phần tử và trả về index cuối cùng nếu callback return true

reduce():
*/
var users = ["user 1", "user 2", "user 3", "user 4"];
console.log(users.indexOf("user 2"));

const users1 = [
    ["user1", "user1@gmail.com"],
    ["user2", "user2@gmail.com"],
    ["user3", "user3@gmail.com"],
];
// tìm thông tin user có email là: user2@gmail.com
var  result = users1.find(function (user) {
    if (user[1] === "user2@gmail.com") {
        return true;
    }
});
console.log(result);
var  result2 = users1.find(function (user) {
    if (user[1] === "user3@gmail.com") {
        return true;
    }
});
console.log(result2);

// bt: đổi email của user có tuổi lớn nhất thành admin@gmail.com 
const users3 = [
    ["User1", "User1@gmail.com", 30],
    ["User2", "User2@gmail.com", 40],
    ["User3", "User3@gmail.com", 20],
    ["User4", "User4@gmail.com", 10],
];
var maxAge = users3[0];
var indexUser = 0;
users3.forEach(function (user, index) {
    if (maxAge[2] < user[2]) {
        maxAge = user;
        indexUser = index;
    }
});
if (indexUser !== 0) {
    users [indexUser][1] = "admin@gmail.com";
};
console.log(users3);