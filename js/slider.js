 
  const arrowPrev=document.querySelector(".custom-button-prev");
  const arrowNext = document.querySelector(".custom-button-next");
  const mainSwiper=document.querySelector(".swiper");
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:'auto',
    spaceBetween: 10,
    navigation:{
      nextEl:".custom-button-next",
      prevEl:".custom-button-prev",
    },
    touchRatio:5,


    breakpoints: {
      // when window width is >= 320px

      440: {
        slidesPerView:'auto',
        spaceBetween: 10,
        
      
    },

      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 0,
         loop: true,
         navigation:{
          nextEl:".swiper-button-next",
          prevEl:".swiper-button-prev",
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      }
    },
    on:{
      reachBeginning:function(){
        arrowPrev.classList.add("initial");
        arrowNext.classList.remove("end");
        
      },
    reachEnd:function(){
      
      arrowPrev.classList.remove("initial");
      arrowNext.classList.add("end");
    },
  },

  
    // If we need pagination
 
  
    // Navigation arrows
 
    // And if we need scrollbar

  });

  

  
