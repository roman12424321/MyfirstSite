
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





const option = {
  root:null,
  rootMargin: '0px',
  threshold: 1.0
}

function v () {

  const time = 1000;
  const step = 1;


  let x = document.querySelector("#out");
  let k = document.querySelector("#outt");

  function outNum(num ,elem) {
    let e = document.querySelector("#out");
    n = 0;
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n == num) {
        clearInterval(interval);
      }
      e.innerHTML = n;
    }, t);
  }

  outNum(100, "#out");
  outNum(100, "#outt");

}





const observer = new IntersectionObserver (v,option) 

let g = document.querySelector(".static");


observer.observe(g)