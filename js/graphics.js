Crafty.sprite(1, "images/protag.png", {
  ProtagSprite: [0, 0]
}, 0);

Crafty.sprite(1, "images/lamp.png", {
  LampSprite: [0, 0],
  LampOffSprite: [36, 0]
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

// Create circular element
Crafty.c("CircleShape", {
  _circle: null,

  CircleShape: function() {
    this.requires("2D, DOM");
    var radius = this._w / 2;
    var paper = Raphael(this._element, this._w, this._h);
    var circle = paper.circle(radius, radius, radius);
    circle.attr("fill", "#c8b3a2");
    this.circle = circle;
    this.show();

    function AnimateCircle() {
      circle.animate({r: radius - 3}, 250, AnimateCircleBack)
    }

    function AnimateCircleBack() {
      circle.animate({r: radius}, 250, AnimateCircle);
    }

    AnimateCircle();
    return this;
  },

  hide: function() {
    this.circle.attr('opacity', 0);
  },

  show: function() {
    this.circle.attr('opacity', 0.2);
  }
});
