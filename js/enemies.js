function makeEnemy(x, y, opts) {
    return Crafty.e('2D, DOM, Enemy, Collision, FollowAI, EnemySprite')
                .attr({ x: x, y: y-60, w: 54, h: 60,
                    disabled: false, speed: 2, up: true,
                    leftLimit: opts.leftLimit || 0,
                    rightLimit: opts.rightLimit || 0 })
                .collision()
                .followAI();
}

var Enemies = {
    drawEnemies: function() {
        var enemy1 = makeEnemy(290, 600, {leftLimit: 0, rightLimit: 290});
        enemies.push(enemy1);

        var enemy2 = makeEnemy(490, 600, {leftLimit: 0, rightLimit: 290});
        enemies.push(enemy2);

        enemies.push(makeEnemy(1800, 600, {leftLimit: 1550, rightLimit: 1900}));
        enemies.push(makeEnemy(1850, 600, {leftLimit: 1550, rightLimit: 1900}));
        enemies.push(makeEnemy(1800, 500, {leftLimit: 1600, rightLimit: 1900}));
    }
};
