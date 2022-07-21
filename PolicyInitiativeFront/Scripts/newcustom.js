

// slider in Initiative Details page

var initiativeSwiper;

function initInitiativeSlider() {
    if ($('.inSlide').length != 0) {
        initiativeSwiper = new Swiper('.inSlide .outerscreen', {
            slidesPerView:'auto',
            watchOverflow: true,
            speed: 900,
            loop: false,
            spaceBetween:44,
            direction: 'vertical',
            freeMode: false,
            navigation: {
                nextEl: '.inSlide .navnext',
                prevEl: '.inSlide .navprev',
            },
        });
    }
}





$(window).ready(function () {
    $('.inSlide .head').each(function () {  // get height of each box
        $(this).find('.heightnb').html($(this).height());
    });


    if ($('.desktop').length != 0 || $('.inSlide .detect').is(':visible') ){ 
      //  initInitiativeSlider();
    }

 


    //get value from url to scroll
    if ($('.inSlide').length != 0) {
        $.urlParam = function (name) {
            var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return results[1] || 0;
            
        }

         // slide to corresponding box 
        $('html,body').animate({ scrollTop: $('.mainslide').eq($.urlParam('box')).offset().top - $('header').height() - 18 })   

        //if ($('.desktop').length != 0 || $('.inSlide .detect').is(':visible')) { 
        //    initiativeSwiper.slideTo($.urlParam('box'));   // slide the swiper to corresponding box after clicking from homepage
        //}

        //if ($('.inSlide .detect').is(':hidden')) {
        //    $('html,body').animate({ scrollTop: $('.mainslide').eq($.urlParam('box')).offset().top - $('header').height()-18})    // slide to corresponding box - mobiles
        //}
        
    }

})


$('.inSlide .head .more').click(function () {   // show more/less text
    $(this).parents('.mainslide').addClass('open');
   // var getvalue = parseInt($(this).parents('.mainslide').find('.head .heightnb').html());
   // $(this).parents('.mainslide').find('.Slider').css({ 'paddingTop': getvalue });
});

$('.inSlide .head .close').click(function () {  //close
    if ($(this).parents('.mainslide').hasClass('open')) {
        $(this).parents('.mainslide').removeClass('open');
       // $(this).parents('.mainslide').find('.Slider').css({ 'paddingTop': 0 });
    }
})





function openImagePopup() {
    $('.imagePopup').addClass('open');
    $('body').addClass('imgPopOpened');
   
}

function closeImagePopup() {
    $('.imagePopup').removeClass('open');
    $('body').removeClass('imgPopOpened');
   
}


$('.Article .text img').click(function () {
    var image = $(this).attr('src');
    $("#popimg").attr("src", image)
    openImagePopup();
})



