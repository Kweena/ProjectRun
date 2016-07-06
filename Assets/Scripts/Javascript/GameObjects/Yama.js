function Yama(_game,_x,_y)
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(96, 96, "Yama");
      _self.animations.add('moveDown', [0,1,2,3]);
      _self.animations.add('moveLeft', [4,5,6,7]);
      _self.animations.add('moveRight', [8,9,10,11]);
      _self.animations.add('moveUp', [12,13,14,15]);

      _self.animations.play('moveRight', 8, true);

    _self.keys =  {};
    _self.keys.up = [Phaser.Keyboard.UP, Phaser.Keyboard.Z, Phaser.Keyboard.W];
    _self.keys.left = [Phaser.Keyboard.LEFT, Phaser.Keyboard.Q, Phaser.Keyboard.A];
    _self.keys.down = [Phaser.Keyboard.DOWN, Phaser.Keyboard.S, Phaser.Keyboard.S];
    _self.keys.right = [Phaser.Keyboard.RIGHT, Phaser.Keyboard.D, Phaser.Keyboard.D];



  /*****************************
            Method
  ******************************/

  // Phaser update method (called automatically)
  _self.update = function()
  {   
      if(_game.input.keyboard.isDown(_self.keys.up[0])) 
      {
        _self.position.y -= 1.5;
        _self.animations.play('moveUp',12,true);
      }  
      else if(_game.input.keyboard.isDown(_self.keys.down[0])) 
      {
        _self.position.y += 1.5;
        _self.animations.play('moveDown',0,true);

      }  
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}