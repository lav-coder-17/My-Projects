// Project Created by Malav Shah Ig:- @lav._.coder

// Random Quotes API url
const quoteApiUrl = "https://api.quotable.io/quotes/random?minLength=100&maxLength=140";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quote = "";
let time = 60;
let timer = "";
let mistake = 0;

const renderNewQuote = async() => {
    const responce = await fetch(quoteApiUrl);
    let data = await responce.json();
    quote = data[0].content;
    // console.log(data[0].content);
    let arr = quote.split("").map((value) => {
        return "<span class='quote-chars'>" + value + "</span>";
    });
    quoteSection.innerHTML += arr.join("");
};

userInput.addEventListener("input", () => {
    let quoteChars = document.querySelectorAll(".quote-chars");
    quoteChars = Array.from(quoteChars);
    let userInputChars = userInput.value.split("");
    quoteChars.forEach((char, index) => {
        if(char.innerText == userInputChars[index]) {
            char.classList.add("success");
        }
        else if (userInputChars[index] == null) {
            if (char.classList.contains("success")) {
              char.classList.remove("success");
            } else {
              char.classList.remove("fail");
            }
        }
        else {
            if (!char.classList.contains("fail")) {
              mistake += 1;
              char.classList.add("fail");
            }
            document.getElementById("mistake").innerText = mistake;
        }
        let check = quoteChars.every((element) => {
            return element.classList.contains("success");
          });
          if (check) {
            displayResult();
          }
    });
});

function updateTimer() {
    if(time == 0) {
        displayResult();
    }
    else {
        document.getElementById("timer").innerText = --time + "s";
    }
}

const timeReduse = () => {
    time = 60;
    timer = setInterval(updateTimer, 1000);
};

const displayResult = () => {
    document.querySelector(".result").style.display = "block";
    clearInterval(timer);
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    let timeTaken = 1;
    if(time != 0) {
        timeTaken = (60 - time) / 100;
    }
    document.getElementById("wpm").innerText = (userInput.value.length / 5 / timeTaken).toFixed(2) + " wpm";
    document.getElementById("accuracy").innerText = Math.round(((userInput.value.length - mistake) / userInput.value.length) * 100) + " %";
};

const startTest = () => {
    mistake = 0;
    timer = "";
    userInput.disabled = false;
    timeReduse();
    document.getElementById("start-test").style.display = "none";
    document.getElementById("stop-test").style.display = "block";
};

window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    renderNewQuote();
};

// Project Created by Malav Shah Ig:- @lav._.coder