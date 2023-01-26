let header = document.querySelector('.header');

document.querySelector('#menu-btn').onclick = () =>{
   header.classList.toggle('active');
}

window.onscroll = () =>{
   header.classList.remove('active');
} 

let home = document.querySelector('.home');
let text_1 = home.querySelector('.text-1');
let text_2 = home.querySelector('.text-2');

home.onmousemove = (e) =>{
   var x = (window.innerWidth / 2 - e.pageX) / 10;
   var y = (window.innerHeight / 2 - e.pageY) / 10;
   text_1.style.margin = `${y}px ${x}px`;
   text_2.style.margin = `${y}px ${x}px`;
}

home.onmouseleave = () =>{
   text_1.style.margin = `0`;
   text_2.style.margin = `0`;
}

var swiper = new Swiper(".reviews-slider", {
   spaceBetween: 20,
   loop:true,
   grabCursor:true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   breakpoints: {
     640: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1200: {
       slidesPerView: 3,
     },
   },
});

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

function createSnow(){

   let snowFall = document.querySelector('.snowfall');
   let span = document.createElement('span');
   let size = Math.random() * 10;

   span.style.left = Math.random() * window.innerWidth + 'px';
   span.style.height = 10 + size + 'px';
   span.style.width = 10 + size + 'px';

   snowFall.appendChild(span);

   setTimeout(() =>{
      span.remove();
   },5000);

}  

if(window.innerWidth < 768){
   setInterval(createSnow, 300);
}else{
   setInterval(createSnow, 100);
}