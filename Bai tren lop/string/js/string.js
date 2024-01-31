// String: Kiểu dữ liệu nguyên thủy
/*
Trong js, kiểu dữ liệu nguyên thủy hoạt động gióng object (Kiểu dữ liệu tha chiếu) --> Đối tượng chuỗi
Các cách khai báo chuỗi:
    - var a = "f88";
    - var b = String("f88");
    - var c = new String("f88");
    */
   var a = "f8";
   console.log(typeof a);
   if (typeof a === "string") {
       console.log(`Đây là chuỗi`)
    };
var a = "f88";
console.log(a, typeof a);
var b = String("f88");
console.log(b, typeof b);
var c = new String("f88");
console.log(c, typeof c);
// trong js: truy cập vào thuộc tính, phương thức của 1 object bằng 1 dấu chấm (.)
// Hàm tạo của kiểu chuỗi (Hàm bọc kiểu dữ liệu nguyên thủy) --> Định nghĩa các phương thức, thuộc tính
// Mỗi kiểu dữ liệu sẽ có 1 hàm tạo (Function Constructor): String, Number, Array, Object, Boolean, ...

console.log(Array.prototype);
console.log(Object.prototype);
console.log(String.prototype);

// length: Lấy độ dài chuỗi
var a = "cai qq jz qq";
console.log(a.length);

// charAt(): Lấy kí tự theo index (Bắt đầu từ 0)
console.log(a.charAt(4));

// charAtCode() --> lấy mã ASCII ở kí tự theo index
console.log(a.charCodeAt(2));

// concat: nỗi chuỗi
var b = "hehehe"
console.log(a.concat(" ", b));

// incledes() --> Tìm chuỗi con trong chuỗi cha --> trả về true/false
console.log(a.includes("qq"));

// indexOf() --> Tìm chuỗi con trong chuỗi cha --> trả về index đầu tiên tìm đc (Không tìm đc thì trả về "-1")
console.log(a.indexOf("qq"));

// lastIndexOf() --> Tìm chuỗi con trong chuỗi cha --> trả về index cuối cùng tìm đc (Không tìm đc thì trả về "-1")
console.log(a.lastIndexOf("qq"));

// slice(start, end) --> Cắt chuỗi từ start đến trước end
// nếu k có tham số thứ 2 thì nó lấy từ tham số 1 đến hết chuỗi
console.log(a.slice(0, 2));
console.log(a.slice(2));
console.log(a.slice(-5, -1));
console.log(a.slice(-5)); // Lấy 5 ki tự cuối chuỗi

// replace() --> Thay thế 1 từ khóa này = từ khóa #
console.log(a.replace("qq", "3"))
// replace() --> Thay thế all từ khóa này = từ khóa #
console.log(a.replaceAll("qq", "3"))
// Hàm replace có hỗ trợ thay thế = biểu thức chính quy