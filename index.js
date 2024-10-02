let id = 1;
let nextQuoteButton = document.getElementById("next");

function setQuote(data) {
  document.getElementById("quote").innerHTML = `"${data.quote}" — `;
  document.getElementById("author").innerHTML = data.author;
}

function getQuotesPromise() {
  let random = Math.floor(Math.random() * 400);
  fetch(`https://dummyjson.com/quotes/${random}`)
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      setQuote(data);
    });
}
getQuotesPromise();
nextQuoteButton.addEventListener("click", function () {
  getQuotesPromise();
});
