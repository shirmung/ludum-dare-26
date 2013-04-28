var Environment = {
    BASE_GROUND_Y: 600,
    draw: function() {
        this.drawBoundaries();
        this.drawBackground();
        this.drawLandscape();
        this.drawLights();
    },

    drawBoundaries: function() {
        Crafty.e('2D, DOM, Platform, Color')
            .color('#030408')
            .attr({ x: 0, y: Environment.BASE_GROUND_Y, w: SCREEN_WIDTH, h: SCREEN_HEIGHT - Environment.BASE_GROUND_Y });

        Crafty.e('2D, DOM, Start, Color, Collision, Solid')
            .color('rgb(0, 0, 255)')
            .attr({ x: -1, y: 0, w: 1, h: 600 })
            .collision();

        Crafty.e('2D, DOM, End, Color, Collision, Solid')
            .color('rgb(0, 0, 255)')
            .attr({ x: SCREEN_WIDTH, y: 0, w: 1, h: 600 })
            .collision();
    },

    drawBackground: function() {
        Crafty.background('url(images/background.png)');

        Crafty.e('2D, DOM, TreeSprite')
            .attr({ x: 100, y: Environment.BASE_GROUND_Y - 496, w: 392, h: 496 });

        Crafty.e('2D, DOM, BenchSprite')
            .attr({ x: 20, y: Environment.BASE_GROUND_Y - 74, w: 168, h: 74 });

        Crafty.e('2D, DOM, CitySprite1')
            .attr({ x: 1000, y: Environment.BASE_GROUND_Y - 208, w: 146, h: 208 });

        Crafty.e('2D, DOM, CitySprite2')
            .attr({ x: 1200, y: Environment.BASE_GROUND_Y - 500, w: 80, h: 500 });

        Crafty.e('2D, DOM, CitySprite3')
            .attr({ x: 1262, y: Environment.BASE_GROUND_Y - 152, w: 112, h: 152 });

        Crafty.e('2D, DOM, CitySprite4')
            .attr({ x: 1400, y: Environment.BASE_GROUND_Y - 156, w: 216, h: 156 });
    },

    drawLandscape: function() {
        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 1050, y: Environment.BASE_GROUND_Y - 50, w: 500, h: 50 })
        	.collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 1100, y: Environment.BASE_GROUND_Y - 100, w: 400, h: 50 })
        	.collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 1600, y: Environment.BASE_GROUND_Y - 200, w: 400, h: 50 })
        	.collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2100, y: 0, w: 50, h: Environment.BASE_GROUND_Y - 150 })
            .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2150, y: Environment.BASE_GROUND_Y - 200, w: 150, h: 50 })
            .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2450, y: Environment.BASE_GROUND_Y - 100, w: 50, h: 100 })
            .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2500, y: Environment.BASE_GROUND_Y - 250, w: 100, h: 250 })
            .collision();
    },

    drawLights: function() {
        this.makeLight(250, Environment.BASE_GROUND_Y);
        this.makeLight(450, Environment.BASE_GROUND_Y);
        this.makeLight(1700, Environment.BASE_GROUND_Y);
        this.makeLight(1700, Environment.BASE_GROUND_Y - 200);
        this.makeLight(2300, Environment.BASE_GROUND_Y, 225, 200);
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
};
