const modalButtons = document.querySelectorAll(".__pop-up-button");
const modals=document.querySelectorAll(".pop-up-element");
const body = document.querySelector("body");
const closeButton=document.querySelector(".pop-element__close-button");
const submitButton=document.querySelector(".pop-up-element__submit-button");

function openModal(elem){
    elem.classList.add("_active");
    body.classList.add("lock");
}
function closeModal(e){
    if(e.target.closest(".pop-element__close-button")||e.target.classList.contains("pop-up-element__wrapper")||e.target.closest(".pop-up-element__submit-button")){
   e.target.closest(".pop-up-element").classList.remove("_active");
    body.classList.remove("lock");
    }

}

modalButtons.forEach((button)=>{
    button.addEventListener("pointerdown", function(e){
        let dataID = button.dataset.popButton;
        modals.forEach(function(modal){
            if(dataID==modal.dataset.popUp){
                openModal(modal);
            }
          
        });
    });
    modals.forEach(function(modal){
        modal.addEventListener("pointerdown", e => closeModal(e));
    });
})


const startModal=document.querySelector(".pop-up-start__wrapper");
document.addEventListener("DOMContentLoaded",function(e){
    startModal.style.display="block";
});

document.addEventListener("pointerdown", function(e){
if(e.target.closest(".__close")){
    
    startModal.style.display="none";
}

});
