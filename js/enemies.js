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
        enemies.push(makeEnemy(700, 590, {leftLimit: 0, rightLimit: 1130}));
        enemies.push(makeEnemy(1100, 580, {leftLimit: 0, rightLimit: 1130}));
        enemies.push(makeEnemy(1500, 480, {leftLimit: 1380, rightLimit: 1580}));
        enemies.push(makeEnemy(2800, 580, {leftLimit: 1700, rightLimit: 2850}));
        enemies.push(makeEnemy(2800, 400, {leftLimit: 2650, rightLimit: 2750}));
    }
};
