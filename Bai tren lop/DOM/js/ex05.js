//ClassList
var btn = document.querySelector(".btn");
var h1 = document.querySelector("h1")
console.log(h1.classList)
btn.addEventListener("click", function () {
    // h1.className = h1.className + ' abc';
    h1.classList.add("abc", "def");
    console.log(h1.classList.contains("abc"));
    h1.classList.toggle("gle");
});
btn.addEventListener("dbclick", function () {
    h1.classList.remove("abc");
});
btn.addEventListener("click", )