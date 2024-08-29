const more = document.querySelectorAll(".latnivalo");
const totalMore = more.length;
const moreButton = document.querySelector(".tovabbi");
const lessButton = document.querySelector(".kevesebb");

moreButton.addEventListener("click",function() {
    showMore();
})

lessButton.addEventListener("click",function(){
    showLess();
}

)

function showMore() {
    for(let i = 3; i < totalMore; i++) {
            more[i].classList.add("show");
    }
    moreButton.classList.add("hide");
    lessButton.classList.add("show");

}

function showLess() {
    for(let i = 0; i < totalMore; i++) {
        more[i].classList.remove("show");
    }
    moreButton.classList.remove("hide");
    lessButton.classList.remove("show");
}

window.onload=showLess();