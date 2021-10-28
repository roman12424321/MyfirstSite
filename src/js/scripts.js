
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


let typeSite = document.querySelector("#typeSite") ;
let priceOption = document.querySelector("#priceOption");

let Design = document.querySelector("#Design");
let DesignOption = document.querySelector("#DesignOption");

let adaptive = document.querySelector("#adaptive");
let adaptiveOption = document.querySelector("#adaptiveOption");


let res = document.querySelector(".price__coastv");
let ti = document.querySelector(".price__time") 

let btn = document.querySelector("#btnn");

let er = priceOption.dataset.price;
let et = DesignOption.dataset.Ddesign;
let ek =  adaptiveOption.dataset.adaptive;

btn.onclick = event => {

    let coast = Number(typeSite.value)  + Number(Design.value)  + Number(adaptive.value) ;
    if(Number(typeSite.value) == 0){
       er = 0;
    };
    if(Number(typeSite.value) == 1000){
       er = 2;
    };
    if(Number(typeSite.value) == 2000){
      er = 1;
   };
   if(Number(typeSite.value) == 3000){
    er = 3;
    };

    if(Number(adaptive.value) == 0){
      ek = 0;
    };
    if(Number(adaptive.value) == 10){
      ek = 2;
    };

    if(Number(Design.value) == 0){
      et = 0;
    };
    if(Number(Design.value) == 1000){
      et = 1;
    };
    if(Number(Design.value) == 2000){
      et = 0.5;
    };
    let time = Number(er) + Number(et) + Number(ek);
    ti.innerHTML = time + " месяца";
    res.innerHTML = coast + " руб";
}









let targets = document.querySelector(".out");
let targetCont = targets.textContent;

let out1 = document.querySelector(".out1");
let out2 = document.querySelector(".out2");
let out3 = document.querySelector(".out3");
let out4 = document.querySelector(".out4");


const time = 10000;
const step = 1;

function outNum(num, elem) {
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n >= num) {
      clearInterval(interval);
    }
    elem.innerHTML = n;
  }, t);
}




var options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: .01
}

function collback (){
    outNum(119, out1)
    outNum(400, out2)
    outNum(340, out3)
    outNum(23, out4)
}

var observer = new IntersectionObserver(collback, options);


observer.observe(targets);


// lazy loaded

const imeges = document.querySelectorAll('img');




function handleImg(myImg, observer) {
  myImg.forEach(myImgSingle => {
    if(myImgSingle.intersectionRatio > 0){
      loadImage(myImgSingle.target);
    }
  });
};

function  loadImage(image){
  image.src = image.getAt
  tribute('data')
}
let observerr = new IntersectionObserver( handleImg, options);

imeges.forEach(img =>{
  observerr.observe(img);
})