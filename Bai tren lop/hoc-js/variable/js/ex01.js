// Biến trong JS
// => nơi lưu trữ dữ liệu tạm thời / Có thể đặt tên / Không cần khai báo kiểu dữ liệu (trong JS) 
/* Các quy tắc đặt tên trong lập trình:
    1. camelCase => vd: customerId, customerAddress,... => Đặt tên biến, hàm,...
    2. PascalCase => vd: UserInvoice, UserCourse,... => Đặt tên class, tạo ra các Component trong các Framework
    3. underscore => vd: customer_id, user_id, customer_shipping_address => Đặt tên trong database, api response
 */
var _use$Id = 1;
console.log(_use$Id);
var response = Intl;
console.log(response);
var fullname, age, address; //Khai báo biến trên 1 dòng
//Khai báo biến trên n dòng
var fullname;
var userEmail;
// Khai báo trên 1 dòng nhưng gán luôn
var fullname, age = 20, address;
// Các kiểu dữ liệu thường gặp: Kiểu dữ liệu nguyên thủy: number, string, null, undefined, boolean: true/false.
var age = 31; // number
var fullname1 = 'hungnt'; // string
var check = true; //boolean
var address; // undefined
var lastName = null; // null
// Kiểu dữ liệu tham chiếu: ofject, function


var courseName = 'Fullstack Offline';
var welcome = 'Chào mừng bạn đến với khóa ' + courseName + ' học tại f88';
console.log(welcome);

// template string
var courseName = 'Fullstack\n Offline';

var welcome = `Chào mừng bạn đến với khóa ${courseName} học tại F88`;
// sử dụng template string thì xuống dòng thoải mái
var welcome = `Chào mừng bạn đến với khóa
 ${courseName} học tại F88`;

console.log(welcome);
// chuỗi + số => chuỗi
var a = 'a';
var b = 2;
console.log(a + b);
console.log(+a + +b);// ép a thành number, nếu k phải number thì sẽ trả về là NaN: Not a Number
console.log(typeof(+a + +b));
console.log(typeof(age));
console.log(typeof(fullname1));
console.log(typeof(check));
console.log(('1' === 1));