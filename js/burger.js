const burgerIcon = document.querySelector(".menu__icon");
const burgerBody=document.querySelector(".menu__body");
burgerIcon.addEventListener("pointerdown", function(e){
    burgerIcon.classList.toggle("_active");
    burgerBody.classList.toggle("_active");
    document.body.classList.toggle("lock");
});