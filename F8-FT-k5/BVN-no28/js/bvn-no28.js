let list = document.querySelector('.slide .list-item');
let items = document.querySelectorAll('.slide .list-item .item');
let dots = document.querySelectorAll('.slide .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1; //index = length -1;

//phần này thêm sau nên k biết lỗi ở đâu, chạy đến class cuối thì chỉ tự thêm chấm 1 lần nhưng k có màu
let lengthDots = dots.length - 1;
let liDot = document.createElement('li');
let addDot = document.querySelector('.slide .dots');
while (lengthItems > lengthDots) {
    ++lengthDots;
    addDot.append(liDot);
}
//CLICK
prev.onclick = function () {
    active - 1 < 0 ? active = lengthItems : active = active -1;
    reloadSlide();
}
next.onclick = function () {
    active + 1 > lengthItems ? active = 0 : active += 1;
    reloadSlide();
}
function reloadSlide() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';
    let lastActiveDot = document.querySelector('.slide .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}
dots.forEach((li, index) => {
    li.addEventListener('click', function () {
        active = index;
        reloadSlide();
    })
})
//DRAG
// Chưa làm đc phần này

