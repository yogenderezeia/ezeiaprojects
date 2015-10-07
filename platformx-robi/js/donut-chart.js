$(function () {
    var colors = ['#FE4D23','#ffe600','#96DD4F', '#00b464', '#0be1dd'];

    $('#donut-chart1').highcharts({
    //var chart = new Highcharts.Chart({
            chart: {
                //renderTo: 'donut-chart1',
                type: 'pie',
                height: '300',
                width: '700',
                backgroundColor: 'transparent',
                borderRadius: 0,
                style:{
                    fontFamily: 'Open sans, Helvetica, Arial, sans-serif',
                    letterSpacing: '1.5px',
                    fontWeight: '500'
                }
            },
            credits: {
                enabled: false
            },
            title: false,
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
                style:{
                    fontFamily: 'Open sans, Helvetica, Arial, sans-serif',
                    letterSpacing: 'normal'
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    startAngle: 90,
                    innerSize: '67%',
                    size: '100%',
                    dataLabels: false,
                    stickyTracking: false,
                    showInLegend: true,
                    states: {
                        hover: {
                            enabled: true
                        }
                    },
                    borderWidth:0,
                    point: {
                        events: {
                            mouseOver: function () {
                                this.series.chart.innerText.attr({text: this.y});
                            },
                            //mouseOut: function () {
                            //    this.series.chart.innerText.attr({text: '55'});
                            //},
                            legendItemClick: function () {
                                return false; // <== returning false will cancel the default action
                            }
                        }
                    }
                }
            },
            legend: {
                symbolWidth: 18,
                symbolHeight: 18,
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
                itemMarginTop: 7,
                itemMarginBottom: 7,
                itemStyle: {
                    color: 'rgba(0,0,0,0.6)',
                    fontSize: '16px',
                    fontFamily: 'Open sans, Helvetica, Arial, sans-serif',
                    letterSpacing: '1.5px',
                    fontWeight: '500',
                    width: '280px'
                },
                itemHoverStyle: {
                    color: 'black'
                },
                useHTML:true,
                x: 0,
                y: 20
            },

            series: [{
                name: 'Portfolio Allocation',
                data: [
                    {
                        name: 'Inflation-Protected Bonds: VTIP',
                        y: 10,
                        color: colors[0]
                    },{
                        name: 'Short-Term Treasuries: SHV',
                        y: 7,
                        color: colors[1]
                    },{
                        name: 'US Small-Cap Value: VBR',
                        y: 15,
                        color: colors[2]
                    },{
                        name: 'Developed Equities',
                        y: 14,
                        color: colors[3]
                    },{
                        name: 'Corporate Bonds',
                        y: 9,
                        color: colors[4]
                    }
                ]
            }]
        },
    function(chart) { // on complete

        var circleradius = 200;
        var pie = chart.series[0];
        var left = chart.plotLeft + pie.center[0],
            top = chart.plotTop + pie.center[1] + 25
        var totalNumber = 0
        for (var i = 0; i < 5; i++){
            var data =  chart.series[0].data[i].y;
            totalNumber = data + totalNumber;
        }
        // Render the text
        chart.innerText = chart.renderer.text(totalNumber, left, top).css({
            width: circleradius*2,
            color: 'black',
            fontFamily: 'Open sans, Helvetica, Arial, sans-serif',
            fontSize: '70px',
            textAlign: 'center',
            fontWeight: '500'

        }).attr({
            // why doesn't zIndex get the text in front of the chart?
            zIndex: 999,
            'text-anchor': 'middle'
        }).add();

        //if($(window).height() <= 710){
        //    var ac = $('#donut-chart1').highcharts();
        //    ac.chart.update({
        //        height: '320',
        //        width: '700'
        //    })
        //    ac.redraw();
        //}
        $('.qtyminus').click(function (e) {
            //alert($('#qty').val());
            if ($('#qty').val() == 1){
                //for 0
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 20,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 15,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 8,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 5,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 12,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 2){
                //for 1
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 18,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 13,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 9,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 7,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 10,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 3){
                //for 2
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 16,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 10,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 10,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 9,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 9,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 4){
                //for 3
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 13,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 10,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 12,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 11,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 9,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 5){
                //for 4
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 11,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 8,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 13,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 13,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 11,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 6){
                //for 5
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 10,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 7,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 15,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 14,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 9,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 7){
                //for 6
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 8,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 6,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 16,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 15,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 8,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 8){
                //for 7
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 7,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 5,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 15,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 17,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 10,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 9){
                //for 8
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 6,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 8,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 14,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 18,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 9,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 10){
                //for 9
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 5,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 7,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 13,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 19,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 6,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            chart.innerText.hide();
            var totalNumber = 0
            for (var i = 0; i < 5; i++){
                var data =  chart.series[0].data[i].y;
                totalNumber = data + totalNumber;
            }
            // Render the text
            chart.innerText = chart.renderer.text(totalNumber, left, top).css({
                width: circleradius*2,
                color: 'black',
                fontFamily: 'Open sans, Helvetica, Arial, sans-serif',
                fontSize: '70px',
                textAlign: 'center',
                fontWeight: '500'

            }).attr({
                // why doesn't zIndex get the text in front of the chart?
                zIndex: 999,
                'text-anchor': 'middle'
            }).add();

        })
        $('.qtyplus').click(function (e) {
            if ($('#qty').val() == 0){
                //for 1
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 18,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 13,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 9,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 7,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 10,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 1){
                //for 2
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 16,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 11,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 10,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 9,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 9,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 2){
                //for 3
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 13,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 10,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 12,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 11,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 9,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 3){
                //for 4
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 11,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 8,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 13,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 13,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 11,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 4){
                //for 5
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 10,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 7,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 15,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 14,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 9,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 5){
                //for 6
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 8,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 6,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 16,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 15,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 8,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 6){
                //for 7
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 7,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 5,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 15,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 17,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 10,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 7){
                //for 8
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 6,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 8,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 14,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 18,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 9,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 8){
                //for 9
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 5,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 7,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 13,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 19,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 6,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            else if ($('#qty').val() == 9){
                //for 10
                var ac = $('#donut-chart1').highcharts();
                ac.series[0].update({
                    data: [
                        {
                            name: 'Inflation-Protected Bonds: VTIP',
                            y: 4,
                            color: colors[0]
                        },{
                            name: 'Short-Term Treasuries: SHV',
                            y: 6,
                            color: colors[1]
                        },{
                            name: 'US Small-Cap Value: VBR',
                            y: 20,
                            color: colors[2]
                        },{
                            name: 'Developed Equities',
                            y: 18,
                            color: colors[3]
                        },{
                            name: 'Corporate Bonds',
                            y: 8,
                            color: colors[4]
                        }
                    ]
                });
                ac.redraw();
            }
            chart.innerText.hide();
            var totalNumber = 0
            for (var i = 0; i < 5; i++){
                var data =  chart.series[0].data[i].y;
                totalNumber = data + totalNumber;
            }
            // Render the text
            chart.innerText = chart.renderer.text(totalNumber, left, top).css({
                width: circleradius*2,
                color: 'black',
                fontFamily: 'Open sans, Helvetica, Arial, sans-serif',
                fontSize: '70px',
                textAlign: 'center',
                fontWeight: '500'

            }).attr({
                // why doesn't zIndex get the text in front of the chart?
                zIndex: 999,
                'text-anchor': 'middle'
            }).add();

        })
    });
});

