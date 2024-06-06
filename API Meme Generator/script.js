// Project Created by Malav Shah Ig:- @lav._.coder
let meme = document.getElementById("meme");
let title = document.getElementById("meme-title");
let res = document.getElementById("result");
let btn = document.getElementById("btn");

let url = "https://meme-api.com/gimme/";
let subreddits = ["dankmemes", "catmemes", "wholesomemes", "dogmemes", "me_irl"];

let genmeme = () => {
    let randomsr = subreddits[Math.floor(Math.random() * subreddits.length)];
    fetch(url + randomsr)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        res.innerHTML = `
        <img src="${data.url}" alt="meme" id="meme">
        <p id="meme-title">${data.title}</p>
        `;
        // let memeImg = new Image();
        // memeImg.onload = () => {
        //     meme.src = data.url;
        //     title.innerHTML = data.title;
        // };
        // memeImg.url = data.url;
    });
}

btn.addEventListener("click", genmeme);
// Project Created by Malav Shah Ig:- @lav._.coder