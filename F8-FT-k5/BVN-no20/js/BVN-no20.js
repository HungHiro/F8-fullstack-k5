//BVN
let getParagraph = document.querySelector(".lorem-p");
let strParagraph = document.querySelector(".lorem-p").innerHTML;
let arrWords = strParagraph.split(" ");
let arrWordsLength = arrWords.length;
let a = 0;

function setColorParagraph() {
    let arrContent = arrWords.map((word, index) => {
        return index === a ? `<span class="highlight">${word}</span>` : `<span class="default">${word}</span>`;
        // if (index === a) {
        //     return `<span class="highlight">${word}</span>`
        // } else {
        //     return `<span class="default">${word}</span>`
        // }
    }).join(" ");
    getParagraph.innerHTML = arrContent;
    a++;
    if (a >= arrWordsLength) {
        a = 0;
    }
}
setInterval(setColorParagraph, 1000);