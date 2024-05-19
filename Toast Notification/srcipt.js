// Porject Created By Malav Shah Ig:- lav._.coder
let popupbox = document.getElementById('popupbox')
let success = '<i class="fa-solid fa-circle-check"></i> Query Submitted Successfully'
let warning = '<i class="fa-solid fa-triangle-exclamation"></i> Warning: Danger!'
let info = '<i class="fa-solid fa-circle-info"></i> Information for U!'
let fail = '<i class="fa-solid fa-circle-xmark"></i> Failed: Subbmission Failed'

function showPopup(msg) {
    let popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = msg;
    popupbox.appendChild(popup);

    if(msg.includes('Successfully')) {
        popup.classList.add('suc')
    }
    if(msg.includes('Warning')) {
        popup.classList.add('war')
    }
    if(msg.includes('Information')) {
        popup.classList.add('inf')
    }
    if(msg.includes('Failed')) {
        popup.classList.add('fai')
    }

    setTimeout(()=>{
        popup.remove();
    },5000)
}
// Porject Created By Malav Shah Ig:- lav._.coder