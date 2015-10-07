
$('.next').on("click", function(){
    $(this).parents('section').children('.overlay').removeClass('active');
    $(this).parents('section').next().children('.overlay').addClass('active');

    if($(this).parents('section').hasClass('step2')){

        //Reason for investing
        $(this).children().addClass('active');
        $(this).parents('.col-sm-3').siblings().find('.icons').removeClass('active');

        //Progress bar
        $('.bar-box .steps .col-xs-2:nth-child(2) a').removeClass('current', 'disabled').addClass('active');
        $('.bar-box .steps .col-xs-2:nth-child(3) a').removeClass('disabled').addClass('current');
        $('.line.line2').css('width','40%');
    }

    //Progress bar

    else if($(this).parents('section').hasClass('step1')){
        $('.bar-box .steps .col-xs-2:first-child a').removeClass('current', 'disabled').addClass('active');
        $('.bar-box .steps .col-xs-2:nth-child(2) a').removeClass('disabled').addClass('current');
        $('.line.line2').css('width','20%');
    }

    else if($(this).parents('section').hasClass('step3')){
        $('.bar-box .steps .col-xs-2:nth-child(3) a').removeClass('current', 'disabled').addClass('active');
        $('.bar-box .steps .col-xs-2:nth-child(4) a').removeClass('disabled').addClass('current');
        $('.line.line2').css('width','60%');
    }

    else if($(this).parents('section').hasClass('step4')){
        $('.bar-box .steps .col-xs-2:nth-child(4) a').removeClass('current', 'disabled').addClass('active');
        $('.bar-box .steps .col-xs-2:nth-child(5) a').removeClass('disabled').addClass('current');
        $('.line.line2').css('width','80%');
    }

    else if($(this).parents('section').hasClass('step5')){
        $('.bar-box .steps .col-xs-2:nth-child(5) a').removeClass('current', 'disabled').addClass('active');
        $('.bar-box .steps .col-xs-2:nth-child(6) a').removeClass('disabled').addClass('current');
        $('.line.line2').css('width','100%');
    }

    else if($(this).parents('section').hasClass('step6')){
        $('.bar-box .steps .col-xs-2:nth-child(6) a').removeClass('current', 'disabled').addClass('active');
    }
});