// Project Created by Malav Shah Ig:- @lav._.coder 
let num = document.querySelectorAll(".num");
let interval = 5000

num.forEach((num) => {
    let startval = 0;
    let endval = parseInt(num.getAttribute("data-val"));
    let duration = Math.floor(interval / endval);
    let conuter = setInterval(function(){
        startval += 1;
        num.textContent = startval;
        if(startval == endval) {
            clearInterval(conuter);
        }
    }, duration);
});
// Project Created by Malav Shah Ig:- @lav._.coder 