var btnModalOpen = document.querySelector(".btn-modal-open");
var btnModalClose = document.querySelector(".btn-modal-close");
var modal = document.querySelector(".modal")
btnModalClose.addEventListener("click", function () {
    modal.remove("open");
})
btnModalOpen.addEventListener("click", function () {
    modal.classList.add("open");
})
