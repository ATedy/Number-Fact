let fact = document.getElementById("fact");
let factText = document.getElementById("factText");
let numberInput = document.getElementById("numberInput");

// numberInput.addEventListener("input", getFactAjax);
numberInput.addEventListener("input", getFactFetch);

//uisng XHR AJAX
// function getFactAjax() {
//   let number = numberInput.value;
//   let xhr = new XMLHttpRequest();
//   xhr.open("GET", `http://numbersapi.com/${number}`);

//   xhr.onload = function () {
//     if (this.status === 200 && number !== "") {
//       console.log(this.responseText);
//       fact.style.display = "block";
//       factText.innerText = this.responseText;
//     }
//   };

//   xhr.send();
//   // console.log(number);
// }

// using fetch
function getFactFetch() {
  let number = numberInput.value;
  fetch(`http://numbersapi.com/${number}`)
    .then((response) => response.text())
    .then((data) => {
      if (number !== "") {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch((err) => console.error(err));
}
