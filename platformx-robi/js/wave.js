

    //(function() {
    //    var Acousticbeat, Acousticbeat2, Acousticbeat3, Heartbeat, Line, Parabola, canvas, ctx, height, height_offset, redraw1, redraw2, redraw3, t, width, x1, x2, y1, y2;
    //
    //    window.N = 2000;
    //
    //    //Heartbeat = (function() {
    //    //    function Heartbeat(parabola_smoothing, height_offset1, offset_x, width1) {
    //    //        this.parabola_smoothing = parabola_smoothing;
    //    //        this.height_offset = height_offset1;
    //    //        this.offset_x = offset_x;
    //    //        this.width = width1;
    //    //    }
    //    //
    //    //    Heartbeat.prototype.coordinates = function() {
    //    //        var coordinates, dx, i, j, ref, x, y;
    //    //        coordinates = [];
    //    //        dx = this.width / window.N;
    //    //        for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    //    //            x = dx * i;
    //    //            y = this.f_xt(x, t);
    //    //            coordinates.push([x, y]);
    //    //        }
    //    //        return coordinates;
    //    //    };
    //    //
    //    //    Heartbeat.prototype.f_xt = function(x, t) {
    //    //        return this.height_offset + (this.height_offset * 0.18) * Math.cos(x / 25 + t * 0.01 + this.offset_x) * this.parabola_smoothing.fx(x);
    //    //    };
    //    //
    //    //    return Heartbeat;
    //    //
    //    //})();
    //
    //    Acousticbeat = (function() {
    //        function Acousticbeat(height_offset1, offset_x, width1) {
    //            this.height_offset = height_offset1;
    //            this.offset_x = offset_x;
    //            this.width = width1;
    //        }
    //
    //        Acousticbeat.prototype.coordinates = function() {
    //            var coordinates, dx, i, j, ref, x, y;
    //            coordinates = [];
    //            dx = this.width / window.N;
    //            for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    //                x = dx * i;
    //                y = this.f_xt(x, t);
    //                coordinates.push([x, y]);
    //            }
    //            return coordinates;
    //        };
    //
    //        Acousticbeat.prototype.f_xt = function(x, t) {
    //            return this.height_offset + this.height_offset * .8 * Math.sin(x * 0.2 + -.3 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 25000);
    //
    //        };
    //
    //        return Acousticbeat;
    //
    //    })();
        //Acousticbeat2 = (function() {
        //    function Acousticbeat2(height_offset1, offset_x, width1) {
        //        this.height_offset = height_offset1;
        //        this.offset_x = offset_x;
        //        this.width = width1;
        //    }
        //
        //    Acousticbeat2.prototype.coordinates = function() {
        //        var coordinates, dx, i, j, ref, x, y;
        //        coordinates = [];
        //        dx = this.width / window.N;
        //        for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        //            x = dx * i;
        //            y = this.f_xt(x, t);
        //            coordinates.push([x, y]);
        //        }
        //        return coordinates;
        //    };
        //
        //    Acousticbeat2.prototype.f_xt = function(x, t) {
        //        return this.height_offset + this.height_offset * .8 * Math.sin(x * 0.12 + -.3 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 25000);
        //    };
        //
        //    return Acousticbeat2;
        //
        //})();
        //Acousticbeat3 = (function() {
        //    function Acousticbeat3(height_offset1, offset_x, width1) {
        //        this.height_offset = height_offset1;
        //        this.offset_x = offset_x;
        //        this.width = width1;
        //    }
        //
        //    Acousticbeat3.prototype.coordinates = function() {
        //        var coordinates, dx, i, j, ref, x, y;
        //        coordinates = [];
        //        dx = this.width / window.N;
        //        for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
        //            x = dx * i;
        //            y = this.f_xt(x, t);
        //            coordinates.push([x, y]);
        //        }
        //        return coordinates;
        //    };
        //
        //    Acousticbeat3.prototype.f_xt = function(x, t) {
        //        return this.height_offset + this.height_offset * .8 * Math.sin(x * 0.05 + -.3 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 25000);
        //    };
        //
        //    return Acousticbeat3;
        //
        //})();


        //Line = (function() {
        //    function Line(context, coordinates1, color1) {
        //        this.context = context;
        //        this.coordinates = coordinates1;
        //        this.color = color1 != null ? color1 : 'rand';
        //    }
        //
        //    Line.prototype.draw = function() {
        //        var j, len, next_coordinates, ref;
        //        ctx.beginPath();
        //        ctx.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
        //        ref = this.coordinates;
        //        for (j = 0, len = ref.length; j < len; j++) {
        //            next_coordinates = ref[j];
        //            ctx.lineTo(next_coordinates[0], next_coordinates[1]);
        //        }
        //        ctx.lineWidth = 6;
        //        if (this.color === 'rand') {
        //            ctx.strokeStyle = "rgb(" + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255));
        //        } else {
        //            ctx.strokeStyle = this.color;
        //        }
        //        return ctx.stroke();
        //    };
        //
        //    return Line;
        //
        //})();

        //Parabola = (function() {
        //    function Parabola(coordinates1, borders) {
        //        this.coordinates = coordinates1;
        //        this.borders = borders;
        //        this.x1 = this.coordinates[0][0];
        //        this.y1 = this.coordinates[0][1];
        //        this.x2 = this.coordinates[1][0];
        //        this.y2 = this.coordinates[1][1];
        //        this.x3 = this.coordinates[2][0];
        //        this.y3 = this.coordinates[2][1];
        //        this.a = this.get_a();
        //        this.b = this.get_b();
        //        this.c = this.get_c();
        //    }
        //
        //    Parabola.prototype.fx = function(x) {
        //        if (x < this.borders[0] || x > this.borders[1]) {
        //            return 0;
        //        } else {
        //            return this.a * x * x + this.b * x + this.c;
        //        }
        //    };
        //
        //    Parabola.prototype.coefficients = function() {
        //        return {
        //            a: this.get_a(),
        //            b: this.get_b(),
        //            c: this.get_c()
        //        };
        //    };
        //
        //    Parabola.prototype.get_a = function() {
        //        return (this.y3 - (this.x3 * (this.y2 - this.y1) + this.x2 * this.y1 - this.x1 * this.y2) / (this.x2 - this.x1)) / (this.x3 * (this.x3 - this.x1 - this.x2) + this.x1 * this.x2);
        //    };
        //
        //    Parabola.prototype.get_b = function() {
        //        return (this.y2 - this.y1) / (this.x2 - this.x1) - this.get_a() * (this.x1 + this.x2);
        //    };
        //
        //    Parabola.prototype.get_c = function() {
        //        return (this.x2 * this.y1 - this.x1 * this.y2) / (this.x2 - this.x1) + this.get_a() * this.x1 * this.x2;
        //    };
        //
        //    return Parabola;
        //
        //})();

        //canvas = document.getElementById("canvas2");
        //
        //var colors = ["rgb(0, 72, 133)", "orange", "red" ];
        ////var i = 0;
        //
        //if (canvas.getContext) {
        //    ctx = canvas.getContext("2d");
        //    width = canvas.width = window.innerWidth;
        //    height = canvas.height;
        //
        //    t = 0;
        //
        //    redraw = function() {
        //        height_offset = height / 2;
        //        var acousticbeat, acousticbeat_line, color;
        //        t += 0.5;
        //        ctx.clearRect(0, 0, width, height);
        //        ctx.globalCompositeOperation = "lighter";
        //
        //
        //        //for one color
        //        color = colors[0];
        //        acousticbeat = new Acousticbeat(height_offset, Math.PI * 0 / colors.length, width);
        //        acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
        //        acousticbeat_line.draw();
        //
        //        return requestAnimationFrame(redraw);
        //    };

            //redraw1 = function() {
            //    height_offset = height / 2;
            //    console.log(t);
            //    var acousticbeat, acousticbeat_line, base_line_coordinates, color;
            //    console.log(t);
            //    ctx.clearRect(0, 0, width, height);
            //    ctx.globalCompositeOperation = "lighter";
            //
            //
            //    //for one color
            //    color = colors[0];
            //    acousticbeat = new Acousticbeat(height_offset, Math.PI * 0 / colors.length, width);
            //    acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
            //    acousticbeat_line.draw();
            //    return requestAnimationFrame(redraw1);
            //};
            //
            //redraw2 = function() {
            //
            //    height_offset = height / 2;
            //
            //    var acousticbeat2, acousticbeat2_line, color;
            //    ctx.clearRect(0, 0, width, height);
            //    ctx.globalCompositeOperation = "lighter";
            //
            //    //for one color
            //    color = colors[1];
            //    acousticbeat2 = new Acousticbeat2(height_offset, Math.PI * 1 / colors.length, width);
            //    acousticbeat2_line = new Line(ctx, acousticbeat2.coordinates(), color);
            //    acousticbeat2_line.draw();
            //    return requestAnimationFrame(redraw2);
            //};
            //
            //redraw3 = function() {
            //    height_offset = height / 2;
            //
            //    var acousticbeat3, acousticbeat3_line, color;
            //    ctx.clearRect(0, 0, width, height);
            //    ctx.globalCompositeOperation = "lighter";
            //
            //    //for one color
            //    color = colors[2];
            //    acousticbeat3 = new Acousticbeat3(height_offset, Math.PI * 2 / colors.length, width);
            //    acousticbeat3_line = new Line(ctx, acousticbeat3.coordinates(), color);
            //    acousticbeat3_line.draw();
            //    return requestAnimationFrame(redraw3);
            //};
            //requestAnimationFrame(redraw);

        //Buttons click

            //$('#normal').on('click',function(){
            //    $('#canvas1').css({
            //        'transform':'scale(1)',
            //        'transition': '0.5s'
            //    });
            //    requestAnimationFrame(redraw1);
            //});
            //$('#warning').on('click',function(){
            //    $('#canvas1').css({
            //        'transform':'scale(1, 0.6)',
            //        'transition': '0.5s'
            //    });
            //    requestAnimationFrame(redraw2);
            //});
            //$('#error').on('click',function(){
            //    $('#canvas1').css({
            //        'transform':'scale(1, 0.3)',
            //        'transition': '0.5s'
            //    });
            //    requestAnimationFrame(redraw3);
            //});
    //    }
    //}).call(this);

    //hero - canvas2
    (function() {
        var Acousticbeat, Heartbeat, Line, Parabola, canvas, ctx, height, height_offset, redraw, t, width;

        window.N = 1000;

        Acousticbeat = (function() {
            function Acousticbeat(height_offset1, offset_x, width1) {
                this.height_offset = height_offset1;
                this.offset_x = offset_x;
                this.width = width1;
            }

            Acousticbeat.prototype.coordinates = function() {
                var coordinates, dx, i, j, ref, x, y;
                coordinates = [];
                dx = this.width / window.N;
                for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
                    x = dx * i;
                    y = this.f_xt(x, t);
                    coordinates.push([x, y]);
                }
                return coordinates;
            };

            Acousticbeat.prototype.f_xt = function(x, t) {
                return this.height_offset + this.height_offset * 0.2 * Math.sin(x * 0.12 + -.25 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 12000);
            };

            return Acousticbeat;

        })();

        Line = (function() {
            function Line(context, coordinates1, color1) {
                this.context = context;
                this.coordinates = coordinates1;
                this.color = color1 != null ? color1 : 'rand';
            }

            Line.prototype.draw = function() {
                var j, len, next_coordinates, ref;
                ctx.beginPath();
                ctx.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
                ref = this.coordinates;
                for (j = 0, len = ref.length; j < len; j++) {
                    next_coordinates = ref[j];
                    ctx.lineTo(next_coordinates[0], next_coordinates[1]);
                }
                ctx.lineWidth = 3.5;
                if (this.color === 'rand') {
                    ctx.strokeStyle = "rgb(" + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255));
                } else {
                    ctx.strokeStyle = this.color;
                }
                return ctx.stroke();
            };

            return Line;

        })();

        canvas = document.getElementById("canvas2");
        if (canvas.getContext) {
            ctx = canvas.getContext("2d");
            width = canvas.width = window.innerWidth;
            //width = canvas.width = 800;
            height = canvas.height = 300;

            t = 0;

            redraw = function() {
                colors = ["#ffffff"];
                height_offset = height / 2;
                var acousticbeat, acousticbeat_line, color, i, j, len;
                t += 0.5;
                ctx.clearRect(0, 0, width, height);
                ctx.globalCompositeOperation = "lighter";


                //for one color
                i = 0;
                for (j = 0, len = colors.length; j < len; j++) {
                    color = colors[j];
                    acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
                    acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
                    acousticbeat_line.draw();
                    i += 1;
                }

                return requestAnimationFrame(redraw);
            };
            requestAnimationFrame(redraw);
        }
    }).call(this);


    //Colors in carousel - #canvas3
    //(function() {
    //    var Acousticbeat, Line, canvas, canvas3, ctx, height, height_offset, redraw,redraw1,redraw2,redraw3, t, width;
    //    var colors = [];
    //    window.N = 1000;
    //
    //
    //    Acousticbeat = (function() {
    //        function Acousticbeat(height_offset1, offset_x, width1) {
    //            this.height_offset = height_offset1;
    //            this.offset_x = offset_x;
    //            this.width = width1;
    //        }
    //
    //        Acousticbeat.prototype.coordinates = function() {
    //            var coordinates, dx, i, j, ref, x, y;
    //            coordinates = [];
    //            dx = this.width / window.N;
    //            for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    //                x = dx * i;
    //                y = this.f_xt(x, t);
    //                coordinates.push([x, y]);
    //            }
    //            return coordinates;
    //        };
    //
    //        Acousticbeat.prototype.f_xt = function(x, t) {
    //            return this.height_offset + this.height_offset * 0.8 * Math.sin(x * 0.3 + -.4 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 4000);
    //        };
    //
    //        return Acousticbeat;
    //
    //    })();
    //
    //    Line = (function() {
    //        function Line(context, coordinates1, color1) {
    //            this.context = context;
    //            this.coordinates = coordinates1;
    //            this.color = color1 != null ? color1 : 'rand';
    //        }
    //
    //        Line.prototype.draw = function() {
    //            var j, len, next_coordinates, ref;
    //            ctx.beginPath();
    //            ctx.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
    //            ref = this.coordinates;
    //            for (j = 0, len = ref.length; j < len; j++) {
    //                next_coordinates = ref[j];
    //                ctx.lineTo(next_coordinates[0], next_coordinates[1]);
    //            }
    //            ctx.lineWidth = 3;
    //            if (this.color === 'rand') {
    //                ctx.strokeStyle = "rgb(" + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255));
    //            } else {
    //                ctx.strokeStyle = this.color;
    //            }
    //            return ctx.stroke();
    //        };
    //
    //        return Line;
    //
    //    })();
    //
    //    canvas3 = document.getElementById("canvas3");
    //    if (canvas3.getContext) {
    //        ctx = canvas3.getContext("2d");
    //        width = canvas3.width;
    //        height = canvas3.height;
    //
    //        t = 0;
    //        colors = ["#fff"];
    //
    //        redraw = function() {
    //            height_offset = height / 2;
    //            var acousticbeat, acousticbeat_line, color, i, j, len;
    //            t += 0.5;
    //            ctx.clearRect(0, 0, width, height);
    //            ctx.globalCompositeOperation = "lighter";
    //
    //
    //            //for one color
    //            i = 0;
    //            for (j = 0, len = colors.length; j < len; j++) {
    //                color = colors[j];
    //                acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
    //                acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
    //                acousticbeat_line.draw();
    //                i += 1;
    //            }
    //
    //            return requestAnimationFrame(redraw);
    //        };
    //        requestAnimationFrame(redraw);
    //    }
    //
    //}).call(this);

    //Colors in carousel - #canvas4
    (function() {
        var Acousticbeat, Line, canvas, canvas4, ctx, height, height_offset, redraw,redraw1,redraw2,redraw3, t, width;
        var colors = [];
        window.N = 1000;


        Acousticbeat = (function() {
            function Acousticbeat(height_offset1, offset_x, width1) {
                this.height_offset = height_offset1;
                this.offset_x = offset_x;
                this.width = width1;
            }

            Acousticbeat.prototype.coordinates = function() {
                var coordinates, dx, i, j, ref, x, y;
                coordinates = [];
                dx = this.width / window.N;
                for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
                    x = dx * i;
                    y = this.f_xt(x, t);
                    coordinates.push([x, y]);
                }
                return coordinates;
            };

            Acousticbeat.prototype.f_xt = function(x, t) {
                return this.height_offset + this.height_offset * 0.5 * Math.sin(x * 0.15 + -.27 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 8000);
            };

            return Acousticbeat;

        })();

        Line = (function() {
            function Line(context, coordinates1, color1) {
                this.context = context;
                this.coordinates = coordinates1;
                this.color = color1 != null ? color1 : 'rand';
            }

            Line.prototype.draw = function() {
                var j, len, next_coordinates, ref;
                ctx.beginPath();
                ctx.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
                ref = this.coordinates;
                for (j = 0, len = ref.length; j < len; j++) {
                    next_coordinates = ref[j];
                    ctx.lineTo(next_coordinates[0], next_coordinates[1]);
                }
                ctx.lineWidth = 3;
                if (this.color === 'rand') {
                    ctx.strokeStyle = "rgb(" + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255));
                } else {
                    ctx.strokeStyle = this.color;
                }
                return ctx.stroke();
            };

            return Line;

        })();

        //canvas = document.getElementById("canvas3");
        //if (canvas.getContext) {
        //    ctx = canvas.getContext("2d");
        //    width = canvas.width = window.innerWidth;
        //    height = canvas.height;
        //
        //    t = 0;
        //    colors = ["#6CC3CA"];
        //
        //    redraw = function() {
        //        height_offset = height / 2;
        //        var acousticbeat, acousticbeat_line, color, i, j, len;
        //        t += 0.5;
        //        ctx.clearRect(0, 0, width, height);
        //        ctx.globalCompositeOperation = "lighter";
        //
        //
        //        //for one color
        //        i = 0;
        //        for (j = 0, len = colors.length; j < len; j++) {
        //            color = colors[j];
        //            acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
        //            acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
        //            acousticbeat_line.draw();
        //            i += 1;
        //        }
        //
        //        return requestAnimationFrame(redraw);
        //    };
        //    redraw1 = function() {
        //        height_offset = height / 2;
        //        var acousticbeat, acousticbeat_line, color, i, j, len;
        //        ctx.clearRect(0, 0, width, height);
        //        ctx.globalCompositeOperation = "lighter";
        //
        //
        //        //for one color
        //        i = 0;
        //        for (j = 0, len = colors.length; j < len; j++) {
        //            color = colors[j];
        //            acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
        //            acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
        //            acousticbeat_line.draw();
        //            i += 1;
        //        }
        //
        //        return requestAnimationFrame(redraw1);
        //    };
        //    requestAnimationFrame(redraw);
        //}

        canvas4 = document.getElementById("canvas4");
        if (canvas4.getContext) {
            ctx = canvas4.getContext("2d");
            width = canvas4.width = 360;
            height = canvas4.height;

            t = 0;
            colors = ["#fff"];

            redraw = function() {
                height_offset = height / 2;
                var acousticbeat, acousticbeat_line, color, i, j, len;
                t += 0.5;
                ctx.clearRect(0, 0, width, height);
                ctx.globalCompositeOperation = "lighter";


                //for one color
                i = 0;
                for (j = 0, len = colors.length; j < len; j++) {
                    color = colors[j];
                    acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
                    acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
                    acousticbeat_line.draw();
                    i += 1;
                }

                return requestAnimationFrame(redraw);
            };
            requestAnimationFrame(redraw);
        }
        //(function loop() {
        //    setTimeout(function(){
        //        colors = ["#F9D527"];
        //        $('#canvas3').css('transform','scale(1, 0.6)');
        //        requestAnimationFrame(redraw1);
        //        setTimeout(function(){
        //            colors = ["#F08269"];
        //            $('#canvas3').css('transform','scale(1, 0.2)');
        //            requestAnimationFrame(redraw1);
        //            setTimeout(function(){
        //                colors = ["#6CC3CA"];
        //                $('#canvas3').css('transform','scale(1, 1)');
        //                requestAnimationFrame(redraw1);
        //                setTimeout(loop, 0);
        //            },4000);
        //        },4000);
        //    },4000);
        //    // Do stuff
        //}());

    }).call(this);

    //amplitude in carousel - #canvas4
    //(function() {
    //    var Acousticbeat, Line, canvas, ctx, height, height_offset, redraw,redraw1, t, width;
    //    var colors = [];
    //    window.N = 1000;
    //
    //
    //    Acousticbeat = (function() {
    //        function Acousticbeat(height_offset1, offset_x, width1) {
    //            this.height_offset = height_offset1;
    //            this.offset_x = offset_x;
    //            this.width = width1;
    //        }
    //
    //        Acousticbeat.prototype.coordinates = function() {
    //            var coordinates, dx, i, j, ref, x, y;
    //            coordinates = [];
    //            dx = this.width / window.N;
    //            for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    //                x = dx * i;
    //                y = this.f_xt(x, t);
    //                coordinates.push([x, y]);
    //            }
    //            return coordinates;
    //        };
    //
    //        Acousticbeat.prototype.f_xt = function(x, t) {
    //            return this.height_offset + this.height_offset * 0.9 * Math.sin(x * 0.05 + -.6 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 120000);
    //        };
    //
    //        return Acousticbeat;
    //
    //    })();
    //
    //    Line = (function() {
    //        function Line(context, coordinates1, color1) {
    //            this.context = context;
    //            this.coordinates = coordinates1;
    //            this.color = color1 != null ? color1 : 'rand';
    //        }
    //
    //        Line.prototype.draw = function() {
    //            var j, len, next_coordinates, ref;
    //            ctx.beginPath();
    //            ctx.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
    //            ref = this.coordinates;
    //            for (j = 0, len = ref.length; j < len; j++) {
    //                next_coordinates = ref[j];
    //                ctx.lineTo(next_coordinates[0], next_coordinates[1]);
    //            }
    //            ctx.lineWidth = 6;
    //            if (this.color === 'rand') {
    //                ctx.strokeStyle = "rgb(" + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255));
    //            } else {
    //                ctx.strokeStyle = this.color;
    //            }
    //            return ctx.stroke();
    //        };
    //
    //        return Line;
    //
    //    })();
    //
    //    canvas = document.getElementById("canvas4");
    //    if (canvas.getContext) {
    //        ctx = canvas.getContext("2d");
    //        width = canvas.width = window.innerWidth;
    //        height = canvas.height;
    //
    //        t = 0;
    //        colors = ["#60ABEC"];
    //
    //        redraw = function() {
    //            height_offset = height / 2;
    //            var acousticbeat, acousticbeat_line, color, i, j, len;
    //            t += 0.5;
    //            ctx.clearRect(0, 0, width, height);
    //            ctx.globalCompositeOperation = "lighter";
    //
    //
    //            //for one color
    //            i = 0;
    //            for (j = 0, len = colors.length; j < len; j++) {
    //                color = colors[j];
    //                acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
    //                acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
    //                acousticbeat_line.draw();
    //                i += 1;
    //            }
    //
    //            return requestAnimationFrame(redraw);
    //        };
    //        redraw1 = function() {
    //            height_offset = height / 2;
    //            var acousticbeat, acousticbeat_line, color, i, j, len;
    //            ctx.clearRect(0, 0, width, height);
    //            ctx.globalCompositeOperation = "lighter";
    //
    //
    //            //for one color
    //            i = 0;
    //            for (j = 0, len = colors.length; j < len; j++) {
    //                color = colors[j];
    //                acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
    //                acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
    //                acousticbeat_line.draw();
    //                i += 1;
    //            }
    //
    //            return requestAnimationFrame(redraw1);
    //        };
    //        requestAnimationFrame(redraw);
    //    }
    //    (function loop() {
    //        setTimeout(function(){
    //            $('#canvas4').css('transform','scale(1, 0.6)');
    //            requestAnimationFrame(redraw1);
    //            setTimeout(function(){
    //                $('#canvas4').css('transform','scale(1, 0.2)');
    //                requestAnimationFrame(redraw1);
    //                setTimeout(function(){
    //                    $('#canvas4').css('transform','scale(1, 1)');
    //                    requestAnimationFrame(redraw1);
    //                    setTimeout(loop, 0);
    //                },4000);
    //            },4000);
    //        },4000);
    //        // Do stuff
    //    }());
    //
    //}).call(this);

    //density (with changing Acousticbeat and redraw function) - #canvas5
    //(function() {
    //    var Acousticbeat, Acousticbeat2, Acousticbeat3, Line, canvas, ctx, height, height_offset, redraw,redraw1,redraw2,redraw3, t, width;
    //    var colors = [];
    //    window.N = 1000;
    //
    //
    //    Acousticbeat = (function() {
    //        function Acousticbeat(height_offset1, offset_x, width1) {
    //            this.height_offset = height_offset1;
    //            this.offset_x = offset_x;
    //            this.width = width1;
    //        }
    //
    //        Acousticbeat.prototype.coordinates = function() {
    //            var coordinates, dx, i, j, ref, x, y;
    //            coordinates = [];
    //            dx = this.width / window.N;
    //            for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    //                x = dx * i;
    //                y = this.f_xt(x, t);
    //                coordinates.push([x, y]);
    //            }
    //            return coordinates;
    //        };
    //
    //        Acousticbeat.prototype.f_xt = function(x, t) {
    //            return this.height_offset + this.height_offset * 0.9 * Math.sin(x * 0.06 + -.6 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 120000);
    //        };
    //
    //        return Acousticbeat;
    //
    //    })();
    //    Acousticbeat2 = (function() {
    //        function Acousticbeat2(height_offset1, offset_x, width1) {
    //            this.height_offset = height_offset1;
    //            this.offset_x = offset_x;
    //            this.width = width1;
    //        }
    //
    //        Acousticbeat2.prototype.coordinates = function() {
    //            var coordinates, dx, i, j, ref, x, y;
    //            coordinates = [];
    //            dx = this.width / window.N;
    //            for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    //                x = dx * i;
    //                y = this.f_xt(x, t);
    //                coordinates.push([x, y]);
    //            }
    //            return coordinates;
    //        };
    //
    //        Acousticbeat2.prototype.f_xt = function(x, t) {
    //            return this.height_offset + this.height_offset * 0.9 * Math.sin(x * 0.04 + -.4 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 120000);
    //        };
    //
    //        return Acousticbeat2;
    //
    //    })();
    //    Acousticbeat3 = (function() {
    //        function Acousticbeat3(height_offset1, offset_x, width1) {
    //            this.height_offset = height_offset1;
    //            this.offset_x = offset_x;
    //            this.width = width1;
    //        }
    //
    //        Acousticbeat3.prototype.coordinates = function() {
    //            var coordinates, dx, i, j, ref, x, y;
    //            coordinates = [];
    //            dx = this.width / window.N;
    //            for (i = j = 0, ref = window.N; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
    //                x = dx * i;
    //                y = this.f_xt(x, t);
    //                coordinates.push([x, y]);
    //            }
    //            return coordinates;
    //        };
    //
    //        Acousticbeat3.prototype.f_xt = function(x, t) {
    //            return this.height_offset + this.height_offset * 0.9 * Math.sin(x * 0.02 + -.2 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 120000);
    //        };
    //
    //        return Acousticbeat3;
    //
    //    })();
    //
    //    Line = (function() {
    //        function Line(context, coordinates1, color1) {
    //            this.context = context;
    //            this.coordinates = coordinates1;
    //            this.color = color1 != null ? color1 : 'rand';
    //        }
    //
    //        Line.prototype.draw = function() {
    //            var j, len, next_coordinates, ref;
    //            ctx.beginPath();
    //            ctx.moveTo(this.coordinates[0][0], this.coordinates[0][1]);
    //            ref = this.coordinates;
    //            for (j = 0, len = ref.length; j < len; j++) {
    //                next_coordinates = ref[j];
    //                ctx.lineTo(next_coordinates[0], next_coordinates[1]);
    //            }
    //            ctx.lineWidth = 6;
    //            if (this.color === 'rand') {
    //                ctx.strokeStyle = "rgb(" + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255));
    //            } else {
    //                ctx.strokeStyle = this.color;
    //            }
    //            return ctx.stroke();
    //        };
    //
    //        return Line;
    //
    //    })();
    //
    //    canvas = document.getElementById("canvas5");
    //    if (canvas.getContext) {
    //        ctx = canvas.getContext("2d");
    //        width = canvas.width = window.innerWidth;
    //        height = canvas.height;
    //
    //        t = 0;
    //        colors = ["#60ABEC"];
    //
    //        redraw = function() {
    //            height_offset = height / 2;
    //            var acousticbeat, acousticbeat_line, color, i, j, len;
    //            t += 0.5;
    //            ctx.clearRect(0, 0, width, height);
    //            ctx.globalCompositeOperation = "lighter";
    //
    //
    //            //for one color
    //            i = 0;
    //            for (j = 0, len = colors.length; j < len; j++) {
    //                color = colors[j];
    //                acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
    //                acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
    //                acousticbeat_line.draw();
    //                i += 1;
    //            }
    //
    //            return requestAnimationFrame(redraw);
    //        };
    //        redraw1 = function() {
    //            height_offset = height / 2;
    //            var acousticbeat, acousticbeat_line, color, i, j, len;
    //            ctx.clearRect(0, 0, width, height);
    //            ctx.globalCompositeOperation = "lighter";
    //
    //
    //            //for one color
    //            i = 0;
    //            for (j = 0, len = colors.length; j < len; j++) {
    //                color = colors[j];
    //                acousticbeat = new Acousticbeat(height_offset, Math.PI * i / colors.length, width);
    //                acousticbeat_line = new Line(ctx, acousticbeat.coordinates(), color);
    //                acousticbeat_line.draw();
    //                i += 1;
    //            }
    //
    //            return requestAnimationFrame(redraw1);
    //        };
    //        redraw2 = function() {
    //            height_offset = height / 2;
    //            var acousticbeat2, acousticbeat2_line, color, i, j, len;
    //            ctx.clearRect(0, 0, width, height);
    //            ctx.globalCompositeOperation = "lighter";
    //
    //
    //            //for one color
    //            i = 0;
    //            for (j = 0, len = colors.length; j < len; j++) {
    //                color = colors[j];
    //                acousticbeat2 = new Acousticbeat2(height_offset, Math.PI * i / colors.length, width);
    //                acousticbeat2_line = new Line(ctx, acousticbeat2.coordinates(), color);
    //                acousticbeat2_line.draw();
    //                i += 1;
    //            }
    //
    //            return requestAnimationFrame(redraw2);
    //        };
    //        redraw3 = function() {
    //            height_offset = height / 2;
    //            var acousticbeat3, acousticbeat3_line, color, i, j, len;
    //            ctx.clearRect(0, 0, width, height);
    //            ctx.globalCompositeOperation = "lighter";
    //
    //
    //            //for one color
    //            i = 0;
    //            for (j = 0, len = colors.length; j < len; j++) {
    //                color = colors[j];
    //                acousticbeat3 = new Acousticbeat3(height_offset, Math.PI * i / colors.length, width);
    //                acousticbeat3_line = new Line(ctx, acousticbeat3.coordinates(), color);
    //                acousticbeat3_line.draw();
    //                i += 1;
    //            }
    //
    //            return requestAnimationFrame(redraw3);
    //        };
    //        requestAnimationFrame(redraw);
    //    }
    //    (function loop() {
    //        setTimeout(function(){
    //            requestAnimationFrame(redraw2);
    //            setTimeout(function(){
    //                requestAnimationFrame(redraw3);
    //                setTimeout(function(){
    //                    requestAnimationFrame(redraw1);
    //                    setTimeout(loop, 0);
    //                },4000);
    //            },4000);
    //        },4000);
    //    }());
    //
    //}).call(this);
//});

