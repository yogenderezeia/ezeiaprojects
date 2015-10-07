/**
 * Created by suzyzhang on 15/7/17.
 */


//Smooth scrolling
jQuery(function() {
    $('.onboarding a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 60
                }, 800);
                if($(this).parents().hasClass('bar-box')){

                    var current = $(this).attr('href').slice(1);
                    var className = '.' + current;
                    if($('section').hasClass(current)){
                        $(className).find('.overlay').addClass('active');
                        $(className).siblings().find('.overlay').removeClass('active');
                        //console.log('aaa');
                    }
                    $(this).addClass('current');
                    $(this).parents('.col-xs-2').siblings().find('a').removeClass('current');
                }
                return false;

            }

        }
    });
});

//next step
$('.onboarding').on({
    'mousewheel': function(e) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
    }
})

$(document).ready(function (){

    validate1();
    validate2();
    $('#must-fill4').change(validate);
    $('#must-fill5').change(validate);
    $('#must-fill6').change(validate);

    $('#must-fill1').change(validate1);
    $('#must-fill2').change(validate2);
    $('#must-fill3').change(validate3);
});

function validate1(){
    if ($('#must-fill1').val().length   >   0) {
        $(this).parents('section').find('.next').removeClass('disabled');
    }
    else {
        $(this).parents('section').find('.next').addClass('disabled');
    }
}
function validate2(){
    if ($('#must-fill2').val().length   >   0) {
        $(this).parents('section').find('.next').removeClass('disabled');
    }
    else {
        $(this).parents('section').find('.next').addClass('disabled');
    }
}
function validate3(){
    if ($('#must-fill3').val().length   >   0) {
        $(this).parents('section').find('.next').removeClass('disabled');
    }
    else {
        $(this).parents('section').find('.next').addClass('disabled');
    }
    $('.onboarding').removeClass('before');
}

function validate(){
    if (($('#must-fill4').val().length   >   0) && ($('#must-fill5').val().length   >   0) && ($('#must-fill6').val().length   >   0)) {
        $(this).parents('section').find('.next').removeClass('disabled');
    }
    else {
        $(this).parents('section').find('.next').addClass('disabled');
    }
}



//Selector

$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});








//onboarding scroll detection

//jQuery(function() {
//    $('.onboarding .overlay').on('click',function(){
//        var target = $(this).parents('section');
//        $('html,body').animate({
//            scrollTop: target.offset().top - 150
//        }, 800);
//    });
//    $(window).scroll(function () {
//        if ($(window).scrollTop() < 100) {
//            $('.step1 .overlay').addClass('active');
//            $('.step1').siblings().children().removeClass('active');
//        }
//        else if ($(window).scrollTop() >= 100 & $(window).scrollTop() < 500) {
//            $('.step2 .overlay').addClass('active');
//            $('.step2').siblings().children().removeClass('active');
//        }
//        else if ($(window).scrollTop() >= 500 & $(window).scrollTop() < 1250) {
//            $('.step3 .overlay').addClass('active');
//            $('.step3').siblings().children().removeClass('active');
//        }
//        else if ($(window).scrollTop() >= 1250 & $(window).scrollTop() < 1700) {
//            $('.step4 .overlay').addClass('active');
//            $('.step4').siblings().children().removeClass('active');
//        }
//        else if ($(window).scrollTop() >= 1700 & $(window).scrollTop() < 2100) {
//            $('.step5 .overlay').addClass('active');
//            $('.step5').siblings().children().removeClass('active');
//        }
//        else if ($(window).scrollTop() >= $(window).innerHeight() - 200) {
//            $('.step6 .overlay').addClass('active');
//            $('.step6').siblings().children().removeClass('active');
//        }
//        clearTimeout($.data(this, 'scrollTimer'));
//        $.data(this, 'scrollTimer', setTimeout(function() {
//
//            if ($(window).scrollTop() < 100) {
//                $('html,body').animate({
//                    scrollTop: 0
//                }, 800);
//            }
//            else if ($(window).scrollTop() >= 100 & $(window).scrollTop() < 500) {
//                $('html,body').animate({
//                    scrollTop: 347
//                }, 800);
//            }
//            else if ($(window).scrollTop() >= 500 & $(window).scrollTop() < 1250) {
//                $('html,body').animate({
//                    scrollTop: 917
//                }, 800);
//            }
//            else if ($(window).scrollTop() >= 1250 & $(window).scrollTop() < 1700) {
//                $('html,body').animate({
//                    scrollTop: 1395
//                }, 800);
//            }
//            else if ($(window).scrollTop() >= 1700 & $(window).scrollTop() < 2100) {
//                $('html,body').animate({
//                    scrollTop: 1995
//                }, 800);
//            }
//            else if ($(window).scrollTop() >= $(window).innerHeight() - 200) {
//                $('html,body').animate({
//                    scrollTop: 2620
//                }, 800);
//            }
//        }, 500));
//    });
//});
