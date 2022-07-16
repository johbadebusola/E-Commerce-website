let menu = document.querySelector("#menu");
let nav = document.querySelector("nav")

let cancel = document.querySelector("#menu-cancel")

// MENU TOGGLE
menu.addEventListener("click",toggle)

function toggle(){
nav.classList.remove("hide")

}

//MENU CANCEL
cancel.addEventListener("click",menuCancel)
function menuCancel(){
nav.classList.add("hide")
}

//imageSlider
let image = ["icon1","icon2","icon3","icon4"];
let count = 0
let buttons = document.querySelectorAll(".button");
let sliderPics = document.querySelector("#box1");
buttons.forEach( button => {
button.addEventListener("click",e => {
if(button.classList.contains("prev")){
count--;
if (count < 0){
count = image.length - 1;
}
sliderPics.style.background = `url("images/${image[count]}.jpg") center/100% 100%`;
}

if(button.classList.contains("nex")){
count++;
if (count > image.length - 1){
count = 0;
}
sliderPics.style.background = `url("images/${image[count]}.jpg") center/100% 100%`;
}



})
})
