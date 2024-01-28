/* FUNCTION
Là cú pháp trong lập trình, gom các đoạn chương trình để tái sử dụng
function ten_ham() {
    nội dung hàm
function ten_ham(thamso1, thamso2, ...) {
    nội dung hàm
}
--> Decralation Function
Quy tắc đặt tên: camelCase
    - Dùng động từ (Bắt đầu: get, set, create, make, build,...)
*/

//Định nghĩa hàm
function showMessage() {
    console.log("Hello f88")
}
//Gọi hàm
showMessage(); // Lời gọi hàm chủ động

function showMessage1(msg /* msg là tham số */, type = 'ối giời') {
    console.log(msg);
    console.log(type);
}
showMessage1("Học js hhehe", "error"); // Lời gọi hàm chủ động
// truyền giá trị cho tham số: msg => đối số: "Học js hhehe"