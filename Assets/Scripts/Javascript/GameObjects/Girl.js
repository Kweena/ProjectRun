function Girl(_game,_x,_y,_color,_speed)
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, _color);
      _self.anchor.setTo(0.5,0.5);

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
      _self.position.x = Math.random() * (1000 - 645) + 645;
      _self.position.y = Math.random() * (350 - 250) + 250 ;
    }
        
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}