var Enemies = {
    drawEnemies: function() {
        var enemy1 = Crafty.e('2D, DOM, Enemy, Color, Collision, FollowAI')
                        .color('rgb(0, 255, 255)')
                        .attr({ x: 290, y: 340, w: 10, h: 50,
                            disabled: false, speed: 2, up: true, leftLimit: 0, rightLimit: 290})
                        .collision()
                        .followAI();

        enemies.push(enemy1);

        var enemy2 = Crafty.e('2D, DOM, Enemy, Color, Collision, FollowAI')
                        .color('rgb(0, 255, 255)')
                        .attr({ x: 490, y: 320, w: 10, h: 50,
                            disabled: false, speed: 1, up: false, leftLimit: 352, rightLimit: 490 })
                        .collision()
                        .followAI();
        enemies.push(enemy2);
    }
};