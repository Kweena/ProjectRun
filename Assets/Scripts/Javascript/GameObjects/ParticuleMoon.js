function ParticuleMoon(_game,_x,_y,_speed)
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, "PMoon");
  _self.scale.setTo(2,2);
  
  _game.physics.arcade.enable(_self);
  _self.anchor.set(0.5);
  // resize collider
  _self.body.setSize(16, 16, 25, 32);
 
  // Glow
  /*_self.tween = Application.Game.add.tween(_self).to({ alpha: 0 }, 200, "Linear");
  _self.tween.yoyo(true,100);
  _self.tween.start();*/

  var speed = _speed;


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
    _self.position.x = Math.random() * 200 + Application.Game.width;
    _self.position.y = Math.random() * Application.Game.height ;
    _self.position.y = Application.Game.math.clamp(_self.position.y, 0 + 120, Application.Game.height - 75);
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}