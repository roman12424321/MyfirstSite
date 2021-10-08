$(document).ready(function () {

    $(window).scroll( () => { 
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((i , el) => {
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");
                    };
                });
                $("nav li:eq("+ i +")").find("a").addClass("active");
            };
           
        });
    });

    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
      });
    

// slider

$('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
        verticalFit: true,
        titleSrc: function(item) {
            return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
    },
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
            return element.find('img');
        }
    }
    
});


    
});



$('a[href^="#"]').click(function () { 
       let valHref = $(this).attr("href");
       $('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"})
})


