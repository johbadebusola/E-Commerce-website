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

//Counter
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let countOutput = document.querySelector("#count-output")
let counts = 0;
// for increment of number
plus.addEventListener("click", e =>{
  counts += 1;
countOutput.innerHTML = counts;
})
//for decrement of numbers
minus.addEventListener("click", e =>{
    counts -= 1;
    if (counts < 0){
        return ;
    }
  countOutput.innerHTML = counts;
  })

  // clicking of thumbnail
  let thumbnail1 = document.querySelector("#thumbnail1");
  let thumbnail2 = document.querySelector("#thumbnail2");
  let thumbnail3 = document.querySelector("#thumbnail3");
  let thumbnail4 = document.querySelector("#thumbnail4");
  let carousel = document.querySelector("#couresel");


  thumbnail1.addEventListener("click", e =>{
    
    carousel.style.background = "url(images/icon1.jpg) center/100% 100% ";
  })
  thumbnail2.addEventListener("click",  e =>{

    carousel.style.background = "url(images/icon2.jpg) center/100% 100%";
  })
  thumbnail3.addEventListener("click",  e =>{

    carousel.style.background = "url(images/icon3.jpg) center/100% 100%";
  })
  thumbnail4.addEventListener("click",  e =>{

    carousel.style.background = "url(images/icon4.jpg) center/100% 100%";
  })