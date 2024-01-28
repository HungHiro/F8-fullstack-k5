/*
Hàm có giá trị trả về (hàm return): -> dùng return để trả về giá trị cho 1 hàm -> đoạn chương trình sau return k hoạt động
Hàm k có giá trị trả về (hàm void)
Biến toàn cục (Glonal Var):
    - Biến khai báo ngoài hàm
    - có thể dùng ở đâu cũng đc
Biến cục bộ (local var):
    - khai báo trong hàm
    - chỉ sử dụng trong hàm đa đc khao báo hoặc các hàm con;
*/
function sum(a, b) {
    var total = a + b;
    return total;
}
var result = sum(10, 20) + 30;
console.log(result);
// nếu k có return thì nó là hàm void
function division(a, b) {
    if (b === 0) {
        return "éo tính đc, lỗi r";
    }
    return a / b;
}
console.log(division(10, 5));

//
var message = 'Học tại f88';
function getMessage() {
    return message;
}
function setMessage(value) {
    message = value;

}
setMessage("Hahuhi");
console.log(getMessage());
// Trong js k có khái niệm tham trị và tham chiếu
console.log(window);