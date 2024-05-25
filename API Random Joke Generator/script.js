// Project Created by Malav Shah Ig:- @lav._.coder
const jokeBox = document.getElementById('joke-box');
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {
    jokeBox.classList.remove('fadeIn');
    jokeBox.classList.add('fadeOut');
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeBox.textContent = `${item.joke}`;
        jokeBox.classList.add('fadeIn');
        jokeBox.classList.remove('fadeOut');
    });
}
btn.addEventListener("click",getJoke);
getJoke();
// Project Created by Malav Shah Ig:- @lav._.coder