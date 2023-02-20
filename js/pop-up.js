const modalButtons = document.querySelectorAll(".__pop-up-button");
const modals=document.querySelectorAll(".modal");
const body = document.querySelector("body");
const closeButton=document.querySelector(".modal__cross");
const submitButton=document.querySelector(".pop-up-element__submit-button");
const startModal = document.querySelector(".start-modal");

function openModal(elem){
    elem.classList.add("_active");
    body.classList.add("lock");
}
function closeModal(e){
    if(e.target.closest(".modal__cross")||e.target.classList.contains(".modal")||e.target.closest(".pop-up-element__submit-button")){
   e.target.closest(".modal").classList.remove("_active");
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



document.addEventListener("DOMContentLoaded",function(e){
    startModal.classList.add("_active");
    body.classList.add("lock");
});

document.addEventListener("pointerdown", function(e){
if(e.target.closest(".start-modal-button")){
    
    startModal.classList.remove("_active");
    body.classList.remove("lock");
}

});
