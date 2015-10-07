/**
 * Created by suzy.zhang on 6/08/15.
 */

//slider
$(function() {
    $( "#slider1" ).slider({
        value: 1,
        min: 1,
        max: 50,
        step: 1,
        slide: function( event, ui ) {
            if (ui.value == 1){
                $( "#amount1" ).val( ui.value + " year");
            }
            else{
                $( "#amount1" ).val( ui.value + " years");
            }
        }
    });
    $( "#amount1" ).val( $( "#slider1" ).slider( "value" ) + " year");

    $( "#slider2" ).slider({
        value: 1,
        min: 1,
        max: 10,
        step: 1,
        slide: function( event, ui ) {
            if (ui.value == 1){
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#00CEC6');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#0be1dd');
                var htmlString = 'Avoiding loss is the priority';
                $('.slider2 .desc label span').text(htmlString);
            }
            else if (ui.value == 2){
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#2AC1B6');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#28CFC6');
                var htmlString = 'Avoiding loss is the priority';
                $('.slider2 .desc label span').text(htmlString);
            }
            else if (ui.value == 3){
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#40BAAE');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#41C1B5');
                var htmlString = 'Slow and steady is acceptable';
                $('.slider2 .desc label span').text(htmlString);
            }
            else if (ui.value == 4){
                $( "#amount2" ).val( ui.value);
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#5CB1A2');
                var htmlString = 'Slow and steady is acceptable';
                $('.slider2 .desc label span').text(htmlString);
            }
            else if (ui.value == 5){
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#64AE9F');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#799F89');
                var htmlString = 'I’m willing to lose some to make some';
                $('.slider2 .desc label span').text(htmlString);
            }
            else if (ui.value == 6){
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#7DA695');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#948D74');
                var htmlString = 'I’m willing to lose some to make some';
                $('.slider2 .desc label span').text(htmlString);
            }
            else if (ui.value == 7){
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#9C9C89');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#AE7E61');
                var htmlString = 'I’m comfortable taking a chance';
                $('.slider2 .desc label span').text(htmlString) ;
            }
            else if (ui.value == 8){
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#C2917B');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#C96E4C');
                var htmlString = 'I’m comfortable taking a chance';
                $('.slider2 .desc label span').text(htmlString);
            }
            else if (ui.value == 9){
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#D08D76');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#DF5F3A');
                var htmlString = 'I’ll risk large losses for higher gains';
                $('.slider2 .desc label span').text(htmlString);
            }
            else {
                $( "#amount2" ).val( ui.value);
                //$('#slider2 .ui-state-default, .slider2 .desc').css('background', '#F08269');
                $('#slider2 .ui-state-default, .slider2 .desc').css('background', '#FE4D23');
                var htmlString = 'I’ll risk large losses for higher gains';
                $('.slider2 .desc label span').text(htmlString);
            }
        }
    });
    $( "#amount2" ).val( $( "#slider2" ).slider( "value" ));

    var feePercentage, fee;

    $( "#slider3" ).slider({
        value: 0,
        min: 0,
        max: 1000000,
        step: 100,
        slide: function( event, ui ) {
            //fee = ui.value / 1000 *
            if(ui.value == 0){
                feePercentage = 0;
            }
            else if((ui.value > 0) && (ui.value < 200000)){
                feePercentage = 0.01;
            }
            else if((ui.value >= 200000) && (ui.value < 400000)){
                feePercentage = 0.008;
            }
            else if((ui.value >= 400000) && (ui.value < 600000)){
                feePercentage = 0.006;
            }
            else if((ui.value >= 600000) && (ui.value < 800000)){
                feePercentage = 0.005;
            }
            else if((ui.value >= 800000) && (ui.value < 1000000)){
                feePercentage = 0.004;
            }

            fee = Math.round(ui.value * feePercentage * 100 / 52) / 100;
            $( "#amount3" ).val( "$" + ui.value);
            $( "#amount4" ).val( feePercentage * 100 + "% per year");
            $( "#amount5" ).val( "$" + fee + " per week");
        }
    });
    $( "#amount3" ).val( "$" + $( "#slider3" ).slider( "value" ));
    $( "#amount4" ).val( "0% per year");
    $( "#amount5" ).val( "$0 per week");
});