const searchIcon = document.querySelector(".search__button");
const searchInput = document.querySelector(".search__input");
const menuSearch = document.querySelector(".menu__search");
const searchList = document.querySelector(".search__list")
searchIcon.addEventListener("pointerdown", function(e){
    if(!searchInput.classList.contains("_active")){
        searchInput.classList.add("_active");
        menuSearch.classList.add("_active")
    }
});

document.addEventListener("pointerdown", function(e){
        if(!e.target.closest(".menu__search")){
            searchInput.classList.remove("_active");
            searchInput.value="";
            menuSearch.classList.remove("_active")
        }
    });

/*searchInput.addEventListener("input",function(e){
    let inputValue = this.value.trim().toUpperCase();
    let searchItems=document.querySelectorAll(".search__list li");
    if(inputValue != ""){
        searchItems.forEach(function(elem){
            if(elem.firstElementChild.innerText.toUpperCase().search(inputValue)!=-1){
                elem.classList.remove("hide");
                searchList.style.display="flex";
                }else{
                elem.classList.add("hide");
            }
        });
    }else{
        searchList.style.display="none";
        searchItems.forEach(function(elem){
        elem.classList.add("hide");
        });
    }
});

*/