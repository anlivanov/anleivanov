 
  const arrowPrev=document.querySelector(".swiper-button-prev");
  const arrowNext = document.querySelector(".swiper-button-next");
  const mainSwiper=document.querySelector(".swiper");
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView:'auto',
    spaceBetween: 10,
    navigation:{
      nextEl:".swiper-button-next",
      prevEl:".swiper-button-prev",
    },
    observer:true,
    observeParents:true,
    observeSlideChildren:true,

    touchRatio:4,

  
    breakpoints: {
      // when window width is >= 320px

      440: {
        slidesPerView:'auto',
        spaceBetween: 10,
        loop: false,
        
      
    },

      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
        loop: false,
      },
      768: {
        slidesPerView:1,
        spaceBetween: 0,
         loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        
      },
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
  const mediaQuery=window.addEventListener('resize', function(e){
     if(window.innerWidth==768){
    
      swiper.update();
      
 
       
        
    
     }
  
  });


  

  
