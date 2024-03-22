/*
DOM Nodes

 */
//Tạo 1 nodes mới
var h1 = document.createElement("h1");
h1.innerText = "hoc js tai f88";
h1.classList.add("title", "title-large");
// Thêm nodes lên UI
// Cần thẻ chứa nó
var root = document.querySelector("#root");
root.append(h1); // chỉ dùng 1 lần
// Muốn tạo 1 thẻ mới thì cần tạo 1 DOM nodes mới
var h2 = document.createElement("h1");
h2.innerText = "Hello mn";
root.append(h2);
var button = document.createElement("button");
button.innerText = "Click me";
root.append(button);
var count = 0;
button.addEventListener("click", function () {
    // console.log("f88");
    // // h2.innerText = "hello ae f8";
    // var h2 = document.createElement("h2")
    // h2.innerText = "Item" + ++count;
    // root.append(h2);
    var newNode = document.createElement("h3")
    newNode.innerText = "Item" + ++count;
    // root.insertBefore(newNode, h1);
    // root.insertBefore(newNode, h1.nextElementSibling);
    root.replaceChild(newNode, h2);
    root.append(h2);
});