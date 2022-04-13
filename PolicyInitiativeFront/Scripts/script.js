var app = angular.module('myApp', ['ui.router', 'ngMessages']);

app.controller('myCtrl', function ($scope, $http, $timeout, $window, $compile, $stateParams, $rootScope, $sce) {
    var RouteUrl = $('#RouteUrl').val();
    var FrontUrl = $('#FrontUrl').val();
    $scope.pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var ishome = $('.home').val();
    var isengage = $('.engage').val();
    $scope.keyword = "";

    $scope.ChangeEmail = function () {
        $rootScope.email = $scope.model.email;
        $rootScope.$broadcast('email', $rootScope.email);
    }
    $(".srchinput").keypress(function (e) {  // redirect to search page when pressing enter in search box in header
        var code = e.keyCode ? e.keyCode : e.which;
        if (code.toString() == 13) {
            if ($scope.keyword != "") {
                window.location.href = FrontUrl + "search/results?title=" + $scope.keyword;

            }
            return false;
        }
    });

    $scope.isArabic = function(text) {
        var pattern = /[\u0600-\u06FF\u0750-\u077F]/;
        result = pattern.test(text);
        return result;
    }

    $scope.submitSearchPopup=function () {
        if ($scope.keyword != "") {
            window.location.href = FrontUrl + "search/results?title=" + $scope.keyword;
        }
    }
    $scope.submitContactMssg = function () {
        var itemForm = $scope.contactForm;
        var form = itemForm.$$element;
        $scope.careerId = $('.careerId').val();
        $scope.fileSrc = $('.drop-zone__thumb').attr('data-label');
        $scope.coverletterSrc = $('.drop-zone__thumb1').attr('data-label');
        console.log($scope.countrycode);
        if (itemForm.$valid) {
            console.log('formValid');
            $('.Apply .applyButton').hide();
            $('.Apply .loader').fadeIn();
            setTimeout(function () {
                $('.Apply .txMssg').addClass('open');
                $('.Apply .theform').addClass('txMssgOpened');
                $('.Apply .loader').hide();

            }, 1500);
            HandleRequest();
        } else {
            console.log('formValid NOT');
            var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
            angular.forEach(allFields, function (value, key) {
                var fieldName = $(value).attr("name");
                itemForm[fieldName].$setTouched();
            });

        }
        return false;

        function HandleRequest() {
            console.log("send the request");

            $http({
                method: 'POST',
                url: RouteUrl + 'api/CareerApplications/Send',
                data: {
                    careerId: $scope.careerId,
                    firstName: $scope.model.firstName,
                    lastName: $scope.model.lastName,
                    email: $scope.model.email,
                    mobile: $scope.model.mobile,
                    message: $scope.model.message,
                    fileSrc: $scope.fileSrc,
                    coverletterSrc: $scope.coverletterSrc,
                }
            }).then(function (res) {
                if (res.data == "success") {
                    $('.drop-zone__thumb').remove();
                    $('.drop-zone__thumb1').remove();
                    $(".drop-zone__prompt1").removeClass('ng-hide');
                    $('.drop-zone__thumb1').addClass('ng-hide');
                    $('.cloze').addClass('ng-hide');
                    $('.drop-zone').append("<textarea class='drop-zone__prompt' placeholder='Drop file here or click to upload .pdf document' style='cursor:pointer'></textarea >")
                    $scope.model.careerId = "",
                        $scope.model.firstName = "",
                        $scope.model.lastName = "",
                        $scope.model.email = "",
                        $scope.model.mobile = "",
                        $scope.model.message = "",
                        $scope.model.coverletterSrc = "",
                        $scope.model.fileSrc = "",
                        // Set back to pristine.
                        itemForm.$setPristine();
                    // Since Angular 1.3, set back to untouched state.
                    itemForm.$setUntouched();
                    setTimeout(function () {
                        $('html,body').animate({ scrollTop: $('.txMssg').offset().top - $('header').height() });
                    }, 200);
                    setTimeout(function () {
                        $('.txMssg').removeClass('open')
                    }, 5000);
                }
            }, function (res) {
                if (res.data == "Failure") {

                }
            })
        }
    }
    $scope.iframeSrc = "";
    setTimeout(function () {
        $scope.videoUrl = $('.videoUrl').val();
        if ($scope.videoUrl != null) {
            if ($scope.videoUrl != "") {
                if ($scope.iframeSrc == "") {
                    $scope.iframeSrc = $sce.trustAsResourceUrl($scope.videoUrl.indexOf("youtube") > -1 ? $scope.GetYoutubeURL($scope.videoUrl) : $scope.videoUrl);
                    $scope.addIframe();
                }
            }
        }
    }, 1000)
    $scope.addIframe = function () {
        $('<iframe>', {
            src: $scope.iframeSrc,
            id: 'youtubeVideo1',
            frameborder: 0,
            style: 'width="100%";height="100%"',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            name: 'YouTube video player'
        }).appendTo('.youTube');
    }
    $scope.GetYoutubeURL = function (url) {
        var youtubeRegexp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
        var id = url.replace(youtubeRegexp, '$1');
        if (id.indexOf(";") > -1) {
            var pieces = id.split(';');

            if (pieces[1].indexOf("%") > -1) {
                var uriComponent = decodeURIComponent(id.split(';')[1]);
                id = ('https://youtube.com' + uriComponent)
                    .replace(youtubeRegexp, '$1');
            } else {
                id = pieces[0];
            }
        } else if (id.indexOf("#") > -1) {
            id = id.split('#')[0];
        }
        return "https://www.youtube.com/embed/" + id;
    }

    $scope.batch = 1;
    $scope.news = [];
    $scope.data = [];
    $scope.numberOfProducts = 4;
    if ($('body').hasClass('homePage')) {
        $scope.getnews = function () {
            $http({
                method: 'GET',
                url: RouteUrl + 'api/NewsCommunications/GetHomeData?batch=' + $scope.batch + '&numberOfProducts=' + $scope.numberOfProducts + "&imgsize=335x319xi",
            }).then(function (res) {
                $scope.data = res.data;
                $('.itemsList.mids').addClass('loadmore');
                var $items = '';
                var values = '';
                if ($scope.batch != 0) {
                    angular.forEach($scope.data, function (value, key) {
                        var datediv = '';
                        var img = '';
                        var titlediv = '';
                        var arauthordiv = '';
                        var ardesdiv = '';
                        var authordiv = '';
                        var desdiv = '';

                        if (value.hasArabic == true) {

                            values = values + '<li class="grid-item"> <div class="item arabicBox">';
                            if (value.imgSrc != null) {
                                img = '<div class="pic"><a href=' + value.detailUrl + '?lang=ar' + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';

                            }
                            if (value.date != null) {
                                datediv = '<div class="top"> <div class="date">' + value.date + '</div> </div>';
                            }
                            titlediv = ' <h2 class="title">' + '<a href=' + value.detailUrl + "?lang=ar" + '>' + value.title + '</a></h2> ';
                            var count = 1;
                            if (value.authorsList.length != 0) {
                                angular.forEach(value.authorsarList, function (value1, key) {
                                    if (value.authorsarList.length == count) {
                                        arauthordiv = arauthordiv + '<div class="author" onclick="openArabicAuthorPopup(' + "'" + value1.title + "'" + "," + "'OnlyARBio-" + value1.id + "'" + ')">' + value1.title + '</div> <input hidden class="OnlyARBio-' + value1.id + '" value="' + value1.bio + '"/> ';

                                    } else {
                                        arauthordiv = arauthordiv + '<div class="author" onclick="openArabicAuthorPopup(' + "'" + value1.title + "'" + "," + "'OnlyARBio-" + value1.id + "'" + ')">' + value1.title + ',</div> <input hidden class="OnlyARBio-' + value1.id + '" value="' + value1.bio + '"/> ';
                                    }
                                    count++;
                                });

                            }
                            if (value.arsmallDescription != null) {
                                ardesdiv = '<div class="text"> <a href=' + value.detailUrl + '?lang=ar' + '>' + value.arsmallDescription + '  <span class="read">'+ value.ARarticleTemplate +'</span></a>'
                            }
                            values = values + img + datediv + titlediv + arauthordiv + ardesdiv + '</div> </div> </li>';

                        } else {

                            values = values + '<li class="grid-item">';
                            var englishBox = ' <div class="item englishBox">';
                            var arabicBox = ' <div class="item arabicBox">';
                            var arabicdate = '';
                            var arabictitle = '';
                            var arimg = '';

                            if (value.imgSrc != null) {
                                img = '<div class="pic"><a href=' + value.detailUrl + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                arimg = '<div class="pic"><a href=' + value.detailUrl + '?lang=ar' + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';

                            }
                            if (value.date != null) {
                                if (value.hasOnlyEnglish == false) {
                                    datediv = '<div class="top"> <div class="date">' + value.date + '</div> <div class="arabic" onclick="arabic(event)">عربي</div></div> ';
                                } else {
                                    datediv = '<div class="top"> <div class="date">' + value.date + '</div></div> ';

                                }
                            }
                            if (value.date != null) {
                                arabicdate = '<div class="top"> <div class="date">' + value.date + '</div> <div class="english" onclick="english(event)">eng</div></div> ';
                            }
                            titlediv = ' <h2 class="title">' + '<a href=' + value.detailUrl + '>' + value.title + '</a></h2> ';
                            arabictitle = ' <h2 class="title">' + '<a href=' + value.detailUrl + '?lang=ar' + '>' + value.artitle + '</a></h2> ';

                            var count = 1;
                            if (value.authorsList.length != 0) {
                                angular.forEach(value.authorsList, function (value1, key) {
                                    if (value.authorsList.length == count) {
                                        authordiv = authordiv + '<div class="author" onclick="openAuthorPopup(' + "'" + value1.title + "'" + "," + "'EngBio-" + value1.id + "'" + ')">' + value1.title + '</div> <input hidden class="EngBio-' + value1.id +'" value="'  +  value1.bio +'"/> ';
                                    } else {
                                        authordiv = authordiv + '<div class="author" onclick="openAuthorPopup(' + "'" + value1.title + "'" + "," + "'EngBio-" + value1.id + "'" + ')">' + value1.title + ", " + '</div> <input hidden class="EngBio-' + value1.id + '" value="' + value1.bio + '"/> ';

                                    }
                                    count++;
                                });

                            }
                            if (value.smallDescription != null) {
                                desdiv = '<div class="text"> <a href=' + value.detailUrl + '>' + value.smallDescription + '  <span class="read">' + value.articleTemplate+'</span></a>'
                            }
                            var count1 = 1;
                            if (value.authorsarList.length != 0) {
                                angular.forEach(value.authorsarList, function (value1, key) {

                                    if (value.authorsarList.length == count1) {
                                        arauthordiv = arauthordiv + '<div class="author" onclick="openArabicAuthorPopup(' + "'" + value1.title + "'" + "," + "'ARBio-" + value1.id + "'" + ')">' + value1.title + '</div> <input hidden class="ARBio-' + value1.id + '" value="' + value1.bio + '"/> ';

                                    } else {
                                        arauthordiv = arauthordiv + '<div class="author" onclick="openArabicAuthorPopup(' + "'" + value1.title + "'" + "," + "'ARBio-" + value1.id + "'" + ')">' + value1.title + ", " + '</div> <input hidden class="ARBio-' + value1.id + '" value="' + value1.bio + '"/> ';
                                    }
                                    count1++;
                                });
                                
                            }
                            if (value.arsmallDescription != null) {
                                ardesdiv = '<div class="text"> <a href=' + value.detailUrl + "?lang=ar" + '>' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate +'</span></a>'
                            }
                            if (value.hasOnlyEnglish == false) {
                                values = values + englishBox + img + datediv + titlediv + authordiv + desdiv + '</div></div>' + arabicBox + arimg + arabicdate + arabictitle + arauthordiv + ardesdiv + '</div> </div> </li>';
                            } else {
                                values = values + englishBox + img + datediv + titlediv + authordiv + desdiv + '</div></div> </li>';

                            }
                        }

                    });
                    $items = $(values);

                    setTimeout(function () {

                        $('.itemsList .grid').append($items).masonry('appended', $items);
                        initMasonryList(); // recall masonry

                        $('.itemsList.mids').removeClass('loadmore');
                    }, 2000);
                }
            
            });
        }

        $scope.getnews();
        var load = true;
        $(window).on('scroll touchmove mousewheel', function () {
            if (ishome == "true") {
                if (load == true && $(window).scrollTop() + $(window).height() > $(document).height() - 100) { 
                    if ($scope.data.length > 3) {
                        $('.itemsList.mids').addClass('loadmore');
                    }
                    load = false;
                    setTimeout(function () {
                        if ($scope.data.length > 3) {
                            $scope.batch = $scope.batch + 1;
                            $('.grid-item').removeClass('newPost');
                            $scope.getnews();
                 
                        } else {
                            $('.box').addClass('hideborder');
                            $('.itemsList.mids').removeClass('loadmore');
                        }

                    }, 1500)
                    if ($scope.data.length == 0) {
                        $('.itemsList.mids').removeClass('loadmore');
                    }
                    setTimeout(function () {
                        load = true;
                    }, 2500)
                }
            }
        });
    }

    if ($('body').hasClass('engagePage')) {
        $scope.engagenews = function () {
            $http({
                method: 'GET',
                url: RouteUrl + 'api/NewsCommunications/GetEngageData?batch=' + $scope.batch + '&numberOfProducts=' + $scope.numberOfProducts + "&imgsize=335x319xi",
            }).then(function (res) {
                $scope.data = res.data;
                $('.itemsList').addClass('loadmore');
                var $items = '';
                var values = '';
                if ($scope.batch != 0) {
                    angular.forEach($scope.data, function (value, key) {
                        var datediv = '';
                        var img = '';
                        var titlediv = '';
                        var ardesdiv = '';
                        var desdiv = '';

                        if (value.hasArabic == true) {

                            values = values + '<li class="grid-item"> <div class="item arabicBox">';
                            if (value.imgSrc != null) {
                                if (value.ExternalLink == null) {
                                    if (value.description != null) {
                                        img = '<div class="pic"><a href=' + value.detailUrl + '?lang=ar' + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                    } else {
                                        img = '<div class="pic"><a style="cursor:auto!important;"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';

                                    }
                                } else {
                                    img = '<div class="pic"><a href=' + value.ExternalLink + ' target="blank"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';

                                }

                            }
                            if (value.date != null) {
                                if (value.newsCategory == null) {
                                    datediv = '<div class="top"> <div class="date">' + value.date + '</div> </div>';
                                } else {
                                    datediv = '<div class="top"> <div class="date">' + value.date + '<span class="dash">|</span><span class="categ">' + value.newsCategory + '</span></div></div> ';
                                }
                            }

                            if (value.ExternalLink == null) {

                                if (value.description != null) {
                                    titlediv = ' <h2 class="title">' + '<a href=' + value.detailUrl + "?lang=ar" + '>' + value.title + '</a></h2> ';

                                } else {
                                    titlediv = ' <h2 class="title">' + '<a style="cursor:auto!important;">' + value.title + '</a></h2> ';

                                }

                            } else {
                                titlediv = ' <h2 class="title">' + '<a href=' + value.ExternalLink + ' target="_blank">' + value.title + '</a></h2> ';

                            }

                            if (value.arsmallDescription != null) {
                                if (value.ExternalLink == null) {
                                    if (value.description != null) {
                                        ardesdiv = '<div class="text"> <a href=' + value.detailUrl + '?lang=ar' + '>' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate + '</span></a>'
                                    } else {
                                        ardesdiv = '<div class="text"> <a style="cursor:auto!important;">' + value.arsmallDescription + '  </a>'

                                    }
                                } else {
                                    ardesdiv = '<div class="text"> <a href=' + value.ExternalLink + ' target="_blank" >' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate + '</span></a>'

                                }
                            }
                            values = values + img + datediv + titlediv + ardesdiv + '</div> </div> </li>';

                        } else {

                            values = values + '<li class="grid-item">';
                            var englishBox = ' <div class="item englishBox">';
                            var arabicBox = ' <div class="item arabicBox">';
                            var arabicdate = '';
                            var arabictitle = '';
                            var arimg = '';

                            if (value.imgSrc != null) {

                                if (value.ExternalLink == null) {
                                    if (value.description != null) {
                                        img = '<div class="pic"><a href=' + value.detailUrl + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                        arimg = '<div class="pic"><a href=' + value.detailUrl + '?lang=ar' + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                    } else {
                                        img = '<div class="pic"><a style="cursor:auto!important;"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                        arimg = '<div class="pic"><a style="cursor:auto!important;">' + '<img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                    }
                                 } else {
                                    img = '<div class="pic"><a href=' + value.ExternalLink + ' target="_blank"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                    arimg = '<div class="pic"><a href=' + value.ExternalLink + ' target="_blank"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                }


                            }
                            if (value.date != null) {
                                if (value.hasOnlyEnglish == false) {
                                    if (value.newsCategory == null) {

                                        datediv = '<div class="top"> <div class="date">' + value.date + '</div> <div class="arabic" onclick="arabic(event)">عربي</div></div> ';

                                    } else {
                                        datediv = '<div class="top"> <div class="date">' + value.date + '<span class="dash">|</span><span class="categ">' + value.newsCategory + '</span></div> <div class="arabic" onclick="arabic(event)">عربي</div></div> ';
                                    }
                                } else {
                                    if (value.newsCategory == null) {

                                        datediv = '<div class="top"> <div class="date">' + value.date + '</div></div> ';

                                    } else {
                                        datediv = '<div class="top"> <div class="date">' + value.date + '<span class="dash">|</span><span class="categ">' + value.newsCategory + '</span></div> </div> ';
                                    }
                                }


                            }

                            if (value.date != null) {
                                if (value.newsCategory == null) {
                                    arabicdate = '<div class="top"> <div class="date">' + value.date + '</div> <div class="arabic" onclick="english(event)">eng</div></div> ';

                                } else {
                                    arabicdate = '<div class="top"> <div class="date">' + value.date + '<span class="dash">|</span><span class="categ">' + value.newsCategory + '</span></div> <div class="english" onclick="english(event)">eng</div></div> ';
                                }

                            }
                            if (value.ExternalLink == null) {
                                if (value.description != null) {
                                    titlediv = ' <h2 class="title">' + '<a href=' + value.detailUrl + '>' + value.title + '</a></h2> ';
                                    arabictitle = ' <h2 class="title">' + '<a href=' + value.detailUrl + '?lang=ar' + '>' + value.artitle + '</a></h2> ';
                                } else {
                                    titlediv = ' <h2 class="title">' + '<a style="cursor:auto!important;">' + value.title + '</a></h2> ';
                                    arabictitle = ' <h2 class="title">' + '<a style="cursor:auto!important;">' + value.title + '</a></h2> ';
                                }
                            } else {
                                titlediv = ' <h2 class="title">' + '<a href=' + value.ExternalLink + ' target="_blank">' + value.title + '</a></h2> ';
                                arabictitle = ' <h2 class="title">' + '<a href=' + value.ExternalLink + ' target="_blank">' + value.artitle + '</a></h2> ';
                            }
                            if (value.ExternalLink == null) {
                                if (value.description != null) {
                                    if (value.smallDescription != null) {
                                        desdiv = '<div class="text"> <a href=' + value.detailUrl + '>' + value.smallDescription + '  <span class="read">' + value.articleTemplate + '</span></a>'
                                    }

                                    if (value.arsmallDescription != null) {
                                        ardesdiv = '<div class="text"> <a href=' + value.detailUrl + "?lang=ar" + '>' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate + '</span></a>'
                                    }
                                } else {
                                    if (value.smallDescription != null) {
                                        desdiv = '<div class="text"> <a style="cursor:auto!important;">' + value.smallDescription + ' </a>'
                                    }

                                    if (value.arsmallDescription != null) {
                                        ardesdiv = '<div class="text"> <a style="cursor:auto!important;">' + value.arsmallDescription + ' </a>'
                                    }
                                }
                            } else {
                                if (value.smallDescription != null) {
                                    desdiv = '<div class="text"> <a href=' + value.ExternalLink + ' target="_blank">' + value.smallDescription + '  <span class="read">' + value.articleTemplate + '</span></a>'
                                }

                                if (value.arsmallDescription != null) {
                                    ardesdiv = '<div class="text"> <a href=' + value.ExternalLink + ' target="_blank">' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate + '</span></a>'
                                }
                            }

                            if (value.hasOnlyEnglish == false) {
                                values = values + englishBox + img + datediv + titlediv + desdiv + '</div></div>' + arabicBox + arimg + arabicdate + arabictitle + ardesdiv + '</div> </div> </li>';
                            } else {
                                values = values + englishBox + img + datediv + titlediv + desdiv + '</div></div></li>';

                            }
                        }

                    });
                    $items = $(values);

                    setTimeout(function () {

                        $('.itemsList .grid').append($items).masonry('appended', $items);
                        initMasonryList(); // recall masonry

                        $('.itemsList').removeClass('loadmore');
                    }, 2000);
                }




            });
        }

        $scope.engagenews();
        var load = true;
        $(window).on('scroll touchmove mousewheel', function () {
            if (isengage == "true") {
                if (load == true && $(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                    if ($scope.data.length > 3) {
                        $('.itemsList').addClass('loadmore');
                    }
                    load = false;
                    setTimeout(function () {
                        if ($scope.data.length > 3) {
                            $scope.batch = $scope.batch + 1;
                            $('.grid-item').removeClass('newPost');
                            $scope.engagenews();

                        } else {
                            $('.box').addClass('hideborder');
                            $('.itemsList').removeClass('loadmore');
                        }

                    }, 1500)
                    if ($scope.data.length == 0) {
                        $('.itemsList').removeClass('loadmore');
                    }
                    setTimeout(function () {
                        load = true;
                    }, 2500)
                }
            }
        });
    }
    $scope.openAuthorPopup = function (title, bio) {
        $scope.title = title;
        $scope.bio = bio;
        $('.authorPopup:not(.arabic)').addClass('open');
        $('body').addClass('stopscroll');
    }
    $scope.openArabicAuthorPopup = function (title,bio) {

        $scope.artitle = title;
        $scope.arbio = bio;
        $('.authorPopup.arabic').addClass('open');
        $('body').addClass('stopscroll');
    }
    $scope.searchByAuthor = function () {
        localStorage.removeItem('keywordList');
        localStorage.removeItem('typeList');
        localStorage.removeItem('datefrom');
        localStorage.removeItem('dateto');
        localStorage.removeItem('authorList');
        localStorage.removeItem('category');
        localStorage.removeItem('articleTemplateId');
        localStorage.removeItem('articleTemplateTitle');
        $scope.authorList = $('.authorList').val();
        if ($scope.authorList.length != 0) {
            localStorage.setItem("authorList", $scope.authorList);
        }

        window.location.href = fronturl + '/search/tags';
    }
    $scope.searchByCategory = function () {
        localStorage.removeItem('keywordList');
        localStorage.removeItem('typeList');
        localStorage.removeItem('datefrom');
        localStorage.removeItem('dateto');
        localStorage.removeItem('authorList');
        localStorage.removeItem('category');
        localStorage.removeItem('articleTemplateId');
        localStorage.removeItem('articleTemplateTitle');
        $scope.category = $('.init').val();
        if ($scope.category != "") {
            localStorage.setItem("category", $scope.category);
        }
        window.location.href = fronturl + '/search/tags';
    }
    $scope.searchByType = function () {
        localStorage.removeItem('keywordList');
        localStorage.removeItem('typeList');
        localStorage.removeItem('datefrom');
        localStorage.removeItem('dateto');
        localStorage.removeItem('authorList');
        localStorage.removeItem('category');
        localStorage.removeItem('articleTemplateId');
        localStorage.removeItem('articleTemplateTitle');
        $scope.typeList = $('.type').val();
        if ($scope.typeList.length != 0) {
            localStorage.setItem("typeList", $scope.typeList);
        }
      
        window.location.href = fronturl + '/search/tags';
    }
    $scope.searchByTemplate = function () {
        localStorage.removeItem('keywordList');
        localStorage.removeItem('typeList');
        localStorage.removeItem('datefrom');
        localStorage.removeItem('dateto');
        localStorage.removeItem('authorList');
        localStorage.removeItem('category');
        localStorage.removeItem('articleTemplateId');
        localStorage.removeItem('articleTemplateTitle');
        $scope.articleTemplateId = $('.articleTemplate').val();
        $scope.articleTemplateTitle = $('.articleTemplateTitle').val();
        localStorage.setItem("articleTemplateTitle", $scope.articleTemplateTitle);
        localStorage.setItem("articleTemplateId", $scope.articleTemplateId);
   
        window.location.href = fronturl + '/search/tags';
    }
    $scope.searchfitler = function () {
        localStorage.removeItem('keywordList');
        localStorage.removeItem('typeList');
        localStorage.removeItem('datefrom');
        localStorage.removeItem('dateto');
        localStorage.removeItem('authorList');
        localStorage.removeItem('category');
        localStorage.removeItem('articleTemplateId');
        localStorage.removeItem('articleTemplateTitle');
        $scope.typeList = [];
        $scope.keywordList = [];
        var typegetvalue = $('.filterMenu .inner.show .Values .list .keyword.green');
        var keywordgetvalue = $('.filterMenu .inner.show .Values .list .keyword.red');
        angular.forEach(typegetvalue, function (value, key) {
            $scope.typeList.push(value.innerText);
        });
        angular.forEach(keywordgetvalue, function (value, key) {
            $scope.keywordList.push(value.innerText);
        });

        if ($scope.typeList.length != 0) {
            localStorage.setItem("typeList", $scope.typeList);
        }
        if ($scope.keywordList.length != 0) {
            localStorage.setItem("keywordList", $scope.keywordList);
        }
        var datef = $scope.datefrom;
        if (datef != undefined) {
            datef = datef.toLocaleDateString();
            localStorage.setItem("datefrom", datef);
        }
       
        var datet = $scope.dateto;
        if (datet != undefined) {
            datet = datet.toLocaleDateString();
            localStorage.setItem("dateto", datet); }


        window.location.href = fronturl + '/search/tags';
    }

    this.$onInit = function () {

    }
});
app.controller('SearchCTRL', function ($scope, $http, $window, $stateParams, $rootScope, $sce) {

    var FrontUrl = $('#FrontUrl').val();
    var RouteUrl = $('#RouteUrl').val();
    $scope.batch = 0;
    $scope.types = {};
    $scope.typeList = [];
    $scope.keywordList = [];
    $scope.authorList = [];
    $scope.newsList = [];
    $scope.data = [];
    $scope.articleTemplateTitle = "";
    $scope.numberOfProducts = 8;
    if (localStorage.getItem("articleTemplateId") != undefined) {
        $scope.articleTemplateId = localStorage.getItem("articleTemplateId");
        $scope.articleTemplateTitle = localStorage.getItem("articleTemplateTitle");
    } else {
        $scope.articleTemplateId = 0;
        $scope.articleTemplateTitle = "";
    }
    if (localStorage.getItem("category") != undefined) {
        $scope.category = localStorage.getItem("category");
    } else {
        $scope.category = "";
    }
    if (localStorage.getItem("authorList") != undefined) {
        var type = localStorage.getItem("authorList");
        $scope.authorList = type.split(",");
    }
    if (localStorage.getItem("typeList") != undefined) {
        var type = localStorage.getItem("typeList");
        $scope.typeList = type.split(",");
    }
    if (localStorage.getItem("keywordList") != undefined) {
        var keyword = localStorage.getItem("keywordList");
        $scope.keywordList = keyword.split(",");
    }
    if (localStorage.getItem("datefrom") != undefined) {
        $scope.datefrom = localStorage.getItem("datefrom");
    }
    if (localStorage.getItem("dateto") != undefined) {
        $scope.dateto = localStorage.getItem("dateto");
    }
    $scope.updateTypeFilter = function () {
        $scope.typeList = $scope.typeList.filter(function (v) {
            return !!v;
        });

    }

    $scope.removeTemplate = function () {
        $('.itemsList .grid').masonry('destroy');
        localStorage.removeItem("datefrom");
        localStorage.removeItem("dateto");
        $('.grid-item').remove();
        $scope.batch = 0;
        $scope.articleTemplateId = 0;
        $scope.articleTemplateTitle = "";
        $scope.getData();
    }
    $scope.removeDate = function () {
        $('.itemsList .grid').masonry('destroy');
        localStorage.removeItem("datefrom");
        localStorage.removeItem("dateto");
        $('.grid-item').remove();
        $scope.batch = 0;
        $scope.datefrom = "";
        $scope.dateto = "";
        $scope.getData();   
    }
    $scope.categoryFilter = function (item) {
     
        $('.itemsList .grid').masonry('destroy');
        localStorage.removeItem("category");
        $('.grid-item').remove();
        $scope.batch = 0;
        $scope.category = "";
        $scope.getData();    
       
    }
    $scope.AuthorFilter = function (item) {
        angular.forEach($scope.authorList, function (value, key) {
            if (value == item) {
                $('.itemsList .grid').masonry('destroy');
                localStorage.setItem("authorList", $scope.authorList);
                $('.grid-item').remove();
                $scope.batch = 0;
                $scope.authorList.splice(key, 1);
                $scope.getData();
            }
        });
    }
    $scope.removeKeywordFilter = function (item) {
        angular.forEach($scope.keywordList, function (value, key) {
            if (value == item) {
                $('.itemsList .grid').masonry('destroy');
                localStorage.setItem("keywordList", $scope.keywordList);
                $('.grid-item').remove();
                $scope.batch = 0;
                $scope.keywordList.splice(key, 1);
                $scope.getData();
            }

        });

    }
    $scope.removeTypeFilter = function (item) {
        angular.forEach($scope.typeList, function (value, key) {
            if (value == item) {
                $('.itemsList .grid').masonry('destroy');
                localStorage.setItem("typeList", $scope.typeList);
                $('.grid-item').remove();
                $scope.batch = 0;
                $scope.typeList.splice(key, 1);
                $scope.getData();
            }

        });

    }
    $scope.watch = function () {
        $scope.getData();
    }
    $scope.showloader = function (title) {
        $('.label.' + title).addClass('load');
    }

    $scope.getData = function () {
        $http({
            method: 'Post',
            url: RouteUrl + 'api/NewsCommunications/SearchData',
            data: {
                batch: $scope.batch, pageNumber: $scope.numberOfProducts, articleTemplateId: $scope.articleTemplateId,category: $scope.category, authorList: $scope.authorList, datefrom: $scope.datefrom, dateto: $scope.dateto, typeList: $scope.typeList, keywordList: $scope.keywordList,  imgsize: "515x413xi"
            }
        }).then(function (res) {
            $scope.data = res.data.news;
            $scope.typeList = res.data.typeList;
            $scope.dateto = res.data.dateto;
            $scope.datefrom = res.data.datefrom;
            $scope.articleTemplate = res.data.articleTemplate;

            $('.itemsList').addClass('loadmore');
            if ($scope.data.length == 0 && $scope.batch ==0) {
                $('.no-results').removeClass('ng-hide');

            }
            var $items = '';
            var values = '';
            angular.forEach($scope.data, function (value, key) {
                var datediv = '';
                var img = '';
                var titlediv = '';
                var arauthordiv = '';
                var ardesdiv = '';
                var authordiv = '';
                var desdiv = '';

                if (value.hasArabic == true) {

                    values = values + '<li class="grid-item"> <div class="item arabicBox">';
                    if (value.imgSrc != null) {
                        if (value.ExternalLink == null) {
                            if (value.description != null) {
                                img = '<div class="pic"><a href=' + value.detailUrl + '?lang=ar' + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                            } else {
                                img = '<div class="pic"><a style="cursor:auto!important;"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';

                            }
                        } else {
                            img = '<div class="pic"><a href=' + value.ExternalLink + ' target="blank"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';

                        }

                    }
                    if (value.date != null) {
                        if (value.newsCategory == null) {
                            datediv = '<div class="top"> <div class="date">' + value.date + '</div> </div>';
                        } else {
                            datediv = '<div class="top"> <div class="date">' + value.date + '<span class="dash">|</span><span class="categ">' + value.newsCategory + '</span></div></div> ';
                        }
                    }

                    if (value.ExternalLink == null) {

                        if (value.description != null) {
                            titlediv = ' <h2 class="title">' + '<a href=' + value.detailUrl + "?lang=ar" + '>' + value.title + '</a></h2> ';

                        } else {
                            titlediv = ' <h2 class="title">' + '<a style="cursor:auto!important;">' + value.title + '</a></h2> ';

                        }

                    } else {
                        titlediv = ' <h2 class="title">' + '<a href=' + value.ExternalLink + ' target="_blank">' + value.title + '</a></h2> ';

                    }
                    var count1 = 1;
                    if (value.authorsarList.length != 0) {
                        angular.forEach(value.authorsarList, function (value1, key) {

                            if (value.authorsarList.length == count1) {
                                arauthordiv = arauthordiv + '<div class="author" onclick="openArabicAuthorPopup(' + "'" + value1.title + "'" + "," + "'ARBio-" + value1.id + "'" + ')">' + value1.title + '</div> <input hidden class="ARBio-' + value1.id + '" value="' + value1.bio + '"/> ';

                            } else {
                                arauthordiv = arauthordiv + '<div class="author" onclick="openArabicAuthorPopup(' + "'" + value1.title + "'" + "," + "'ARBio-" + value1.id + "'" + ')">' + value1.title + ", " + '</div> <input hidden class="ARBio-' + value1.id + '" value="' + value1.bio + '"/> ';
                            }
                            count1++;
                        });

                    }
                    if (value.arsmallDescription != null) {
                        if (value.ExternalLink == null) {
                            if (value.description != null) {
                                ardesdiv = '<div class="text"> <a href=' + value.detailUrl + '?lang=ar' + '>' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate + '</span></a>'
                            } else {
                                ardesdiv = '<div class="text"> <a style="cursor:auto!important;">' + value.arsmallDescription + '  </a>'

                            }
                        } else {
                            ardesdiv = '<div class="text"> <a href=' + value.ExternalLink + ' target="_blank" >' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate + '</span></a>'

                        }
                    }
                    values = values + img + datediv + titlediv + arauthordiv+ ardesdiv + '</div> </div> </li>';

                } else {

                    values = values + '<li class="grid-item">';
                    var englishBox = ' <div class="item englishBox">';
                    var arabicBox = ' <div class="item arabicBox">';
                    var arabicdate = '';
                    var arabictitle = '';
                    var arimg = '';

                    if (value.imgSrc != null) {

                        if (value.ExternalLink == null) {
                            if (value.description != null) {
                                img = '<div class="pic"><a href=' + value.detailUrl + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                arimg = '<div class="pic"><a href=' + value.detailUrl + '?lang=ar' + '><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                            } else {
                                img = '<div class="pic"><a style="cursor:auto!important;"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                                arimg = '<div class="pic"><a style="cursor:auto!important;">' + '<img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                            }
                        } else {
                            img = '<div class="pic"><a href=' + value.ExternalLink + ' target="_blank"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                            arimg = '<div class="pic"><a href=' + value.ExternalLink + ' target="_blank"><img src=' + value.imgSrc + ' alt=' + value.title + '/></a></div>';
                        }


                    }
                    if (value.date != null) {
                        if (value.hasOnlyEnglish == false) {
                            if (value.newsCategory == null) {

                                datediv = '<div class="top"> <div class="date">' + value.date + '</div> <div class="arabic" onclick="arabic(event)">عربي</div></div> ';

                            } else {
                                datediv = '<div class="top"> <div class="date">' + value.date + '<span class="dash">|</span><span class="categ">' + value.newsCategory + '</span></div> <div class="arabic" onclick="arabic(event)">عربي</div></div> ';
                            }
                        } else {
                            if (value.newsCategory == null) {

                                datediv = '<div class="top"> <div class="date">' + value.date + '</div></div> ';

                            } else {
                                datediv = '<div class="top"> <div class="date">' + value.date + '<span class="dash">|</span><span class="categ">' + value.newsCategory + '</span></div> </div> ';
                            }
                        }


                    }

                    if (value.date != null) {
                        if (value.newsCategory == null) {
                            arabicdate = '<div class="top"> <div class="date">' + value.date + '</div> <div class="arabic" onclick="english(event)">eng</div></div> ';

                        } else {
                            arabicdate = '<div class="top"> <div class="date">' + value.date + '<span class="dash">|</span><span class="categ">' + value.newsCategory + '</span></div> <div class="english" onclick="english(event)">eng</div></div> ';
                        }

                    }
                    if (value.ExternalLink == null) {
                        if (value.description != null) {
                            titlediv = ' <h2 class="title">' + '<a href=' + value.detailUrl + '>' + value.title + '</a></h2> ';
                            arabictitle = ' <h2 class="title">' + '<a href=' + value.detailUrl + '?lang=ar' + '>' + value.artitle + '</a></h2> ';
                        } else {
                            titlediv = ' <h2 class="title">' + '<a style="cursor:auto!important;">' + value.title + '</a></h2> ';
                            arabictitle = ' <h2 class="title">' + '<a style="cursor:auto!important;">' + value.title + '</a></h2> ';
                        }
                    } else {
                        titlediv = ' <h2 class="title">' + '<a href=' + value.ExternalLink + ' target="_blank">' + value.title + '</a></h2> ';
                        arabictitle = ' <h2 class="title">' + '<a href=' + value.ExternalLink + ' target="_blank">' + value.artitle + '</a></h2> ';
                    }
                    if (value.ExternalLink == null) {
                        if (value.description != null) {
                            if (value.smallDescription != null) {
                                desdiv = '<div class="text"> <a href=' + value.detailUrl + '>' + value.smallDescription + '  <span class="read">' + value.articleTemplate + '</span></a>'
                            }

                            if (value.arsmallDescription != null) {
                                ardesdiv = '<div class="text"> <a href=' + value.detailUrl + "?lang=ar" + '>' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate + '</span></a>'
                            }
                        } else {
                            if (value.smallDescription != null) {
                                desdiv = '<div class="text"> <a style="cursor:auto!important;">' + value.smallDescription + ' </a>'
                            }

                            if (value.arsmallDescription != null) {
                                ardesdiv = '<div class="text"> <a style="cursor:auto!important;">' + value.arsmallDescription + ' </a>'
                            }
                        }
                    } else {
                        if (value.smallDescription != null) {
                            desdiv = '<div class="text"> <a href=' + value.ExternalLink + ' target="_blank">' + value.smallDescription + '  <span class="read">' + value.articleTemplate + '</span></a>'
                        }

                        if (value.arsmallDescription != null) {
                            ardesdiv = '<div class="text"> <a href=' + value.ExternalLink + ' target="_blank">' + value.arsmallDescription + '  <span class="read">' + value.ARarticleTemplate + '</span></a>'
                        }
                    }
                    var count = 1;
                    if (value.authorsList.length != 0) {
                        angular.forEach(value.authorsList, function (value1, key) {
                            if (value.authorsList.length == count) {
                                authordiv = authordiv + '<div class="author" onclick="openAuthorPopup(' + "'" + value1.title + "'" + "," + "'EngBio-" + value1.id + "'" + ')">' + value1.title + '</div> <input hidden class="EngBio-' + value1.id + '" value="' + value1.bio + '"/> ';
                            } else {
                                authordiv = authordiv + '<div class="author" onclick="openAuthorPopup(' + "'" + value1.title + "'" + "," + "'EngBio-" + value1.id + "'" + ')">' + value1.title + ", " + '</div> <input hidden class="EngBio-' + value1.id + '" value="' + value1.bio + '"/> ';

                            }
                            count++;
                        });

                    }
              
                    var count1 = 1;
                    if (value.authorsarList.length != 0) {
                        angular.forEach(value.authorsarList, function (value1, key) {

                            if (value.authorsarList.length == count1) {
                                arauthordiv = arauthordiv + '<div class="author" onclick="openArabicAuthorPopup(' + "'" + value1.title + "'" + "," + "'ARBio-" + value1.id + "'" + ')">' + value1.title + '</div> <input hidden class="ARBio-' + value1.id + '" value="' + value1.bio + '"/> ';

                            } else {
                                arauthordiv = arauthordiv + '<div class="author" onclick="openArabicAuthorPopup(' + "'" + value1.title + "'" + "," + "'ARBio-" + value1.id + "'" + ')">' + value1.title + ", " + '</div> <input hidden class="ARBio-' + value1.id + '" value="' + value1.bio + '"/> ';
                            }
                            count1++;
                        });

                    }
                    if (value.hasOnlyEnglish == false) {
                        values = values + englishBox + img + datediv + titlediv + authordiv + desdiv + '</div></div>' + arabicBox + arimg + arabicdate + arabictitle + arauthordiv+ardesdiv + '</div> </div> </li>';
                    } else {
                        values = values + englishBox + img + datediv + titlediv + authordiv+ desdiv + '</div></div></li>';

                    }
                }
                   
              

            });
            $items = $(values);

            setTimeout(function () {

                $('.itemsList .grid').append($items).masonry('appended', $items);
                initMasonryList();
                $('.itemsList').removeClass('loadmore');
            }, 1000);
            setTimeout(function () {

                initMasonryList(); // recall masonry
            }, 1500);
        });
    }
    $scope.getData();
    var load = true;
    $(window).on('scroll touchmove mousewheel', function () {
            if (load == true && $(window).scrollTop() + $(window).height() > $(document).height() - 100) { 
                if ($scope.data.length > 3) {
                    $('.itemsList').addClass('loadmore');
                }
                load = false;
                setTimeout(function () {
                    if ($scope.data.length > 3) {
                        $scope.batch = $scope.batch + 1;
                        $('.grid-item').removeClass('newPost');
                        $scope.getData();
                    
                    } else {
                        $('.box').addClass('hideborder');
                        $('.itemsList').removeClass('loadmore');
                    }
                }, 1500)
                if ($scope.data.length == 0) {
                    $('.itemsList').removeClass('loadmore');
                }
                setTimeout(function () {
                    load = true;
                }, 2500)
            }
    });
    this.$onInit = function () {

    }
});
app.controller('myNewsLetter', function ($scope, $http, $window, $rootScope) {
    var RouteUrl = $('#RouteUrl').val();
    $scope.$on('email', function (event, args) {
        $scope.model.email = args;
        if ($scope.model.email != "") {
            openNewsletter();
            setTimeout(function () {
                $scope.SubmitNewsLetter();
            }, 200)

        }
    });
    $scope.SubmitNewsLetter = function () {
        var itemForm = $scope.NewsletterUser;
        var form = itemForm.$$element;
        if (itemForm.$valid) {
            console.log('formValid');
            $('.newletterPop .sendbtn').addClass('loading');
            HandleRequest();
        } else {
            console.log('formValid NOT');
            var allFields = angular.element("[name='" + itemForm.$name + "']").find('.ng-invalid:visible');
            angular.forEach(allFields, function (value, key) {
                var fieldName = $(value).attr("name");
                itemForm[fieldName].$setTouched();
            });
        }
        return false;
        function HandleRequest() {
            console.log("send the request");
            $http({
                method: 'POST',
                url: RouteUrl + 'api/NewsLetterUser/JoinNewsletter',
                data: {
                    email: $scope.model.email,
                }
            }).then(function (res) {
                if (res.data.status == 200) {
                    $('.newletterPop .inner.error').addClass('ng-hide');
                    setTimeout(function () {
                        $('.newletterPop .txmssg').addClass('show');
                        $('.newletterPop .wrap').addClass('hide');
                    }, 1500);
                    $scope.model.email = "",
                    // Set back to pristine.
                    itemForm.$setPristine();
                    // Since Angular 1.3, set back to untouched state.
                    itemForm.$setUntouched();
                    setTimeout(function () {
                        $('.newletterPop .txmssg').removeClass('show');
                        $('.newletterPop .wrap').removeClass('hide');
                        $('.newletterPop .sendbtn').removeClass('loading');
                    }, 4000);
                    setTimeout(function () {
                        $('.exit').click();
                    }, 5000);
              
                }
                if (res.data.status == 400) {
                    $scope.model.email = "",
                    $('.newletterPop .wrap').addClass('hide');
                    $('.newletterPop .sendbtn').removeClass('loading');
                    $('.newletterPop .inner').removeClass('show');
                    $('.newletterPop .inner').addClass('ng-hide');
                    $('.newletterPop .inner.error').html(res.data.message);
                    $('.newletterPop .inner.error').addClass('show');
                    $('.newletterPop .inner.error').removeClass('ng-hide');
                    $('.newletterPop .txmssg').addClass('show');
                    setTimeout(function () {
                        $('.newletterPop .inner.error').removeClass('show');
                        $('.newletterPop .txmssg').removeClass('show');
                        $('.newletterPop .sendbtn').removeClass('loading');
                    }, 3500);
                    setTimeout(function () {
                        $('.newletterPop .wrap').removeClass('hide');
                        $('.newletterPop .inner').removeClass('show');
                        $('.newletterPop .inner').removeClass('ng-hide');
                    }, 4000);
                    itemForm.$setPristine();
                    itemForm.$setUntouched();
                    setTimeout(function () {
                        $('.exit').click();
                    }, 5000);
                }
            }, function (res) {
                if (res.data == "Failure") {

                }
            })
        }
    }
});
app.directive('formEmail', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.formEmail = function (modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // consider empty models to be valid
                    return true;
                }
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(viewValue);
            };
        }
    };
});
app.filter('unsafe', function ($sce) {
    return function (val) {
        return $sce.trustAsHtml(val);
    };
});