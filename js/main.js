let display=document.querySelector(".display");
let showdisplay=document.querySelectorAll(".show-display");
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