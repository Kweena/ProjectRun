function Ranger(_game,_x,_y,_ennemiesGroup,_sprite,_speed)
{
  
  /*****************************
           Properties
  ******************************/

  var _sprite = _sprite || "Mob_Noodle";

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, _sprite);
      _self.smothed = false;
      _self.anchor.setTo(0.5,0.5);
      _self.scale.setTo(1.8,1.8);

  var speed = _speed || 0.75;

  _game.physics.arcade.enable(_self);

  _self.ennemiesGroup = _ennemiesGroup;

  // resize collider
  _self.body.setSize(50, 50, 60, 70);

  setTimeout(function(){ _self.shoot(); }, Math.random() * 3000 + 1000);

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
    bullet.smothed = false;
    _self.ennemiesGroup.add(bullet);
    bullet.scale.setTo(1.8,1.8);
    bullet.body.setSize(50, 10, -50, 0);

    setTimeout(function(){ _self.shoot(); }, Math.random() * 3000 + 1000);

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
    _self.position.y = Application.Game.math.clamp(_self.position.y, 0 + 150, Application.Game.height - 150);
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}