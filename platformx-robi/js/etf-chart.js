//$(function () {
//    var colors = ['#F08269','#F9D527','#96DD4F', '#48C47A', '#00CEC6'];
//    $('#etf-chart').highcharts({
//        chart: {
//            type: 'area',
//            borderRadius: 0,
//            style:{
//                fontFamily: 'Open sans, Helvetica, Arial, sans-serif',
//                letterSpacing: '1.5px',
//                fontWeight: '500'
//            }
//        },
//        credits: {
//            enabled: false
//        },
//        title: false,
//        xAxis: {
//            allowDecimals: false,
//            labels: {
//                formatter: function () {
//                    return this.value; // clean, unformatted number for year
//                }
//            }
//        },
//        yAxis: {
//            title: false,
//            labels: {
//                formatter: function () {
//                    return this.value / 1000 + 'k';
//                }
//            }
//        },
//        tooltip: {
//            pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
//        },
//        plotOptions: {
//            area: {
//                pointStart: 2015,
//                marker: {
//                    enabled: false,
//                    symbol: 'circle',
//                    radius: 2,
//                    states: {
//                        hover: {
//                            enabled: true
//                        }
//                    }
//                }
//            }
//        },
//        series: [{
//            name: 'Average market performance',
//            data: [
//                5,    25,    50,   120,   150,   200,   426,   660,   869,
//                1005,  1436,  2063,  3057,  4618,  6444,  9822, 15468, 20434,
//                27387, 29459, 31056, 31982, 32040, 31233, 29224, 27342, 26662,
//                26956, 27912, 28999, 28965, 27826, 25579, 25722, 24826, 24605,
//                24304, 23464, 23708, 24099, 24357, 24237, 24401, 24344, 23586,
//                22380, 21004, 17287, 14747, 13076, 12555, 12144, 11009, 10950,
//                10871, 10824, 10577, 10527, 10475, 10421, 10358, 10295, 10104],
//            color: colors[0]
//        }, {
//            name: 'Poor market performance',
//            data: [
//                5, 25, 50, 120, 150, 200, 426, 660, 869, 1060, 1605, 2471, 3322,
//                4238, 5221, 6129, 7089, 8339, 9399, 10538, 11643, 13092, 14478,
//                15915, 17385, 19055, 21205, 23044, 25393, 27935, 30062, 32049,
//                33952, 35804, 37431, 39197, 37431, 37231, 33431, 31000, 30000,
//                31000, 33000, 31000, 29000, 27000, 25000, 24000, 23000, 22000,
//                21000, 20000, 19000, 18000, 18000, 17000, 16000, 15500, 15000,
//                14500, 14000, 13000, 12500, 12000, 11800, 11500, 11200, 11000, 10500, 10200, 10000, 9999, 9900, 9800, 9750, 9700],
//            color: colors[1]
//        }, {
//            name: 'Auto-contribution and one-time contribution',
//            data: [
//                5, 25, 50, 120, 150, 200, 426, 660, 869, 1020, 1605, 2171, 2571,
//                3362, 3422, 3522, 3622, 3722, 3822, 3922, 4022, 4122, 4222,
//                4422, 4522, 4622, 4722, 4822, 4922, 5222, 5322, 5522,
//                5622, 5722, 5822, 5922, 6022, 6122, 6222, 6322, 6422,
//                6522, 6622, 6722, 6822, 6922, 7022, 7122, 7222, 7322,
//                7422, 7522, 7622, 7722, 7822, 7922, 8322, 8500, 8550, 8660, 8690, 8720, 8790, 8810, 8880, 9000, 9200, 9500, 9800, 10000, 10400, 10600, 11000, 12000, 12500, 13000],
//            color: colors[4]
//        }]
//    });
//});

var chart1;
$(function() {
    var newh = $(".modal-body").height();

    $( window ).resize(function() {

        newh = $(".modal-body").height();
        chart1.redraw();
        chart1.reflow();
    });
    chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'etf-chart'
        },
        title: false,
        credits: {
            enabled: false
        },

        xAxis: {
            categories: ['2010', '2011', '2012', '2013', '2014', '2015']
        },

        yAxis: {
            labels: {
                formatter: function () {
                    return '$' + this.axis.defaultLabelFormatter.call(this);
                }
            },
            title: false
        },

        series: [{
            name: 'CAGR = Compound Annual Growth Rate',
            data: [29.9, 176.0,  148.5, 216.4, 194.1,  154.4],
            color: '#00CEC6'
        }]
    });
});