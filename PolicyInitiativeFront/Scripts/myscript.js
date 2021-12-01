
document.onkeydown = function (e) {
    e = e || window.event;
    if (e.keyCode == 27) {   // on escape buttom
        if ($('.Menu').hasClass('open')) {
            $('.Menu').removeClass('open');
        }

        closeFilterDropdown();

        closeNewsletterPop();

        if ($('.searchPop').hasClass('open')) {
            closeSearchPopup();
        }
        if ($('.videoPopup').hasClass('open')) {
            closeVideoPopup();
        }
        if ($('.authorPopup').hasClass('open')) {
            closeAuthorPopup();
        }
    }
}


$(window).load(function () {   // show website after load
    $('#wrapper').addClass('show');
})











//_________________________________________________________________

if (!/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {   // desktop only
    $('body').addClass('desktop');
}

if (navigator.appVersion.indexOf("Win") != -1) {  // windows only
    $('body').addClass('windows');
}
if ($(document).height() > $(window).height()) {  // detect if page contain scroll
    $('body').addClass('containVscroll');
}
$(window).resize(function () {
    if ($(document).height() > $(window).height()) {
        $('body').addClass('containVscroll');
    } else {
        $('body').removeClass('containVscroll');
    }
})
//_________________________________________________________________








// slideshow on homepage
//_________________________________________________________________________________________________

var slideshowSwiper;


function initSlideshowSwiper() {
    if ($('.Slideshow').length != 0) {
        slideshowSwiper = new Swiper('.Slideshow .screen', {
            slidesPerView: 1,
            lazy: true,
            watchOverflow: true,
            speed: 900,
            loop: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
            },
            spaceBetween: 0,
            navigation: {
                nextEl: '.Slideshow .next',
                prevEl: '.Slideshow .prev',
            },
            on: {
                lazyImageReady: function (slideEl) {
                    $('.swiper-lazy-loaded').parents('.swiper-slide').addClass('imageready');
                }
            },

        });




    }
}

$(window).load(function () {
    initSlideshowSwiper();
});



//_________________________________________________________________________________________________







// google map in contact page
//_________________________________________________________________________________________________
var locations = [];
var pointer;
var row = 50;
var fronturl = $('#FrontUrl').val();
$(window).load(function () {

    if ($('#map').length != 0) {

        $('.connectedloc' + ' li').each(function () {

            var lat = $(this).attr("lat");
            var lng = $(this).attr("lng");

            pointer = { "lat": Number(lat), "lng": Number(lng) };
            locations.push(pointer);
            //console.log(markerData);
        });
       
        var image = {
            url: fronturl + 'content/images/marker.png',
            scaledSize: new google.maps.Size(30, 30)
        };    
      

        var options = {
            center: new google.maps.LatLng(33.895872, 35.471787),
            zoom: 16,
            zoomControl: false,
            disableDefaultUI: true,
            styles: [
                { elementType: 'labels.text.stroke', stylers: [{ color: '#ffffff' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#616161' }] },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#DADADA' }]
                },
                {
                    featureType: 'landscape',
                    elementType: 'geometry',
                    stylers: [{ color: '#F5F5F5' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#C9C9C9' }]
                }

            ]
        };

        var div = document.getElementById('map');
        var homeMap = new google.maps.Map(div, options);
        for (i = 0; i < locations.length; i++) {
            var marker1 = new google.maps.Marker({
                position: { lat: locations[i].lat, lng: locations[i].lng },
                map: homeMap,
                icon: image
            });

        }





    }


})



//_________________________________________________________________________________________________


   




// homepage, masonry elements layout  (https://masonry.desandro.com/methods.html)
//_________________________________________________________________________________________________


function initMasonryList() {
    $('.itemsList .grid').masonry({
        itemSelector: '.grid-item',
        horizontalOrder: true,
    });
}


// on scroll load more items
if ($('.initiativeSubpage').length == 0) {  // exclude masonry in initiatives/template2
$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {  // when reaching end of document
        $('.itemsList').addClass('loadmore');
        //var $items = $('<li class="grid-item"> <div class="item"> <div class="top"> <div class="date">05.04.21</div> </div> <h2 class="title"><a href="http://thepolicyinitiativehtml.koeinbeta.com/article/template1">Lebanon: A Race to Form a Government or a Race to the Bottom?</a></h2> <div class="author">Sami Atallah</div> <div class="text"> <a href="http://thepolicyinitiativehtml.koeinbeta.com/article/template1">Five months have passed since caretaker Prime Minister Saad Hariri was nominated to form a new government. Since then, he has struggled to strike a balance between domestic and regional interests. While it might take some time for ostensibly disparate interests to align <span class="read">read</span></a> </div> </div> </li><li class="grid-item"> <div class="item"> <div class="top"> <div class="date">05.04.21</div> </div> <h2 class="title"><a href="http://thepolicyinitiativehtml.koeinbeta.com/article/template1">Lebanon: A Race to Form a Government or a Race to the Bottom?</a></h2> <div class="author">Sami Atallah</div> <div class="text"> <a href="http://thepolicyinitiativehtml.koeinbeta.com/article/template1">Five months have passed since caretaker Prime Minister Saad Hariri was nominated to form a new government. Since then, he has struggled to strike a balance between domestic and regional interests. While it might take some time for ostensibly disparate interests to align <span class="read">read</span></a> </div> </div> </li><li class="grid-item"> <div class="item"> <div class="top"> <div class="date">05.04.21</div> </div> <h2 class="title"><a href="http://thepolicyinitiativehtml.koeinbeta.com/article/template1">Lebanon: A Race to Form a Government or a Race to the Bottom?</a></h2> <div class="author">Sami Atallah</div> <div class="text"> <a href="http://thepolicyinitiativehtml.koeinbeta.com/article/template1">Five months have passed since caretaker Prime Minister Saad Hariri was nominated to form a new government. Since then, he has struggled to strike a balance between domestic and regional interests. While it might take some time for ostensibly disparate interests to align <span class="read">read</span></a> </div> </div> </li><li class="grid-item"> <div class="item"> <div class="top"> <div class="date">05.04.21</div> </div> <h2 class="title"><a href="http://thepolicyinitiativehtml.koeinbeta.com/article/template1">Lebanon: A Race to Form a Government or a Race to the Bottom?</a></h2> <div class="author">Sami Atallah</div> <div class="text"> <a href="http://thepolicyinitiativehtml.koeinbeta.com/article/template1">Five months have passed since caretaker Prime Minister Saad Hariri was nominated to form a new government. Since then, he has struggled to strike a balance between domestic and regional interests. While it might take some time for ostensibly disparate interests to align <span class="read">read</span></a> </div> </div> </li>');
       
        setTimeout(function () {
            if ($('.itemsList').hasClass('loadmore')) {
              /*  $('.itemsList .grid').append($items).masonry('appended', $items);*/
                initMasonryList(); // recall masonry
            }
                $('.itemsList').removeClass('loadmore');
            }, 2222);
           
     

        
    } else {
        $('.itemsList').removeClass('loadmore');
    }
    });

}
  


$(window).load(function () {
    setTimeout(function () {
        initMasonryList();
    }, 500);
    
});


// show arabic/english boxes
function arabic(event) {   // show arabic box
    $(event.target).parents('.grid-item').find('.englishBox').hide();
    $(event.target).parents('.grid-item').find('.arabicBox').show();
    initMasonryList(); // call masonry
};

function english(event) {   // show english box
    $(event.target).parents('.grid-item').find('.englishBox').show();
    $(event.target).parents('.grid-item').find('.arabicBox').hide();
    initMasonryList(); // call masonry
};

//_________________________________________________________________________________________________








// author popup
//_________________________________________________________________________________________________


function openAuthorPopup() {
    $('.authorPopup:not(.arabic)').addClass('open');
    $('body').addClass('stopscroll');
}

function openArabicAuthorPopup() {
    $('.authorPopup.arabic').addClass('open');
    $('body').addClass('stopscroll');
}

function closeAuthorPopup() {
    $('.authorPopup').removeClass('open');
    $('body').removeClass('stopscroll');
}

$('.itemsList .item:not(.arabicBox) .author').click(function () {  // open english author popup
    openAuthorPopup();
});



$('.itemsList .item.arabicBox .author').click(function () {  // open arabic author popup
    openArabicAuthorPopup();
})


$('.Article:not(.arabic) .author').click(function () {  // open englisg author popup in article page
    openAuthorPopup();
});

$('.Article.arabic .author').click(function () {  // open arabic author popup in article page
    openArabicAuthorPopup();
});

$('.authorPopup  .close').click(function () { // close english author popup
    closeAuthorPopup();
})


//_________________________________________________________________________________________________






// header + menus
//_________________________________________________________________________________________________

// rollover over logo on homepage

$('.desktop.homePage header .logo').mouseenter(function () {
    $('header .logo .main').hide();
    $('header .logo .main2').show();
});

$('.desktop.homePage header .logo').mouseleave(function () {
    $('header .logo .main').show();
    $('header .logo .main2').hide();
});




//animate header on scroll on homepage
// ___________________________________________________________________________________________________

function animateHeader() {
    if ($(window).scrollTop() > 200) {
        $('body').addClass('minimiseheader');
    } else {
        $('body').removeClass('minimiseheader');
    }
}

$(window).load(function () {
    animateHeader();
})


$(window).scroll(function () {
    animateHeader();
})

// ___________________________________________________________________________________________________





// burger menu
// ___________________________________________________________________________________________________

$('.openMenu').click(function (event) {
    openWebsiteMenu();

    if ($('.newletterPop').css('opacity', 1)) {  // close newsletter pop in case opened
        $('.newletterPop').css('opacity', 0);
        $('.newletterPop').css('pointerEvents', 'none');
    }

    event.stopPropagation();
})

$('.Menu').click(function (event) {
    event.stopPropagation();
})

$('#wrapper').click(function (event) {
    if ($('.Menu').hasClass('open')) {
        $('.Menu').removeClass('open');
    } 
})


function openWebsiteMenu() {
    if ($('.Menu').hasClass('open')) {
        $('.Menu').removeClass('open');
    } else {
        $('.Menu').addClass('open');
    }
}


// ___________________________________________________________________________________________________




// newsletter popup
// ___________________________________________________________________________________________________

$('.mailboxBtn').click(function (event) {
    openNewsletterPop();
    event.stopPropagation();
})

$('.newletterPop').click(function (event) {
    event.stopPropagation();
})

$('#wrapper').click(function () {
    if ($('header .openMenu').is(':visible')){
        if ($('.newletterPop').css('opacity', 1)) {
            $('.newletterPop').css('opacity', 0);
            $('.newletterPop').css('pointerEvents', 'none');
        }
    } else {
        $('.newletterPop').removeClass('open');
    }
})

$('.newletterPop .exit').click(function () {
    if ($('header .openMenu').is(':visible')) {
        if ($('.newletterPop').css('opacity', 1)) {
            $('.newletterPop').css('opacity', 0);
            $('.newletterPop').css('pointerEvents', 'none');
        }
    } 
})


function openNewsletterPop() {
    if ($('.newletterPop').hasClass('open')) {
        $('.newletterPop').removeClass('open');
    } else {
        $('.newletterPop').addClass('open');
    }
}

function closeNewsletterPop() {
    if ($('.newletterPop').hasClass('open')) {
        $('.newletterPop').removeClass('open');
    }
}


function submitNewslMssg() {
    $('.newletterPop .sendbtn').addClass('loading');

    setTimeout(function () {
        $('.newletterPop .txmssg').addClass('show');
        $('.newletterPop .wrap').addClass('hide');
    }, 1500);

    setTimeout(function () {
        $('.newletterPop .txmssg').removeClass('show');
        $('.newletterPop .wrap').removeClass('hide');
        $('.newletterPop .sendbtn').removeClass('loading');
    }, 3500);


}


// ___________________________________________________________________________________________________





// filter menu
// ___________________________________________________________________________________________________


// open filter dropdown

$('.filterBtn').click(function () {
    openFilterDropdown();
});

function openFilterDropdown() {
    $('.filterMenu').addClass('open');
    $('body').addClass('filterstopscroll');
}

function closeFilterDropdown() {
    if ($('.filterMenu').hasClass('open')) {
        $('.filterMenu').removeClass('open');
        $('body').removeClass('filterstopscroll');
    }
    
}




$('.sortOpen').click(function () {  // opening keywords & type menus
    var click = $(this);
    if ($(this).next('.pop').is(':hidden')) {
        $('.sortOpen').removeClass('opened');
        $('.sortOpen').next('.pop').slideUp();
        $(this).next('.pop').slideDown();  //show
        $(this).addClass('opened');
        $('.filterMenu .wrap').animate({ scrollTop: $(click).position().top - $('header').height() });
        
    } else {
        $(this).next('.pop').slideUp();  //hide
        $(this).removeClass('opened');
    }
})


// appending selected keywords and adding delete buttom with jquery
// for english boxes
$('.filterMenu .englishBox .pop.red .link').click(function () { // add selected keywords on right side
    $('.filterMenu .close').hide();
    $('.filterMenu .applyBtn').show();
    $(this).addClass('selected');   // keywords menu
    $(this).next('.mobCancelbtn').show();//show delete buttom for mobile
    var getvalue = $(this).html();  
    $('<div class="delete"></div>').insertAfter($('<div class="keyword"></div>').appendTo('.englishBox .Values .list').html(getvalue).wrap('<li></li>'));
});

$('.filterMenu .englishBox .pop.green .link').click(function () {  // add selected keywords on right side
    $('.filterMenu .close').hide();
    $('.filterMenu .applyBtn').show();
    $(this).addClass('selected');   // type menu
    $(this).next('.mobCancelbtn').show();//show delete buttom for mobile
    var getvalue = $(this).html();  
    $('<div class="delete"></div>').insertAfter($('<div class="keyword green"></div>').appendTo('.englishBox .Values .list').html(getvalue).wrap('<li></li>'));
});

$(".englishBox .Values").on('click', '.delete', function () {   // when pressing delete
    var click = $(this);
    var getvalue = $(this).prev('.keyword').html();   // unselect item in sort menu
    $('.filterMenu .englishBox .pop .items .link:contains('+getvalue+')').removeClass('selected');

    setTimeout(function () {    // delete keyword
        $(click).parent('li').remove();
        $('.filterMenu .englishBox .pop .link:contains(' + getvalue + ')').next('.mobCancelbtn').hide();

        if ($('.filterMenu .Values ul.list>li').length == 0) {  // when all items are deleted, remove apply buttom
            $('.filterMenu .close').show();
            $('.filterMenu .applyBtn').hide();
        }

    }, 88);

   

});

$('.englishBox .mobCancelbtn').click(function () { // when pressing delete for mobile
    $(this).prev('.link').removeClass('selected');
    $(this).hide();
    var getvalue = $(this).prev('.link').html();   // unselect item in sort menu
    setTimeout(function () {    // delete keyword
        $('.filterMenu .englishBox .Values .keyword:contains(' + getvalue + ')').parent('li').remove();

        if ($('.filterMenu .Values ul.list>li').length == 0) {  // when all items are deleted, remove apply buttom
            $('.filterMenu .close').show();
            $('.filterMenu .applyBtn').hide();
        }

    }, 88);
});




// for arabic boxes
$('.filterMenu .arabicBox .pop.red .link').click(function () { // add selected keywords on right side
    $('.filterMenu .close').hide();
    $('.filterMenu .applyBtn').show();
    $(this).addClass('selected');   // keywords menu
    $(this).next('.mobCancelbtn').show();//show delete buttom for mobile
    var getvalue = $(this).html();
    $('<div class="delete"></div>').insertAfter($('<div class="keyword"></div>').appendTo('.arabicBox .Values .list').html(getvalue).wrap('<li></li>'));
});

$('.filterMenu .arabicBox .pop.green .link').click(function () {  // add selected keywords on right side
    $('.filterMenu .close').hide();
    $('.filterMenu .applyBtn').show();
    $(this).addClass('selected');   // type menu
    $(this).next('.mobCancelbtn').show();//show delete buttom for mobile
    var getvalue = $(this).html();
    $('<div class="delete"></div>').insertAfter($('<div class="keyword green"></div>').appendTo('.arabicBox .Values .list').html(getvalue).wrap('<li></li>'));
});

$(".arabicBox .Values").on('click', '.delete', function () {   // when pressing delete
    var click = $(this);
    var getvalue = $(this).prev('.keyword').html();   // unselect item in sort menu
    $('.filterMenu .arabicBox .pop .items .link:contains(' + getvalue + ')').removeClass('selected');

    setTimeout(function () {    // delete keyword
        $(click).parent('li').remove();
        $('.filterMenu .arabicBox .pop .link:contains(' + getvalue + ')').next('.mobCancelbtn').hide();


        if ($('.filterMenu .Values ul.list>li').length == 0) {  // when all items are deleted, remove apply buttom
            $('.filterMenu .close').show();
            $('.filterMenu .applyBtn').hide();
        }

    }, 88);

    if ($('.filterMenu .Values ul.list>li').length == 0) {
        $('.filterMenu .close').show();
        $('.filterMenu .applyBtn').hide();
    }
   


});

$('.arabicBox .mobCancelbtn').click(function () { // when pressing delete for mobile
    $(this).prev('.link').removeClass('selected');
    $(this).hide();
    var getvalue = $(this).prev('.link').html();   // unselect item in sort menu
    setTimeout(function () {    // delete keyword
        $('.filterMenu .arabicBox  .Values .keyword:contains(' + getvalue + ')').parent('li').remove();
    }, 88);
});




function showArabicFilter() {
    $('.filterMenu .arabicBox,.filterMenu .languages .english').show();
    $('.filterMenu .englishBox,.filterMenu .languages .arabic').hide();
}

function showEnglishFilter() {
    $('.filterMenu .arabicBox,.filterMenu .languages .english').hide();
    $('.filterMenu .englishBox,.filterMenu .languages .arabic').show();
}




// ___________________________________________________________________________________________________





// article templates
// calc width caption of image to be same like image

function calcCaptionWidth() {
    $('.captionPic').each(function () {
        $(this).css('max-width', $(this).prev('.pic').find('img').outerWidth());
    })
}

$(window).load(function () {
       // calcCaptionWidth();
});




// swipers in article pages

let artcilesInstances = [];

function initArticleSwiper() {
    if ($('.itemSwiper').length != 0) {

        $(".itemSwiper .screen").each(function (index, element) {
            const $this = $(this);
            $this.addClass("instance-" + index);
            $this.parents('.itemSwiper').find(".prev").addClass("prev-" + index);
            $this.parents('.itemSwiper').find(".next").addClass("next-" + index);
            artcilesInstances[index] = new Swiper(".instance-" + index, {
                speed: 900,
                watchOverflow: true,
                loop:false,
                navigation: {
                    prevEl: ".prev-" + index,
                    nextEl: ".next-" + index,
                },
                breakpoints: {
                    10: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup:2,
                        spaceBetween:37,
                    },
                    1111: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                        spaceBetween:37,
                    },
                },

            })
        }
        );
    }
}


initArticleSwiper();




// init audio plugin

$(function () {
    $('audio').audioPlayer();
});




// open search popup
//______________________________________________

$('.searchBtn').click(function () {
    openSearchPopup();
});

$('.searchPop .close').click(function () {
    closeSearchPopup();
});

function openSearchPopup() {
    $('.searchPop').addClass('open');
    $('body').addClass('searchPopOpened');
    $('.searchPop .srchinput').focus();
}

function closeSearchPopup() {
    $('.searchPop').removeClass('open');
    $('body').removeClass('searchPopOpened');
}


function submitSearchPopup() {
    //$('.searchField .field').addClass('loading');
    //setTimeout(function () {
    //    $('.searchField .field').removeClass('loading');
    //},2500)
    window.location.href = "http://thepolicyinitiativehtml.koeinbeta.com/search";
}


// search page redirect

$(".srchinput").keypress(function (e) {  // redirect to search page when pressing enter in search box in header
    var code = e.keyCode ? e.keyCode : e.which;
    if (code.toString() == 13) {
        window.location.href = "http://thepolicyinitiativehtml.koeinbeta.com/search";
        return false;
    }
});



//______________________________________________




// play/stop youtube when opening video popup
//_________________________________________________________________________________________________


var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var youtubeVideo1;

var videoid = $('.videoId').val();

function onYouTubeIframeAPIReady() {
    youtubeVideo1 = new YT.Player('youtubeVideo1', {
        videoId: videoid,
        playerVars: { 'autoplay': 0, 'controls': 1, 'rel': 0, 'mute': 0, 'playsinline': 1 }
    });

}


function openVideoPopup() {
    $('.videoPopup').addClass('open');
    $('body').addClass('videoPopOpened');
    youtubeVideo1.playVideo();
}

function closeVideoPopup() {
    $('.videoPopup').removeClass('open');
    $('body').removeClass('videoPopOpened');
   youtubeVideo1.stopVideo();
}



//_________________________________________________________________________________________________




//footer tab, scroll to top
//_________________________________________________________________________________________________

function scrollToTop() {
    $('html,body').animate({ scrollTop: 0 },400);
}

function showFooterScrollTab() {
    if ($(window).scrollTop() > 300) {
        $('.backTab').addClass('show');
        $('body').addClass('showScrolltab');
    } else {
        $('.backTab').removeClass('show');
        $('body').removeClass('showScrolltab');
    }
}

$(window).load(function () {
    showFooterScrollTab();
})

$(window).scroll(function () {
    showFooterScrollTab();
})



//_________________________________________________________________________________________________




// tags page, delete item
//_________________________________________________________________________________________________

$('.Tags .delete').click(function () {
    $(this).parents('li').remove();
});


//_________________________________________________________________________________________________






// articles pages, hide left fixed menu when scroll down on desktop
//_________________________________________________________________________________________________



var $animation_element = $('.animation-element');  
var $window = $(window);

function check_if_in_view() {
    if ($('.itemSwiper').length != 0) {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_element, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.addClass('in-view');
                $('.articlePage .Options').addClass('hide');

            } else {
                $element.removeClass('in-view');
                $('.articlePage .Options').removeClass('hide');
            }
        });




    }

}

$window.on('scroll resize', check_if_in_view);
$(window).load(function () {
    check_if_in_view();
});

//_________________________________________________________________________________________________