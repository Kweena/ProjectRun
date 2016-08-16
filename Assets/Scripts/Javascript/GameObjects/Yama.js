function Yama(_game,_x,_y)
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, "Yama");
      _self.animations.add('moveDown', [0,1,2,3]);
      _self.animations.add('moveLeft', [4,5,6,7]);
      _self.animations.add('moveRight', [8,9,10,11]);
      _self.animations.add('moveUp', [12,13,14,15]);

      _self.animations.play('moveRight', 8, true);

    _self.Tentacle = _game.add.sprite(_self.x + 0.5 * _self.width, _self.y + 0.5 * _self.height, "");
    _self.Tentacle.width = 40;
    _self.Tentacle.height = 20;
    _self.Tentacle.tint = "#FF2626";

    _self.Weapon1 = null;
    _self.Weapon2 = null;

    _game.physics.arcade.enable(_self);
    _game.physics.arcade.enable(_self.Tentacle);

    _self.keys =  {};
    _self.keys.up = Phaser.Keyboard.UP;
    _self.keys.down = Phaser.Keyboard.DOWN;
    _self.keys.attack = Phaser.Keyboard.SPACEBAR;
    _self.keys.weapon1 = Phaser.Keyboard.A;
    _self.keys.weapon2 = Phaser.Keyboard.E;

    _self.attackAnimation = false;


  /*****************************
            Method
  ******************************/

  // Phaser update method (called automatically)
  _self.update = function()
  {   
    //Movement
    if(_game.input.keyboard.isDown(_self.keys.up)) 
    {
      _self.MoveDown();
    }  
    else if(_game.input.keyboard.isDown(_self.keys.down)) 
    {
      _self.MoveUp();
    }
    else _self.MoveForward();
    //Attack
    if (!_self.attackAnimation) 
    {
      if (_game.input.keyboard.isDown(_self.keys.attack)) 
      {

        _self.Attack();
      }
      else if (_self.Weapon1 != null && _game.input.keyboard.isDown(_self.keys.weapon1)) 
      {
        _self.UseWeapon1();
      }
      else if (_self.Weapon2 != null && _game.input.keyboard.isDown(_self.keys.weapon2)) 
      {
        _self.UseWeapon2();
      }
    }
    if (Application.debugMode)
    {
        Application.Game.debug.body(_self);
        Application.Game.debug.body(_self.Tentacle);
    }
  }

  _self.MoveUp = function()
  {   
      _self.position.y += 1.5;
      _self.Tentacle.position.y += 1.5;
      _self.animations.play('moveDown',8,true);
  }
  _self.MoveDown = function()
  {   
      _self.position.y -= 1.5;
      _self.Tentacle.position.y -= 1.5;
      _self.animations.play('moveUp',8,true);
  }
  _self.MoveForward = function()
  {   
    
    _self.animations.play('moveRight', 8, true);
  }
  _self.Attack = function()
  {   
      _self.attackAnimation = true;
      console.log('attack');
      var tween = Application.Game.add.tween(_self.Tentacle).to( {x: _self.Tentacle.x + 50 }, 200, Phaser.Easing.Sinusoidal.In, true);
      tween.yoyo(true);
      tween.onComplete.add(function () {_self.attackAnimation = false;}, this);


  }
  _self.UseWeapon1 = function()
  {   
      console.log('Weapon1');
  }
  _self.UseWeapon2 = function()
  {   
      console.log('Weapon2');
  }

  _self.Hitted = function()
  {   
      console.log('Hit');
  }

  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}