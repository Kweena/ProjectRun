function Barrel(_game,_x,_y,_sprite,_speed)
{
  

  /*****************************
           Properties
  ******************************/

  var _sprite = _sprite || "Mob_Barrel";

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, _sprite);
      _self.anchor.setTo(0.5,0.5);

  var speed = 0;

  _game.physics.arcade.enable(_self);

  // resize collider
  _self.body.setSize(80, 65, 20, 35);


  /*****************************
            Method
  ******************************/

  // Phaser update method (called automatically)
  _self.update = function()
  {
    _self.position.x -= speed + Application.Player.Speed;

    _self.position.y = _self.position.defaultY + Math.sin(0.01 * _self.position.x) * (_self.height * 0.25);

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
    _self.position.defaultY = _self.position.y = Math.random() * Application.Game.height ;
    _self.position.y = Application.Game.math.clamp(_self.position.y, 0 + 80, Application.Game.height - 80);
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}