var app = angular.module('myApp', ['ui.router', 'ngMessages', 'ngSanitize']);

app.controller('myCtrl', function ($scope, $http, $timeout, $window, $compile, $stateParams, $rootScope, $sce) {
    var RouteUrl = $('#RouteUrl').val();
    var FrontUrl = $('#FrontUrl').val();
    $scope.pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $scope.analysisId = $('#analysisId').val();
    $scope.typeId = $('#typeId').val();

    $scope.ChangeEmail = function () {
        $rootScope.email = $scope.model.email;
        $rootScope.$broadcast('email', $rootScope.email);
    }

    $(".searchInp").keypress(function (e) {  // redirect to search page when pressing enter in search box in header
        var code = e.keyCode ? e.keyCode : e.which;
        if (code.toString() == 13) {
            window.location.href = FrontUrl + "search/?title=" + $scope.searchkey;
            return false;
        }
    });
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
                    /*  $('.drop-zone').append("<span class= 'drop-zone__prompt'></span >");*/
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

    $scope.batch = 0;
    $scope.news = [];
    $scope.data = [];
    $scope.numberOfProducts = 9;
    if ($('#wrapper').hasClass('homePage')) {
        $('.itemsList .arabic').click(function () {   // show arabic box
    $(this).parents('.grid-item').find('.englishBox').hide();
    $(this).parents('.grid-item').find('.arabicBox').show();
    initMasonryList(); // call masonry
});

$('.itemsList .english').click(function () {   // show english box
    $(this).parents('.grid-item').find('.englishBox').show();
    $(this).parents('.grid-item').find('.arabicBox').hide();
    initMasonryList(); // call masonry
});
        $scope.getnews = function () {
            $http({
                method: 'GET',
                url: RouteUrl + 'api/NewsCommunications/GetHomeData?batch=' + $scope.batch + '&numberOfProducts=' + $scope.numberOfProducts,
            }).then(function (res) {
                $scope.data = res.data;
                angular.forEach($scope.data, function (value, key) {
                    $scope.news.push(value);

                });
            });
        }
        $scope.getnews();

        var load = true;
        $(window).on('scroll touchmove mousewheel', function () {
            if (ishome != "true") {
                if (load == true && ($(document).height() - $(window).height()) - $(window).scrollTop() <= 500) {
                    $('.itemsList').addClass('loadmore');
                    load = false;

                    setTimeout(function () {

                        if ($scope.data.length > 8) {
                            $scope.batch = $scope.batch + 1;
                            $('.grid-item').removeClass('newPost');
                            $scope.getnews();

                            setTimeout(function () {
                                if ($('.itemsList').hasClass('loadmore')) {
                                    /*  $('.itemsList .grid').append($items).masonry('appended', $items);*/
                                    initMasonryList(); // recall masonry
                                }
                                $('.itemsList').removeClass('loadmore');
                            }, 2222);
                           
                        } else {
                            $('.box').addClass('hideborder');
                            $('.itemsList').removeClass('loadmore');
                        }

                    }, 600)


                    if ($scope.data.length == 0) {

                        //$('.Films').removeClass('loadMore');

                    }

                    setTimeout(function () {
                        load = true;
                    }, 3000)
                }
            }
        });
    }

    this.$onInit = function () {

      
    }
});



//app.controller('AnalysisCTRL', function ($scope, $http, $window, $stateParams, $rootScope) {

//    var FrontUrl = $('#FrontUrl').val();
//    var RouteUrl = $('#RouteUrl').val();
//    var analysisId = $('#analysisId').val();

//    var pageSize = $('#pageSize').val();
//    $scope.types = {};
//    $scope.typeList = [];
//    $scope.mediaList = [];
//    $http({
//        method: 'GET',
//        url: RouteUrl + 'api/Medias/GetData',
//    }).then(function (res) {
//        $scope.medias = res.data;
//        $scope.mediaList = $scope.medias;

//    });
//    $scope.changeMonth = function (months) {
//        if ($('.labelSelect').hasClass('selected')) {
//            $('.labelSelect').removeClass('selected');
//            months = 0;
//        }
//        if (months == 1) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.one').addClass('load');
//            $('.labelSelect.one').addClass('selected');
//        }
//        if (months == 6) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.two').addClass('load');
//            $('.labelSelect.two').addClass('selected');
//        }
//        if (months == 12) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.three').addClass('load');
//            $('.labelSelect.three').addClass('selected');
//        }
//        if (months == 24) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.four').addClass('load');
//            $('.labelSelect.four').addClass('selected');
//        }
//        $scope.sortByMonth = months;

//        $scope.getData();
//    }
//    $scope.changeYear = function (year) {
//        $('.labelSelect').removeClass('selected');
//        $scope.sortByMonth = 0;
//        $scope.sortByYear = parseInt(year);
//        $scope.getData();
//    }
//    $scope.updateTypeFilter = function () {
//        $scope.typeList = $scope.typeList.filter(function (v) {

//            return !!v;
//        });

//    }
//    $scope.updateMediaFilter = function () {

//        $scope.mediaList = $scope.mediaList.filter(function (v) {

//            return !!v;
//        });
//    }

//    $scope.watch = function () {
//        $scope.getData();
//    }
//    $scope.showloader = function (title) {
//        $('.label.' + title).addClass('load');
//    }

//    $http({
//        method: 'GET',
//        url: RouteUrl + 'api/TypeArticles/GetData',
//    }).then(function (res) {
//        $scope.types = res.data;

//    });

//    $scope.$on('article', function (event, args) {
//        $scope.articlesList = {};
//        $scope.articlesList = args;

//    });
//    $scope.getData = function () {
//        var pageNumber = $('#pageNumber').val() - 1;
//        if (pageNumber == -1) {
//            pageNumber = 0;
//        }
//        $http({
//            method: 'Post',
//            url: RouteUrl + 'api/NewsCommunications/DataByAnalysisId',
//            data: {
//                id: analysisId, pageNumber: pageNumber, sortByMonth: $scope.sortByMonth, sortByYear: $scope.sortByYear, typeList: $scope.typeList, mediaList: $scope.mediaList,
//                imgsize: "513x397xi", imgsize1: "153x303xi"
//            }
//        }).then(function (res) {
//            $scope.articlesList = {};
//            $scope.articlesList = res.data;
//            $rootScope.articlesList = res.data;
//            $rootScope.$broadcast('article', $rootScope.articlesList);

//            updateLayout2();
//            setTimeout(function () {
//                $('.labelSelect').removeClass('load');
//                $('.label').removeClass('load');
//                if ($scope.articlesList.length == 0) {
//                    $('.no-data').removeClass('ng-hide');
//                    $('.Pagination').addClass('ng-hide');
//                } else {
//                    $('.no-data').addClass('ng-hide');
//                    $('.Pagination').removeClass('ng-hide');
//                }
//            }, 200);
//            setTimeout(function () {
//                $('.itemsList .grid').removeClass('hidden');
//                $('.itemsList .grid').masonry({
//                    itemSelector: '.grid-item',
//                    columnWidth: '.grid-sizer',
//                    percentPosition: true,
//                    gutter: '.gutter-sizer',
//                    horizontalOrder: true
//                });

//                window.dispatchEvent(new Event('resize'));
//                change_Portrait_Text_Order();
//                mobileChangeTopheadorder();
//                ipad_fullwidthclass_topheadOrder();

//                if ($scope.articlesList.typeList != null) {
//                    $scope.typeList = $scope.articlesList.typeList;
//                }

//            }, 2000);
//            var selectedPageNumber = $('#pageNumber').val();
//            if (selectedPageNumber == 0) {
//                selectedPageNumber = 1;
//            }
//            $scope.page = selectedPageNumber;
//            $scope.totalPage = Math.ceil(pageSize / 8);
//            $scope.pages = [];
//            for (var i = 1; i <= $scope.totalPage; i++) {
//                $scope.pages.push(i);
//            }

//        });
//    }

//    this.$onInit = function () {
//        $scope.getData();
//    }


//});
//app.controller('PublicationCTRL', function ($scope, $http, $window, $stateParams, $rootScope) {

//    var FrontUrl = $('#FrontUrl').val();
//    var RouteUrl = $('#RouteUrl').val();
//    var typeId = $('#typeId').val();
//    var pageSize = $('#pageSize').val();
//    $scope.types = {};
//    $scope.typeList = [];
//    $scope.mediaList = [];
//    $scope.changeMonth = function (months) {
//        if (months == 1) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.one').addClass('load');
//            $('.labelSelect.one').addClass('selected');
//        }
//        if (months == 6) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.two').addClass('load');
//            $('.labelSelect.two').addClass('selected');
//        }
//        if (months == 12) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.three').addClass('load');
//            $('.labelSelect.three').addClass('selected');
//        }
//        if (months == 24) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.four').addClass('load');
//            $('.labelSelect.four').addClass('selected');
//        }
//        $scope.sortByMonth = months;
//        $scope.getData();
//    }
//    $scope.changeYear = function (year) {
//        $('.labelSelect').removeClass('selected');
//        $scope.sortByMonth = 0;
//        $scope.sortByYear = parseInt(year);
//        $scope.getData();
//    }
//    $scope.updateTypeFilter = function () {
//        $scope.typeList = $scope.typeList.filter(function (v) {

//            return !!v;
//        });

//    }
//    $scope.updateMediaFilter = function () {

//        $scope.mediaList = $scope.mediaList.filter(function (v) {

//            return !!v;
//        });
//    }

//    $scope.watch = function () {
//        $scope.getData();
//    }

//    $http({
//        method: 'GET',
//        url: RouteUrl + 'api/Keywords/GetData',
//    }).then(function (res) {
//        $scope.keywords = res.data;

//    });

//    $http({
//        method: 'GET',
//        url: RouteUrl + 'api/AnalysisThemes/GetData',
//    }).then(function (res) {
//        $scope.analysis = res.data;

//    });
//    $scope.showloader = function (title) {
//        $('.label.' + title).addClass('load');
//    }
//    $scope.$on('publication', function (event, args) {
//        $scope.publicationsList = {};
//        $scope.publicationsList = args;

//    });
//    $scope.getData = function () {
//        var pageNumber = $('#pageNumber').val() - 1;
//        if (pageNumber == -1) {
//            pageNumber = 0;
//        }
//        $http({
//            method: 'Post',
//            url: RouteUrl + 'api/NewsCommunications/DataByPublicationId',
//            data: {
//                id: typeId, pageNumber: pageNumber, sortByMonth: $scope.sortByMonth, sortByYear: $scope.sortByYear, typeList: $scope.typeList, mediaList: $scope.mediaList
//                , imgsize: "153x217xi", imgsize1: "153x217xi"

//            }
//        }).then(function (res) {
//            $scope.publicationsList = {};
//            $scope.publicationsList = res.data;
//            $rootScope.publicationsList = res.data;
//            $rootScope.$broadcast('publication', $rootScope.publicationsList);
//            updateLayout1();

//            setTimeout(function () {
//                $('.labelSelect').removeClass('load');
//                $('.label').removeClass('load');

//                if ($scope.publicationsList.length == 0) {
//                    $('.no-data').removeClass('ng-hide');
//                    $('.Pagination').addClass('ng-hide');
//                } else {
//                    $('.no-data').addClass('ng-hide');
//                    $('.Pagination').removeClass('ng-hide');
//                }
//            }, 200);
//            setTimeout(function () {

//                $('.pubList .grid').removeClass('hidden');
//                $('.pubList .grid').masonry({
//                    itemSelector: '.grid-item',
//                    columnWidth: '.grid-sizer',
//                    percentPosition: true,
//                    gutter: '.gutter-sizer',
//                    horizontalOrder: true
//                });


//                if ($scope.publicationsList.typeList != null) {
//                    $scope.typeList = $scope.publicationsList.typeList;
//                }
//            }, 400);
//            var selectedPageNumber = $('#pageNumber').val();
//            if (selectedPageNumber == 0) {
//                selectedPageNumber = 1;
//            }
//            $scope.page = selectedPageNumber;
//            $scope.totalPage = Math.ceil(pageSize / 8);
//            $scope.pages = [];
//            for (var i = 1; i <= $scope.totalPage; i++) {
//                $scope.pages.push(i);
//            }

//        });
//    }

//    this.$onInit = function () {
//        $scope.getData();
//    }


//});




//app.controller('VideoCTRL', function ($scope, $http, $window, $stateParams, $rootScope, $sce) {

//    var FrontUrl = $('#FrontUrl').val();
//    var RouteUrl = $('#RouteUrl').val();

//    $scope.mediaId = $('#mediaId').val();
//    $scope.iframeSrc = "";
//    setTimeout(function () {
//        $scope.videoUrl = $('.videoUrl').val();
//        if ($scope.videoUrl != null) {
//            if ($scope.videoUrl != "") {

//                if ($scope.iframeSrc == "") {
//                    $scope.iframeSrc = $sce.trustAsResourceUrl($scope.videoUrl.indexOf("youtube") > -1 ? $scope.GetYoutubeURL($scope.videoUrl) : $scope.videoUrl);
//                    $scope.addIframe();
//                }

//            }
//        }
//    }, 1000)

//    $scope.addIframe = function () {
//        $('<iframe>', {
//            src: $scope.iframeSrc,
//            id: 'youtubeVideo1',
//            frameborder: 0,
//            style: 'width="100%";height="100%"',
//            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
//            name: 'YouTube video player'
//        }).appendTo('.Details .youTube');
//    }
//    $scope.GetYoutubeURL = function (url) {
//        var youtubeRegexp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
//        var id = url.replace(youtubeRegexp, '$1');

//        if (id.indexOf(";") > -1) {
//            var pieces = id.split(';');

//            if (pieces[1].indexOf("%") > -1) {
//                var uriComponent = decodeURIComponent(id.split(';')[1]);
//                id = ('https://youtube.com' + uriComponent)
//                    .replace(youtubeRegexp, '$1');
//            } else {
//                id = pieces[0];
//            }
//        } else if (id.indexOf("#") > -1) {
//            id = id.split('#')[0];
//        }
//        return "https://www.youtube.com/embed/" + id;
//    }

//    $scope.changeMonth = function (months) {
//        if (months == 1) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.one').addClass('load');
//            $('.labelSelect.one').addClass('selected');
//        }
//        if (months == 6) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.two').addClass('load');
//            $('.labelSelect.two').addClass('selected');
//        }
//        if (months == 12) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.three').addClass('load');
//            $('.labelSelect.three').addClass('selected');
//        }
//        if (months == 24) {
//            $('.labelSelect').removeClass('selected');
//            $('.labelSelect.four').addClass('load');
//            $('.labelSelect.four').addClass('selected');
//        }
//        $scope.sortByMonth = months;
//        $scope.getData();
//    }
//    $scope.changeYear = function (year) {
//        $('.labelSelect').removeClass('selected');
//        $scope.sortByMonth = 0;
//        $scope.sortByYear = parseInt(year);
//        $scope.getData();
//    }
//    var pageSize = $('#pageSize').val();
//    $scope.types = {};
//    $scope.typeList = [];
//    $scope.mediaList = [];

//    $scope.updateTypeFilter = function () {
//        $scope.typeList = $scope.typeList.filter(function (v) {

//            return !!v;
//        });

//    }
//    $scope.updateMediaFilter = function () {

//        $scope.mediaList = $scope.mediaList.filter(function (v) {


//            return !!v;
//        });
//    }

//    $scope.watch = function () {
//        $scope.getData();
//    }
//    $scope.showloader = function (title) {
//        $('.label.' + title).addClass('load');
//    }

//    $http({
//        method: 'GET',
//        url: RouteUrl + 'api/Keywords/GetData',
//    }).then(function (res) {
//        $scope.keywords = res.data;

//    });

//    $http({
//        method: 'GET',
//        url: RouteUrl + 'api/AnalysisThemes/GetData',
//    }).then(function (res) {
//        $scope.analysis = res.data;

//    });

//    $scope.$on('publication', function (event, args) {
//        $scope.publicationsList = {};
//        $scope.publicationsList = args;

//    });
//    $scope.getData = function () {
//        var pageNumber = $('#pageNumber').val() - 1;
//        if (pageNumber == -1) {
//            pageNumber = 0;
//        }
//        $http({
//            method: 'Post',
//            url: RouteUrl + 'api/NewsCommunications/DataByMediaId',
//            data: {
//                id: $scope.mediaId, pageNumber: pageNumber, sortByMonth: $scope.sortByMonth, sortByYear: $scope.sortByYear, typeList: $scope.typeList, mediaList: $scope.mediaList, imgsize: "515x413xi", imgsize1: ""
//            }
//        }).then(function (res) {
//            $scope.publicationsList = {};
//            $scope.publicationsList = res.data;
//            $rootScope.publicationsList = res.data;
//            $rootScope.$broadcast('publication', $rootScope.publicationsList);
//            updateLayout3();
//            setTimeout(function () {
//                $('.labelSelect').removeClass('load');
//                $('.label').removeClass('load');
//                if ($scope.publicationsList.length == 0) {
//                    $('.no-data').removeClass('ng-hide');
//                } else {
//                    $('.no-data').addClass('ng-hide');
//                }
//            }, 200);
//            setTimeout(function () {
//                $('.layoutv3 .grid').masonry();
//                $('.layoutv3 .grid').masonry('destroy');
//                if ($scope.publicationsList.typeList != null) {
//                    $scope.typeList = $scope.publicationsList.typeList;
//                }

//            }, 400);
//            var selectedPageNumber = $('#pageNumber').val();
//            if (selectedPageNumber == 0) {
//                selectedPageNumber = 1;
//            }
//            $scope.page = selectedPageNumber;
//            $scope.totalPage = Math.ceil(pageSize / 8);
//            $scope.pages = [];
//            for (var i = 1; i <= $scope.totalPage; i++) {
//                $scope.pages.push(i);
//            }

//        });
//    }

//    this.$onInit = function () {

//        if ($scope.mediaId != undefined) {
//            $scope.getData();
//        }

//    }

//});
app.controller('myNewsLetter', function ($scope, $http, $window, $rootScope) {

    var FrontUrl = $('#FrontUrl').val();


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

            $('.letterloader').fadeIn();
            $('.newsletterPop .clickButtn').addClass('ng-hide');



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
                url: FrontUrl + 'Default/JoinNewsletter',
                data: {
                    email: $scope.model.email,
                }
            }).then(function (res) {
                if (res.data.status == 200) {

                    $scope.model.email = "",
                        $('.letterloader').fadeOut();
                    $('.newsletterPop .wrap').addClass('hiding');
                    $('.newsletterPop .thanks.message').addClass('showing');
                    // Set back to pristine.
                    itemForm.$setPristine();
                    // Since Angular 1.3, set back to untouched state.
                    itemForm.$setUntouched();

                    setTimeout(function () {

                        $('.newsletterPop .clickButtn').removeClass('ng-hide');
                        $('.newsletterPop .wrap').removeClass('hiding');
                        $('.newsletterPop .thanks.message').removeClass('showing');
                        closeNewsletter();
                    }, 4500)
                }
                if (res.data.status == 400) {
                    $scope.model.email = "",
                        $('.letterloader').fadeOut();
                    $('.newsletterPop .wrap').addClass('hiding');
                    $('.newsletterPop .thanks.message').removeClass('showing');
                    // Set back to pristine.
                    itemForm.$setPristine();
                    // Since Angular 1.3, set back to untouched state.
                    itemForm.$setUntouched();
                    $('.newsletterPop .thanks.error').html(res.data.message);
                    $('.newsletterPop .thanks.error').addClass('showing');
                    setTimeout(function () {
                        $('.newslSection .thanks.error').removeClass('showing');
                        $('.newsletterPop .wrap').removeClass('hiding');
                        $('.newsletterPop .clickButtn').removeClass('ng-hide');
                        $('.newsletterPop .thanks').removeClass('showing');
                        closeNewsletter();
                    }, 4500);


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