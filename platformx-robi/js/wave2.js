

//header2
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
            return this.height_offset + this.height_offset * .6 * Math.sin(x * 0.18 + -.4 * t + this.offset_x) * Math.exp(-Math.pow(x - width / 2, 2) / 4000);
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
            ctx.lineWidth = 2.5;
            if (this.color === 'rand') {
                ctx.strokeStyle = "rgb(" + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255)) + ", " + (Math.round(Math.random(1) * 255));
            } else {
                ctx.strokeStyle = this.color;
            }
            return ctx.stroke();
        };

        return Line;

    })();


    canvas = document.getElementById("canvas3");
    if (canvas.getContext) {
        ctx = canvas.getContext("2d");
        //width = canvas.width = window.innerWidth;
        width = canvas.width = 280;
        height = canvas.height;

        t = 0;

        redraw = function() {
            //colors = ["#F08269"];
            colors = ["#fff"];
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


