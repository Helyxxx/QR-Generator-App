
//SELECTORS
const image = document.querySelector("img");
const input = document.querySelector("input");
const button = document.querySelector("button");
const api = 'http://api.qrserver.com/v1/';
const apiEndpoint = 'create-qr-code/?size=150x150&color=6d6875&data=';

//EVENT LISTENER
button.addEventListener("click", () => {
    image.src = `${api}${apiEndpoint}${input.value}`;
});
