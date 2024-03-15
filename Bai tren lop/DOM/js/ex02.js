/*
Event: Các hành dộng từ phía người dùng tác động lên các thẻ html
    -Mặc định js có sẵn các sự kiện (event) ở các thẻ html
    -Mỗi thẻ html có các sự kiện khác nhau
    -Sẽ có các sự kiện xuất hiện trong tất cả các thẻ html: click, dbclick, mouseover, mouseout, mousemove, mouseleave, mouseenter, mousedown, mouseup,...
    -Việc của lập trình viên sẽ gán nội dung cho sự kiện
Các cách gán nội dung cho sự kiện:
    -Event Handler
    -Event Listener
 */
var btn = document.querySelector('.btn');
var handleClick = function () {
    console.log('hello hehe');
};
// cach 1:
// btn.onclick = handleClick();
// cach 2:
btn.addEventListener('click', handleClick)
var formSearch = document.querySelector('.form-search');
// formSearch.addEventListener('submit', function () {
//     alert('okie');
// });
// var handleSubmit = function () {
//     alert('okie')
// }
// formSearch.addEventListener('submit', handleSubmit);
// var removeBtn = document.querySelector('.remove-btn');
// removeBtn.addEventListener('click', function () {
//     formSearch.removeEventListener('submit', handleSubmit)
// });
var nameElement = formSearch.querySelector('[name = "form-input"]');
nameElement.addEventListener('focus', function (){
    console.log('focus');
})
nameElement.addEventListener('blur', function (){
    console.log('blur');
})
nameElement.addEventListener('change', function (){
    console.log('change');
})