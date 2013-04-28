Crafty.sprite(1, "images/protag.png", {
  ProtagSprite: [0, 0]
}, 0);

Crafty.c('ProtagAnims', {
  ProtagAnims : function() {
    var prevDirection = "right";
    this.requires("SpriteAnimation")
      .animate("walk_left",  [[0, 44], [32, 44], [0, 44], [64, 44]])
      .animate("idle_left",  [[0, 44], [160, 44]])
      .animate("walk_right", [[0,  0], [32,  0], [0,  0], [64,  0]])
      .animate("idle_right", [[0,  0], [160,  0]])
      .animate("jump_left", 96, 0, 128)
      .animate("jump_right", 96, 44, 128)
      .bind("NewDirection", function (direction) {
        if (direction.x < 0) {
          if (!this.isPlaying("walk_left"))
            this.stop().animate("walk_left", 20, -1);
          prevDirection = "left";
        }
        if (direction.x > 0) {
          if (!this.isPlaying("walk_right"))
            this.stop().animate("walk_right", 20, -1);
          prevDirection = "right";
        }
        if(!direction.x) {
          this.stop().animate("idle_" + prevDirection, 120, -1);
        }
      });
    return this;
  }
});
