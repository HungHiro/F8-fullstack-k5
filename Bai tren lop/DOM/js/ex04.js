/*
Thuộc tính
    1. Thuộc tính có sẵn
        element.tenthuoctinh --> Lấy giá trị
    2. Thuộc tính tự tạo
        -Giải quyết các bài tonas sử dụng JS
        -Không có tác dụng thay đổi giao diện html khi chưa có sự tác động JS
        -Bắt đầu bằng: data-*
        -Để đọc nội dung Attribute: element.getAttribute(tenthuoctinh)
        -Để thay đổi hoặc thêm mới: element.setAttribute(tenthuoctinh, giatrithuoctinh)
        *NOTE: Hàm getAttribute, setAttribute áp dụng cho mọi thuộc tính (Bao gồm cả thuộc tính có sẵn)
 */
var title = document.querySelector(".title");
console.log(title.id);
console.log(title.className);
console.log(title.title);
console.log(title.align);
console.log(title.href);
title.align = "center";
title.className = "hello";
var a = document.querySelector("a");
console.log(title.getAttribute("data-color"));
title.setAttribute("data-index", "ahihi")
console.log(title.dataset.color); // data-color
console.log(title.dataset.animationDuration);
title.dataset.animationTimingFunction = "linear";
title.removeAttribute("data-color")