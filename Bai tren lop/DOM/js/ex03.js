//js html
/*
-Lấy nội dung của thẻ html
-Thay đổi nội dung của thẻ html
-Xóa thẻ html
-Thêm, sửa, xóa thuộc tính

1. element.innerText
    Lấy nội dung của thẻ html
2. element.innerHTML
    Lấy nội dung của thẻ html (Bao gồm cả thẻ html)
3. element.textContent
    Lấy nội dung mà vẫn giữ khoảng cách gốc (Chỉ lấy text)
4. element.outerHTML
    Lấy nội dung trong thẻ HTML và chính nó
5. element.outerText
Note: Nếu muốn cập nhật lại nội dung các thẻ html --> Dùng 5 thuộc tính trên và gán giá trị
 */
var  btn = document.querySelector(".btn");
var title = document.querySelector(".title");
btn.addEventListener("click", function () {
    console.log(title.innerText);
}); // Nội dung mà ng dùng éo thấy thì sẽ k tác động đc
btn.addEventListener("click", function () {
    console.log(title.innerHTML);
});
btn.addEventListener("click", function () {
    console.log(title.textContent);
});
btn.addEventListener("click", function () {
    console.log(title.outerHTML);
})
btn.addEventListener('click', function () {
    // title.innerText = `hello guy`;
   title.outerText = `<span>Hello everyone</span>`;
});
var btn2 = document.querySelector(".btn2");
var contentEl = document.querySelector(".content");
var contentCache = '';
btn2.addEventListener("click", function () {
    if (this.innerText === "Ẩn") {
        this.innerText = "Hiện";
        contentCache = contentEl.innerText;
        contentEl.innerText = "";
    } else {
        this.innerText = "Ẩn";
        contentEl.innerText = contentCache;
    }
})

// C2
// btn.addEventListener("click", function () {
//     if (!contentEl.innerHTML) {
//         contentEl.innerHTML = content;
//         btn.innerText;
//     } else {
//         contentEl.innerHTML = "";
//         btn.innerText = "Hiện";
//     }
// })
var removeBtn = document.querySelector("remove-btn");
removeBtn.addEventListener("click", function () {
    contentEl.remove();// với hàm này thì outer === null (hủy 1 thẻ html - biến mất luôn 1 thẻ)
})