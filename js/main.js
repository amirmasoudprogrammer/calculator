let display=document.querySelector(".display");
let showdisplay=document.querySelectorAll(".show-display");
let calc_ulate=document.querySelector(".calculate");
let all_clear=document.querySelector(".all-clear");
let clear_last=document.querySelector(".clear-last");
clear_last.addEventListener("click",startclearlast);
function startclearlast() {
    let texts=display.innerText;
    if (texts.length == 1){
        display.innerText=0
    }else {
        display.innerText=texts.substring(0,texts.length -1)
    }
}

all_clear.addEventListener("click",startallclear);
function startallclear() {
    display.innerText= 0
}
calc_ulate.addEventListener("click",startcalculate);
function startcalculate() {
    let result=display.innerText;
    display.innerText=eval(result)
}
showdisplay.forEach(function (item){
    item.addEventListener("click",startshow);
})
function startshow(e) {
    let x = e.target.innerText;
    if (display.innerHTML == 0){
        return display.innerHTML= x;
    }
    return display.innerHTML +=x;
}