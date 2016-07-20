function Girl(_game,_x,_y,_color)
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, _color);
      _self.anchor.setTo(0.5,0.5);

  var speed = 0.5;


  /*****************************
            Method
  ******************************/

  // Phaser update method (called automatically)
  _self.update = function()
  {
    _self.position.x -= speed;
        
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}