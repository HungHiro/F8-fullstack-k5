var user = {
    name: 'Hùng Hùng',
    company: 'haian',
    // getMessage: function () {
    //     return `Hello F88`;
    // },
};
console.log(user);

var customer = {
    name: 'Hiro Hiro',
    email: 'asdasd@gmail.com',
    age: 30,
    // getMessage: function () {
    //     return `Hello F88`;
    // },
}
// Tự định nghĩa 1 prototype, tất cả con của nó (Object) đều đc kế thừa phương thức đó
Object.prototype.getMessage = function () {
    return 'hello f88'
}
Object.prototype.message = 'aff';
//bt: Viết phương thức prototype có tác dụng nối tất cả giá trị các value trong object thành 1 mảng
// tên phương thức: combieValue()
Object.prototype.combieValues = function () {
    var result = [];
    var arr = this;
    Object.keys(this).forEach(function (key) {
        result.push(arr[key]);
    })
    return result;
}
console.log(customer.combieValues());

//Chỉ có null và undefined là không có phương thức, 1 khi khai báo ở Object thì sẽ thừa hưởng ở mọi nơi khác như function, boolean, number, string, arr,... trừ 2 thằng ở trên
var user1 = function () {
    return `a`;
}
var a = null, b = undefined;
console.log(user1.message);
console.log(a.message);
console.log(b.message);