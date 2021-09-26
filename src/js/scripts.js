let tupe = prompt("выберите тип сайта: 1 - САЙТ-ВИЗИТКА, 2 - САЙТ-СЕРВИС, 3 - ИНТЕРНЕТ-МАГАЗИН");
let design = prompt("выберите дизайн сайта: 1 - МИНИМАЛИЗМ, 2 - FLAT DESIGN");
let adaptive = prompt(" вы хотите что бы ваш дизайн был адаптивным? 1 - да, 2 - нет");


window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
  
    function CheckTupe (a) {
        if (a == 1 ){
            return 1000;
        }else if( a == 2){
            return 2000;
        }else if (a == 3){
            return 3000;
        }else{
           return 0;
        }
    }
    
    function CheckDesign (b) {
        if (b == 1 ){
            return 1500;
        }else if( b == 2){
            return 2500;
        }else{
            return 0;
         }
    }
    
    function CheckAdaptive (c) {
        if (c == 1 ){
            return 2000;
        }else if( c == 2){
            return 3000;
        }else{
            return 0;
         }
    }    



function CountPrice(a,b,c){
    let e =  CheckTupe(a);
    let t = CheckDesign(b)
    let g = CheckAdaptive(c);
    if (e,t,g == 0){
        alert("вы вабрали выриант которого нет в списке")
    }else{
        let res = e +  t + g;
        alert(`стоимость разработки сайта составит: ${res} руб.`)
    }

}

CountPrice(tupe,design,adaptive);


