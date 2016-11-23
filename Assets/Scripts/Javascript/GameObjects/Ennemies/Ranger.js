function Ranger(_game,_x,_y,_ennemiesGroup,_sprite,_speed)
{
  
  /*****************************
           Properties
  ******************************/

  var _sprite = _sprite || "Mob_Noodle";

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, _sprite);
      _self.anchor.setTo(0.5,0.5);

  var speed = _speed || 0.75;

  _game.physics.arcade.enable(_self);

  _self.ennemiesGroup = _ennemiesGroup;

  // resize collider
  _self.body.setSize(50, 50, 30, 35);

  setInterval(function(){ _self.shoot(); }, 3500);

  /*****************************
            Method
  ******************************/

  // Phaser update method (called automatically)
  _self.update = function()
  {
    _self.position.x -= speed + Application.Player.Speed;

    if (_self.position.x + _self.width < 0) 
    {
      _self.Restart();
    }

    if (Application.debugMode)
    {
        Application.Game.debug.body(_self);
    }
    
  }

  _self.shoot = function () 
  {
    var bullet = _game.add.sprite(_self.position.x, _self.position.y + 10, "ChopStick");
    _self.ennemiesGroup.add(bullet);
    bullet.body.setSize(50, 10, -40, 0);

    bullet.update = function()
    {
      this.position.x -= 15 + Application.Player.Speed;
  
      if (this.position.x + this.width < 0) 
      {
        this.destroy();
      }
      if (Application.debugMode)
      {
          Application.Game.debug.body(this);
      }
    }
    bullet.Restart = function()
    {
      this.destroy();
    }
  }

  _self.Restart = function()
  { 
    _self.position.x = Math.random() * 500 + Application.Game.width;
    _self.position.y = Math.random() * Application.Game.height ;
    Application.Game.math.clamp(_self.position.y, 0 + 80, Application.Game.height - 80)
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}