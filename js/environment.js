var Environment = {
    BASE_GROUND_Y: 600,

    draw: function() {
        this.drawBackground();
        this.drawLandscape();
        this.drawLights();
        this.drawBoundaries();
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

        Crafty.e('2D, DOM, BenchSprite')
            .attr({ x: 200, y: Environment.BASE_GROUND_Y - 74, w: 168, h: 74 });

        Crafty.e('2D, DOM, TreeSprite')
            .attr({ x: 290, y: Environment.BASE_GROUND_Y - 496, w: 392, h: 496 });

        Crafty.e('2D, DOM, CitySprite4')
            .attr({ x: 1000, y: Environment.BASE_GROUND_Y - 156, w: 216, h: 156 });

        Crafty.e('2D, DOM, CitySprite2')
            .attr({ x: 1250, y: Environment.BASE_GROUND_Y - 550, w: 80, h: 500 });

        Crafty.e('2D, DOM, CitySprite5')
            .attr({ x: 1350, y: Environment.BASE_GROUND_Y - 398, w: 80, h: 398 });

        Crafty.e('2D, DOM, CitySprite5')
            .attr({ x: 1435, y: Environment.BASE_GROUND_Y - 350, w: 80, h: 398 });

        Crafty.e('2D, DOM, CitySprite2')
            .attr({ x: 1700, y: Environment.BASE_GROUND_Y - 500, w: 80, h: 500 });

        Crafty.e('2D, DOM, CitySprite1')
            .attr({ x: 1580, y: Environment.BASE_GROUND_Y - 208, w: 146, h: 208 });

        Crafty.e('2D, DOM, CitySprite5')
            .attr({ x: 1800, y: Environment.BASE_GROUND_Y - 350, w: 80, h: 398 });

        Crafty.e('2D, DOM, CitySprite5')
            .attr({ x: 2000, y: Environment.BASE_GROUND_Y - 300, w: 80, h: 398 });

        Crafty.e('2D, DOM, CitySprite5')
            .attr({ x: 2200, y: Environment.BASE_GROUND_Y - 398, w: 80, h: 398 });

        Crafty.e('2D, DOM, CitySprite3')
            .attr({ x: 2120, y: Environment.BASE_GROUND_Y - 152, w: 112, h: 152 });

        Crafty.e('2D, DOM, TreeSprite')
            .attr({ x: 3900, y: Environment.BASE_GROUND_Y - 496, w: 392, h: 496 });

        Crafty.e('2D, DOM, BedSprite')
            .attr({ x: 4800, y: Environment.BASE_GROUND_Y - 113, w: 200, h: 113 });
    },

    drawLandscape: function() {
        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 1180, y: Environment.BASE_GROUND_Y - 50, w: 500, h: 50 })
        	.collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 1230, y: Environment.BASE_GROUND_Y - 100, w: 400, h: 50 })
        	.collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2300, y: Environment.BASE_GROUND_Y - 200, w: 400, h: 50 })
         .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2600, y: 0, w: 50, h: Environment.BASE_GROUND_Y - 150 })
            .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2650, y: Environment.BASE_GROUND_Y - 200, w: 150, h: 50 })
            .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2900, y: Environment.BASE_GROUND_Y - 100, w: 50, h: 100 })
            .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 2950, y: Environment.BASE_GROUND_Y - 250, w: 100, h: 250 })
            .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 3050, y: Environment.BASE_GROUND_Y - 150, w: 400, h: 150 })
            .collision();

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 3450, y: Environment.BASE_GROUND_Y - 50, w: 100, h: 50 })
            .collision();

        Crafty.e('2D, DOM, HTML')
            .attr({ x: 4200, y: 0, w: 1024, h: 516 })
            .replace("<div id='bedroom'></div>");

        Crafty.e('2D, DOM, Platform, Building, Color, Collision, Solid')
            .color('#030408')
            .attr({ x: 4200, y: 0, w: 100, h: Environment.BASE_GROUND_Y - 100 })
            .collision();
    },

    setUpLightSounds: function() {
        Crafty.audio.add('clickOn', ['audio/click_on.mp3', 'audio/click_on.wav', 'audio/click_on.ogg']);
        Crafty.audio.add('clickOff', ['audio/click_off.mp3', 'audio/click_off.wav', 'audio/click_off.ogg']);
    },

    drawLights: function() {
        this.setUpLightSounds();

        this.makeLight(370, Environment.BASE_GROUND_Y);
        this.makeLight(650, Environment.BASE_GROUND_Y);
        // this.makeLight(1800, Environment.BASE_GROUND_Y);
        // this.makeLight(1800, Environment.BASE_GROUND_Y - 200);
        // this.makeLight(2300, Environment.BASE_GROUND_Y, 225, 200);
    },

    // height and radius are optional; it's random otherwise
    makeLight: function(x, y, height, radius) {
        height = height || Math.floor(Math.random() * 145) + 90;
        radius = radius || Math.floor(Math.random() * 200) + 90;
        radius = Math.max(height, radius);

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
