var Environment = {
    draw: function() {
        this.drawBoundaries();
        this.drawBackground();
        this.drawLandscape();
        this.drawLights();
    },

    drawBoundaries: function() {
        Crafty.e('2D, DOM, Platform, Color')
            .color('#030408')
            .attr({ x: 0, y: 400, w: SCREEN_WIDTH, h: SCREEN_HEIGHT - 400 });

        Crafty.e('2D, DOM, Start, Color, Collision, Solid')
            .color('rgb(0, 0, 255)')
            .attr({ x: -1, y: 0, w: 1, h: 600 })
            .collision();

        Crafty.e('2D, DOM, End, Color, Collision, Solid')
            .color('rgb(0, 0, 255)')
            .attr({ x: 2000, y: 0, w: 1, h: 600 })
            .collision();
    },

    drawBackground: function() {
        Crafty.background('url(images/background.png)');

        Crafty.e('2D, DOM, TreeSprite')
            .attr({ x: 100, y: 400 - 496, w: 392, h: 496 });

        Crafty.e('2D, DOM, BenchSprite')
            .attr({ x: 20, y: 400 - 74, w: 168, h: 74 });
    },

    drawLandscape: function() {
        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 300, y: 300, w: 50, h: 100 })
        	.collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 500, y: 300, w: 100, h: 100 })
        	.collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 600, y: 200, w: 50, h: 200 })
        	.collision();
    },

    drawLights: function() {
        this.makeLight(200, 400);
        this.makeLight(450, 400);
    },

    // height and radius are optional; it's random otherwise
    makeLight: function(x, y, height, radius) {
        height = height || Math.floor(Math.random() * 120) + 100;
        radius = radius || Math.floor(Math.random() * 200) + 50;

        var lightCircle = Crafty.e('2D, DOM, CircleShape')
            .attr({
                x: x - radius,
                y: y - height - radius,
                w: 36 + 2*radius,
                h: 62 + 2*radius
            });

        // sprite for light
        Crafty.e('2D, DOM, LampSprite')
            .attr({ x: x, y: y - height, w: 36, h: height });

        Crafty.e('2D, DOM, LampSprite, Light, Collision')
            .attr({ x: x, y: y - height, w: 36, h: 62,
                lightRadius: radius, on: true, lightCircle: lightCircle })
            .collision();

        lightCircle.CircleShape();
    }
}