Crafty.sprite(1, "images/protag.png", {
  ProtagSprite: [0, 0]
}, 0);

function playAnimation(entity, animId, delay, repeat) {
  if (!entity.isPlaying(animId)) {
    entity.stop().animate(animId, delay, repeat);
  }
}

Crafty.c('ProtagAnims', {
  ProtagAnims : function() {
    var prevDirection = "right";
    var prevY = null;
    this.requires("SpriteAnimation")
      .animate("walk_left",  [[0, 44], [32, 44], [0, 44], [64, 44]])
      .animate("idle_left",  [[0, 44], [160, 44]])
      .animate("walk_right", [[0,  0], [32,  0], [0,  0], [64,  0]])
      .animate("idle_right", [[0,  0], [160,  0]])
      .animate("jump_left_begin", [[96, 44]])
      .animate("jump_left_end",   [[128, 44]])
      .animate("jump_right_begin", [[96, 0]])
      .animate("jump_right_end", [[128, 0]])
      .bind("NewDirection", function (direction) {
        if (direction.x < 0) {
          playAnimation(this, "walk_left", 20, -1);
          prevDirection = "left";
        }
        if (direction.x > 0) {
          playAnimation(this, "walk_right", 20, -1);
          prevDirection = "right";
        }
        if(!direction.x) {
          playAnimation(this, "idle_" + prevDirection, 120, -1);
        }
      })
      .bind("EnterFrame", function() {
        if (prevY === null) {
          prevY = this.y;
          return;
        }

        if (this.y < prevY) {
          playAnimation(this, "jump_" + prevDirection + "_begin", 20, -1);
        } else if (this.y > prevY) {
          playAnimation(this, "jump_" + prevDirection + "_end", 20, -1);
        }
        prevY = this.y;
      });
    return this;
  }
});
