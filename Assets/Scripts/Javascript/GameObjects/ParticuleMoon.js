function ParticuleMoon(_game,_x,_y,_speed)
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, "PMoon");
      _self.anchor.setTo(0.5,0.5);
      _self.scale.setTo(0.4,0.4);

  var speed = _speed;


  /*****************************
            Method
  ******************************/

  // Phaser update method (called automatically)
  _self.update = function()
  {
    _self.position.x -= speed;

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
    _self.position.x = Math.random() * (1000 - 645) + 645;
    _self.position.y = Math.random() * (350 - 250) + 250 ;
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}