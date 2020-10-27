//Movement Animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

// Items
const sneaker = document.querySelector('.sneaker img');
const title = document.querySelector('.title');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase');

container.addEventListener("mousemove", (e) => {
   // console.log('hey')
   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate in
container.addEventListener("mouseenter", e => {
   card.style.transition = 'none';

   sneaker.style.transform = "translateZ(200px) rotateZ(-35deg)";
   title.style.transform = "translateZ(150px)";
   description.style.transform = "translateZ(125px)";
   sizes.style.transform = "translateZ(100px)";
   purchase.style.transform = "translateZ(80px)";
})

// Animate Out
container.addEventListener("mouseleave", e => {
   card.style.transition = "all 0.5s ease"
   card.style.transform = `rotateY(0deg) rotateX(0deg)`

   //Popback
   sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
   title.style.transform = "translateZ(0px)";
   description.style.transform = "translateZ(0px)";
   sizes.style.transform = "translateZ(0px)";
   purchase.style.transform = "translateZ(0px)";
});