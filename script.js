let articleOne = document.getElementById("article-1");
let articleTwo = document.getElementById("article-2");

// Write an event listener that listens for the keyup event on the input field.
document.getElementById("message").addEventListener("keyup", (e) => {
    articleOne.innerText =  e.target.value;
    articleTwo.innerText =  e.target.value;

});
// The event handler function should update the textContent property of both sections.