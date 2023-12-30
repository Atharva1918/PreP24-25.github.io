let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menuBtn.onclick=() =>{

    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}


var swiper = new Swiper(".course-slider", {
    spaceBetween:20,
    grabcursor:true,
    
    loop:true,
   
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },

    breakpoints: {
        640: {
          slidesPerView: 1,
     
        },
        768: {
          slidesPerView: 2,
         
        },
        1024: {
          slidesPerView: 3,
         
        },
      },
  });





  var sound1= new Audio();
  sound1.src= "sound/s1.mp3"
  var sound2= new Audio();
  sound2.src= "sound/s2.wav"
  var sound3= new Audio();
  sound3.src= "sound/s3.wav"
  var sound4= new Audio();
  sound4.src= "sound/s4.wav"


  var beepone= $("#beep")[0];

    beepone.play();


    function playsound(){
      var sound=document.getElementById("my-audio");
      sound.play();

  }

  var preloader=document.getElementById('.loader-body');
  function myfunction(){
    preloader.style.display='none';
  }
  