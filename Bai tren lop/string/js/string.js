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
var a = "cai qq jz qq  ";
console.log(a.length);

// charAt(): Lấy kí tự theo index (Bắt đầu từ 0)
console.log(a.charAt(4));

// charAtCode() --> lấy mã ASCII ở kí tự theo index
console.log(a.charCodeAt(2));

// concat: nỗi chuỗi
var b = "hehehe"
console.log(a.concat(" ", b));

// includes() --> Tìm chuỗi con trong chuỗi cha --> trả về true/false
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

// Hàm split(" ") --> cắt chuỗi thành mảng dựa vào ký tự phân tách
// vd:
console.log(a.split(" "));

// Hàm toUpperCase() --> chuyển tất cả thành chữ hoa
console.log(a.toUpperCase());

// Hàm toLowerCase( --> chuyển tất cả thành chữ thường)
console.log(a.toLowerCase());

// trim() --> cắt khoảng trắng cả đầu và cuối chuỗi
console.log(a.trim());

// trimStart(), trimLeft() --> cắt khoảng trắng đầu chuỗi 

// trimEnd(), trimRight() --> cắt khoảng trắng cuối chuỗi

// match() --> cắt chuỗi bằng biểu thức chính quy
var content = `Xin chào, 001839023 f88 293991938`;
var phone = content.match(/0\d{9}/g);
console.log(phone);

// Bài tập: Cho 1 email, lấy Username của Email đó
var email = `hoangan.web@gmail.com`;
var username = email.slice(0, email.indexOf('@'));
console.log(username);

// B2: Kiểm tra 1 chuỗi xem chuỗi đó có phải tất cả kí tự đó có viết hoa k
var fullname = `NGUYỄN TUẤN HÙNG`;
var compare = fullname.toUpperCase();
fullname === compare ? console.log(`a1`) : console.log(`b`);
if (fullname === compare) {
    console.log(`a`);
} else (console.log(`b`))

// B3 Đảo chữ đầu và cuối của 1 chuỗi;
var str = `Xin chào, tôi tên là Nguyễn Tuấn Hùng`
// output: Hùng chào, tôi tên là Nguyễn Tuấn Xin
var firstSpace = str.indexOf(" ");
var lastSpace = str.lastIndexOf(" ");
var firstWord = str.slice(0, firstSpace);
var lastWord = str.slice(lastSpace);
var middleWord = str.slice(firstSpace, lastSpace + 1)
console.log(`${lastWord}${middleWord}${firstWord}`);

// b4:
var output = "";
var keyword = `lorem`;
var content = `Lorem ipsum dolor sit amet consecloremtetur adipisicing elit. Hic asperiores velit aut rem saepe voluptas quis fuga sint at, accusamus a libero consequatur enim magni quibusdam maiores quod ea placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores velit aut rem saepe voluptas quis fuga sint at, accusamus a libero consequatur enim magni quibusdam maiores quod ea placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic asperiores velit aut rem saepe voluptas quis fuga sint at, accusamus a libero consequatur enim magni quibusdam maiores quod ea placeat!`;
var a4 = 0, b4 = 0;
while (true) {
    var position = content.indexOf(keyword.toLowerCase, a4);
    if (position === -1) {
        break;
    }
        output = content.slice(a4, position) + `<span>${content.slice(position, position + keyword.length)}</span>` + content.slice(position + keyword.length);
        a4 = position + keyword.length;//0 + 3 = 3
        b4++;
}
document.write(`<p>Tìm kiếm với từ khóa, <b>${keyword}</b></p>`);
document.write(content);
document.write(`<p>Đã tìm thấy <b> ${b4} </b> kết quả với từ khóa <b>${keyword}</b></p>`);