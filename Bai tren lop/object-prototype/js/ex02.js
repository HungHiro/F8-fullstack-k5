//Cunction Constructor
/*
Tên hàm:
    -Danh từ
    -Sử dụng quy tắc PascalCase: User, UserController,...
Phương thức static, thuộc tính static: (ĐỊnh nghĩa qua tên hàm tạo: TenHamTao.tenthuoctinh, TenHamTao.tephuongthuc())
    -Truy cập trực tiếp từ tên hàm tạo
    -Không bị phụ thuộc bởi đối tượng
    -Từ khóa this trong phương thức static sẽ là nội dung của hàm tạo
Phương thức non-static, thuộc tính non-static:
    - Được định nghĩa trong hàm tạo or thông qua prototype
    -Bắt buộc phải gọi qua đối tượng (Được khởi tại từ hàm tạo)
    -Bị phụ thuộc bởi đối tượng
*/
function User(name, email, ) {
    // Định nghĩa thuộc tính
    this.name = name;
    this.email = email;
    // Định nghĩa phương thức
    this.showInfo = function() {
        return `${this.name} - ${this.email}`;
    };
}
User.prototype.message = `F88`;// this trong phương thức thông thường (non-static)
User.getName = 'f66' // this trong phương thức tĩnh chính là nội dung hàm tạo
// khởi tạo đối tượng từ hàm tạo
var user = new User('Hung Hung', 'tuanhung@gmail.com');
console.log(user);
console.log(user.name);
console.log(user.email);
console.log(user.showInfo);
console.log(user.message);
var age = 20;
console.log(age.message)
//Muốn truy cập từ non-static thì phải chọc từ đối tượng (khai báo bằng từ khóa 'new')
//Từ khóa this trong phương thức non-static sẽ trả về đối tượng

//Bài tập: Xây dựng hàm tạo: Caculator
/*
Xây dựng hàm tạo để tính toán:
    -Cộng
    -Trừ
    -Nhân
    -Chia
    add
    minus
    multiplied
    divided
*/
function Caculator() {};
Caculator.prototype.add = function () {
    
}