const servicesItems = document.querySelector(".services__items");
servicesItems.addEventListener("pointerover",function(e){
    if(e.target.closest(".services__item")){
        let currentCard=e.target.closest(".services__item");
        currentCard.style.background="#FFC700";
        currentCard.querySelector(".services__button").style.background="#000";
        currentCard.querySelector(".services__button").style.color="#FFF";
    }});
servicesItems.addEventListener("pointerout",function(e){
    if(e.target.closest(".services__item")){
        let currentCard=e.target.closest(".services__item");
        currentCard.style.background="#D9D9D9";
        currentCard.querySelector(".services__button").style.background="#FFC700";
        currentCard.querySelector(".services__button").style.color="#000";
    }
});