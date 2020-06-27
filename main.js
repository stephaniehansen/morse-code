import lookup from "./morse.js";

const text = document.getElementById("text");
const translatedBox = document.getElementById("translatedBox");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

submit.addEventListener("click", (event => {
    event.preventDefault();
    convertText(text.value);
}))

const convertText = (text) => {
    const chars = text.toUpperCase().split("");

    let translated = chars.map(char => {
        return lookup.filter(item => { 
            return char === item.character;
        }).map(item => {return item.code});
    })

    let translatedString = translated.toString().split(",,").join(" / ").split(",").join(" ");

    result.innerHTML = `<span>${translatedString}</span>`;
    translatedBox.value = translatedString;
}