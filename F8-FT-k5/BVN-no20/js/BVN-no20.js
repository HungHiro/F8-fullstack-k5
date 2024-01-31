//BVN
let getParagraph = document.querySelector(".lorem-p");
let strParagraph = document.querySelector(".lorem-p").innerHTML;
let arrWords = strParagraph.split(" ");
let arrWordsLength = arrWords.length;
let i = 0;

function setColorParagraph() {
    let arrContent = arrWords.map((word, a) => {
        if (a === i) {
            return `<span class="highlight">${word}</span>`
        } else {
            return `<span class="default">${word}</span>`
        }
    }).join(" ");
    getParagraph.innerHTML = arrContent;
    i++;
    if (i >= arrWordsLength) {
        i = 0;
    }
}
setInterval(setColorParagraph, 1000);