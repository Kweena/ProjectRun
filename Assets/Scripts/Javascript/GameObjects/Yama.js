function Yama(_game,_x,_y, _weapon1, _weapon2)
{
  /*****************************
           Properties
  ******************************/

  

  // create a Phaser Sprite Object
  var _self = _game.add.sprite(_x, _y, "Yama");

  _self.MoonParticules = 0;
  _self.Speed = 6;
  _self.SpeedIncrease = 0.2;
  _self.Invulnerability = false;
  
  _self.VerticalMoveSpeed = 4;

  _self.Life = 6;

  _self.Weapon1 = _weapon1 || null;
  _self.Weapon2 = _weapon2 || null;

  _self.animations.add('moveDown', [0]);
  _self.animations.add('moveLeft', [0]);
  _self.animations.add('moveRight', [0]);
  _self.animations.add('moveUp', [0]);
  _self.animations.add('attack', [5,6,7,8,9,0]);
  _self.animations.play('moveRight', 8, true);
  _self.scale.setTo(2);

  _self.Tentacle = _game.add.sprite(_self.x, _self.y + 20, "");
  _self.Tentacle.width = 60;
  _self.Tentacle.height = 100;
  _self.Tentacle.tint = "#FF2626";

  _game.physics.arcade.enable(_self);
  _self.anchor.set(0.5);
  // resize collider
  _self.body.setSize(80, 80, 48, 48);
  
  
  _game.physics.arcade.enable(_self.Tentacle);
  _self.Tentacle.anchor.set(0.5);

  _self.body.collideWorldBounds = true;

  _self.keys =  {};
  _self.keys.up = Application.Keys.up.keyCode;
  _self.keys.down = Application.Keys.down.keyCode;
  _self.keys.attack = Application.Keys.attack.keyCode;
  _self.keys.weapon1 = Application.Keys.weapon1.keyCode;
  _self.keys.weapon2 = Application.Keys.weapon2.keyCode;

  _self.touchInput = {};
  _self.touchInput.up = false;
  _self.touchInput.down = false;
  _self.touchInput.attack = false;
  _self.touchInput.weapon1 = false;
  _self.touchInput.weapon2 = false;

  _self.attackAnimation = false;

  if (Application.touchEnabled) 
  {
    var buttonAsset = ["","",""];
    
    if (Application.debugTouch) 
    {
      buttonAsset = ["DebugUp","DebugDown","DebugAttack"];
    }

    _self.buttonUp = Application.Game.add.button(0, 0, buttonAsset[0], null, this);
    _self.buttonUp.width = Application.Game.world.width * 0.5;
    _self.buttonUp.height = _self.y - _self.height * 0.5;
    _self.buttonUp.events.onInputOver.add(function(){_self.touchInput.up = true;});
    _self.buttonUp.events.onInputOut.add(function(){_self.touchInput.up = false; _self.touchInput.down = false;});
    _self.buttonUp.events.onInputDown.add(function(){_self.touchInput.up = true;});
    _self.buttonUp.events.onInputUp.add(function(){_self.touchInput.up = false; _self.touchInput.down = false;});

    _self.buttonDown = Application.Game.add.button(0, _self.y + _self.height * 0.5 , buttonAsset[1], null, this);
    _self.buttonDown.width = Application.Game.world.width * 0.5;
    _self.buttonDown.height = Application.Game.world.height - (_self.y + _self.height * 0.5);
    _self.buttonDown.events.onInputOver.add(function(){_self.touchInput.down = true;});
    _self.buttonDown.events.onInputOut.add(function(){_self.touchInput.up = false; _self.touchInput.down = false;});
    _self.buttonDown.events.onInputDown.add(function(){_self.touchInput.down = true;});
    _self.buttonDown.events.onInputUp.add(function(){_self.touchInput.up = false; _self.touchInput.down = false;});

    _self.buttonAttack = Application.Game.add.button(Application.Game.width * 0.5, 0, buttonAsset[2], null, this);
    _self.buttonAttack.width = Application.Game.world.width * 0.5;
    _self.buttonAttack.height = Application.Game.world.height;
    _self.buttonAttack.events.onInputOver.add(function(){_self.touchInput.attack = true;});
    _self.buttonAttack.events.onInputOut.add(function(){_self.touchInput.attack = false;});
    _self.buttonAttack.events.onInputDown.add(function(){_self.touchInput.attack = true;});
    _self.buttonAttack.events.onInputUp.add(function(){_self.touchInput.attack = false;});

    if (_self.Weapon1 != null) 
    {
      _self.buttonW1 = Application.Game.add.button(Application.Game.world.width * 0.875, Application.Game.world.height * 0.875, _self.Weapon1.btnAsset, null, this, 0, 1, 0, 1);
      _self.buttonW1.anchor.setTo(0.5);
      _self.buttonW1.fixedToCamera = true;
      _self.buttonW1.events.onInputOver.add(function(){_self.touchInput.weapon1 = true;});
      _self.buttonW1.events.onInputOut.add(function(){_self.touchInput.weapon1 = false;});
      _self.buttonW1.events.onInputDown.add(function(){_self.touchInput.weapon1 = true;});
      _self.buttonW1.events.onInputUp.add(function(){_self.touchInput.weapon1 = false;});
    }
    if (_self.Weapon2 != null) 
    {
      _self.buttonW2 = Application.Game.add.button(Application.Game.world.width * 0.625, Application.Game.world.height * 0.875, _self.Weapon2.btnAsset, null, this, 0, 1, 0, 1);
      _self.buttonW2.anchor.setTo(0.5);
      _self.buttonW2.fixedToCamera = true;
      _self.buttonW2.events.onInputOver.add(function(){_self.touchInput.weapon2 = true;});
      _self.buttonW2.events.onInputOut.add(function(){_self.touchInput.weapon2 = false;});
      _self.buttonW2.events.onInputDown.add(function(){_self.touchInput.weapon2 = true;});
      _self.buttonW2.events.onInputUp.add(function(){_self.touchInput.weapon2 = false;});
    }
  }
    


  /*****************************
            Method
  ******************************/

  // Phaser update method (called automatically)
  _self.update = function()
  {
    
    //Movement
    if(_game.input.keyboard.isDown(_self.keys.up) || _self.touchInput.up) 
    {
      _self.MoveUp();
    }  
    else if(_game.input.keyboard.isDown(_self.keys.down) || _self.touchInput.down) 
    {
      _self.MoveDown();
    }
    else _self.MoveForward();
    //Attack
    if (!_self.attackAnimation) 
    {
      if (_game.input.keyboard.isDown(_self.keys.attack) || _self.touchInput.attack) 
      {
        _self.Attack();
      }
      else if (_self.Weapon1 != null && (_game.input.keyboard.isDown(_self.keys.weapon1) || _self.touchInput.weapon1) ) 
      {
        _self.Weapon1.Use(_self);
      }
      else if (_self.Weapon2 != null && (_game.input.keyboard.isDown(_self.keys.weapon2) || _self.touchInput.weapon2) )  
      {
        _self.Weapon2.Use(_self);
      }
    }
  
    if (Application.touchEnabled) 
    {
      _self.buttonUp.height = _self.y - _self.height * 0.5;
      _self.buttonDown.position.y = _self.y + _self.height * 0.5;
      _self.buttonDown.height = Application.Game.height - (_self.y + _self.height * 0.5);
    }
    
    if (Application.debugMode)
    {
        Application.Game.debug.body(_self);
        Application.Game.debug.body(_self.Tentacle, "rgba(220,15,35,0.3)" );
    }
  }

  _self.MoveDown = function()
  {   
      if ( _self.position.y < Application.Game.height - 140 )
      {
        _self.position.y += _self.VerticalMoveSpeed;
        _self.Tentacle.position.y = _self.position.y + 20;
      }
      
      if (!_self.attackAnimation) 
      {
        _self.animations.play('moveUp',8,true);
      }
  }
  _self.MoveUp = function()
  {   
      if ( _self.position.y > 140 )
      {
        _self.position.y -= _self.VerticalMoveSpeed;
        _self.Tentacle.position.y = _self.position.y + 20;
      }

      if (!_self.attackAnimation) 
      {
        _self.animations.play('moveDown',8,true);
      }
  }
  _self.MoveForward = function()
  {   
    if (!_self.attackAnimation) 
    {
      _self.animations.play('moveRight', 8, true);
    } 
  }
  _self.Attack = function()
  {   
      _self.attackAnimation = true;
      _self.animations.play('attack', 10, false);
      _self.animations.currentAnim.onComplete.add(function () {
        _self.attackAnimation = false;
        _self.animations.play('moveRight', 8, true);
      }, this);
      //console.log('attack');
      var tween = Application.Game.add.tween(_self.Tentacle).to( {x: _self.Tentacle.x + 80 }, 75, Phaser.Easing.Sinusoidal.In, true);
      tween.yoyo(true,150);
  }

  _self.Hitted = function()
  { 
    if (!_self.Invulnerability) 
    {
      _self.Invulnerability = true;
      _self.tint = 0Xf00000;
      _self.InvulnerabilityTween = _game.time.events.repeat(100, 9, function () {
        if (_self.tint == 0Xf00000) {_self.tint = 0Xffffff;}
        else {_self.tint = 0Xf00000;}
      }, this);
      _game.time.events.add(1000, function () {
        _self.tint = 0Xffffff;
        _self.Invulnerability = false;
      }, this);
      //console.log('Hit');
      _self.Life--;
    }
  }
  _self.GetParticules = function()
  {   
      _self.MoonParticules++;
      _self.Speed += _self.SpeedIncrease;
      //console.log(_self.MoonParticules);
  }

  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}