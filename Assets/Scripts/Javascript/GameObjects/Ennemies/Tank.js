function Tank(_game,_x,_y,_sprite,_speed)
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object

  var _sprite = _sprite || "Mob_Spike";

  var _self = _game.add.sprite(_x, _y, _sprite);
      _self.anchor.setTo(0.5,0.5);

  var speed = _speed || 0.1;

  _game.physics.arcade.enable(_self);

  // resize collider
  _self.body.setSize(68, 68, 25, 30);


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