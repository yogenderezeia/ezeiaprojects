
//carousel
$( '#carousel' ).elastislide();



(function descLoop() {
    setTimeout(function(){
        $('.desc:nth-child(3)').addClass('active');
        $('.desc:nth-child(3)').siblings().removeClass('active');
        setTimeout(function(){
            $('.desc:last-child').addClass('active');
            $('.desc:last-child').siblings().removeClass('active');
            setTimeout(function(){
                $('.desc:nth-child(2)').addClass('active');
                $('.desc:nth-child(2)').siblings().removeClass('active');
                setTimeout(descLoop, 0);
            },4000);
        },4000);
    },4000);
}());





$('.carousel').carousel({
    interval: false
})
$('.carousel-control').on('click', function(){
    setTimeout(function() {
        $('.feed1').addClass('show');
        setTimeout(function() {
            $('.feed2').addClass('show');
            setTimeout(function() {
                $('.feed3').addClass('show');
            },2000);
        },2000);
    },500);
});

//View more

//One entry
$('.view-more').on('click', function () {
    $('.hide').toggleClass('active');
    $(this).toggleClass('active');
    $('.view-less').toggleClass('active');
})

$('.view-less').on('click', function () {
    $('.hide').toggleClass('active');
    $(this).toggleClass('active');
    $('.view-more').toggleClass('active');
})

//Multi-entry (message center)

$('.cd-timeline-content .read-more').on('click', function () {
    $(this).parent('.cd-timeline-content').children('.hide').toggleClass('active');
    $(this).toggleClass('active');
    $(this).siblings('.read-less').toggleClass('active');
})

$('.read-less').on('click', function () {
    $(this).parent('.cd-timeline-content').children('.hide').toggleClass('active');
    $(this).toggleClass('active');
    $(this).siblings('.read-more').toggleClass('active');
})



//readOnly & Edit  Edit/Done button
$('.edit, .done-btn').on('click', function () {
    $(this).parents('.mode').find('.readOnlyMode').toggleClass('editMode');
    $(this).toggleClass('hide');
    $(this).siblings().toggleClass('hide');
})


//tooltip
$('[data-toggle="tooltip"]').tooltip();

$(".tooltip-mark").mouseover(function(){
    $('.tooltip-box').addClass('active');
});
$(".tooltip-mark").mouseout(function(){
    $('.tooltip-box').removeClass('active');
})

//Smooth scrolling

jQuery(function() {
    $('header a[href*=#]:not([href=#]), .smooth a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
jQuery(function() {
    $('.onboarding2 .nav-tabs a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {

                setTimeout(function(){
                    $('html,body').animate({
                        scrollTop: target.offset().top - 350
                    }, 800);
                },500)
                return false;

            }

        }
    });
});

//checkbox
$('.block#checkbox').on('click', function(){
    $(this).toggleClass('active');
})



//tabs
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

//Close dashboard
$('#close').on('click',function(){
    $('.dashboard').removeClass('active');
})
$('.header3 .yogi-voice').on('click',function(){
    $('.dashboard').toggleClass('active');
})
$(document).ready(function () {

    $(this).scrollTop(0);

    //Tutorial overlay
    $('.check-portfolio').on('click', function(){
        $(this).parents('.before-portfolio').addClass('done');
        if($(this).hasClass('last')){
            $('*').removeClass('hovered');
            $('*').tooltip('hide');
        }
    })
    $('.next-tutorial').on('click', function () {
        $(this).parents('.steps').addClass('done');
        $(this).parents('.steps').next().removeClass('done');
        if($(this).hasClass('tutorial1')){
            $('.menu-icon').removeClass('hovered');
            $('.header3 .navbar-header .menu-icon:nth-child(3)').addClass('hovered');
            $('.header3 .navbar-header .menu-icon:nth-child(3)').tooltip('show');
        }
        if($(this).hasClass('tutorial2')){
            $('.menu-icon').removeClass('hovered');
            $('.payments .menu-icon').addClass('hovered');
            $('.payments').addClass('hovered');
            $('*').tooltip('hide');
        }
        if($(this).hasClass('tutorial4')){
            $('.menu-icon').removeClass('hovered');
            $('.payments').removeClass('hovered');
            $('.header3 .navbar-header .menu-icon:nth-child(5)').addClass('hovered');
            $('.header3 .navbar-header .menu-icon:nth-child(5)').tooltip('show');
        }
        if($(this).hasClass('tutorial5')){
            $('*').tooltip('hide');
            $('.menu-icon').removeClass('hovered');
            $('.account').addClass('hovered');
            $('.account >.btn').tooltip('show');
        }
    })




});

//Risks number
jQuery(document).ready(function(){
    // This button will increment the value
    $('.qtyplus').click(function(e){
        $('.qtyminus').removeClass('disabled');
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal) && currentVal < 10) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);

            if((!isNaN(currentVal) && currentVal == 9) || (!isNaN(currentVal) && currentVal == 10)){
                $(this).addClass('disabled');
            }
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(10);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        $('.qtyplus').removeClass('disabled');
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);

            if((!isNaN(currentVal) && currentVal == 1) || (!isNaN(currentVal) && currentVal == 0)){
                $(this).addClass('disabled');
            }
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    //qty input
    $("input#qty").prop('disabled', true);
});

//restrict number input
$(document).ready(function () {
    //called when key is pressed in textbox
    $(".quantity").keypress(function (e) {
        //if the letter is not digit then display error and don't type anything
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            //display error message
            //$("#errmsg").html("Digits Only").show().fadeOut("slow");
            return false;
        }
    });
});

$('#contribution').change(calculateTax);

function calculateTax(){
    var contribution = $('#contribution').val();
    var taxRelief = contribution * 0.25;
    var total = parseFloat(contribution) + parseFloat(taxRelief);
    $('#tax-relief').val(taxRelief);
    $('#total').val(total);
}



//Swiper
var mySwiper = new Swiper('.portfolio .swiper-container',{
    pagination: '.pagination',
    paginationClickable: true,
    freeMode: true,
    freeModeFluid: true,
    slidesPerView: '1.6',
    height: 400,
    centeredSlides: true,
    initialSlide: 1
})

//Swiper pagination
$(document).ready(function () {
    $('.portfolio .pagination span:first-child').html('List of investments');
    $('.portfolio .pagination span:nth-child(2)').html('Portfolio Allocation');
    $('.portfolio .pagination span:last-child').html('Projected performance');
});

$(document).ready(function () {
    $('.detail.portfolio .pagination span:first-child').html('Values');
    $('.detail.portfolio .pagination span:nth-child(2)').html('Portfolio Allocation');
    $('.detail.portfolio .pagination span:last-child').html('Projected performance');
});



var mySwiper = new Swiper('.team .swiper-container',{
    pagination: '.pagination',
    paginationClickable: true,
    freeMode: true,
    freeModeFluid: true,
    slidesPerView: '5',
    centeredSlides: true,
    initialSlide: 2
})