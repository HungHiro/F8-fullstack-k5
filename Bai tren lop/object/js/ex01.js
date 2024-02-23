// Object: đối tượng
/**
2 thứ cần quan tâm:
- Thuộc tính (biến): Đặc điểm
- Phương thức (hàm): Hành động

Cách tạo đối tượng trong JS
- Object Literal --> tạo từ hàm Object
- Function Constructor
- Class (ES6)
*/
console.log([Object])
var user = {};// user = new Object()
console.log(user, typeof user);

// Kiểm tra 1 bién có phải object k
if (typeof user === 'object' && !Array.isArray(user) && user !== null) {
    console.log('laflaflfla')
}

// Cấu tạo của 1 object:
/*
{
    key1: varlue1;
    key2: varlue2;
    key3: varlue3;
    key4: varlue4;
    ...
    keyn: varluen;
}
*/
// trong varlue nó có thể có tất cả các kiểu dữ liệu

var user = {
    name: "Hung",
    email: "tuanhung.bka@gmail.com",
    address: "Hoang Mai",
    getAge: function () {
        return 25;
    }
};
console.log(user, typeof(user));
// truy cập vào key của object: tênObject.tênKey
console.log(user.name);
console.log(user.email);
console.log(user.address);
console.log(user.getAge());
console.log(user["getAge"]);
// thêm key vào object
user.course = "fullfull";
user["shipping"] = "hanoi";
console.log(user);
// Sửa value trong object
user.name = "hihi";
console.log(user);
// xóa key
delete user.address;
console.log(user);
// Computed Property
var key = "history";
user[key] = "123";
console.log(user);

// lọc qua tất cả phần tử của object
for (var key in user) {
    typeof user[key] === 'function' ? console.log(user[key]()) : console.log(user[key]);
}
// Lấy danh sách key trong object --> trả về mảng
var keys = Object.keys(user);
console.log(keys);
error = {};
Object.keys(error).length ? console.log('Có dữ liệu') : console.log('Éo có dữ liệu');
// Lấy dánh sách value trong object --> trả về 1 mảng
var values = Object.values(user);
console.log(values);
// Lấy cả key và value --> mảng 2 chiều
var values = Object.entries(user);
console.log(values);
// chuyển mảng 2 chiều thành object
var result = Object.fromEntries(values);
console.log(result);
// nối object
var user2 = {
    job: "công việc",
    company: "HN",
}
var user3 = Object.assign(user, user2);
console.log(user)
console.log(user3)