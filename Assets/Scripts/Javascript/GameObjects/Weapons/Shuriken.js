function Shuriken(_bulletGroup)
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = Application.Game.add.sprite(0, 0, "");
      _self.anchor.setTo(0.5,0.5);

  _self.speed = 5;
  _self.canShoot = true;

  _self.btnAsset = "ShurikenBtn";


  /*****************************
            Method
  ******************************/

  _self.Use = function (_Player) 
  {
    //console.log('Shuriken')
    if (_self.canShoot) 
    {
      _self.canShoot = false;
      Application.Game.time.events.add(Phaser.Timer.SECOND * 1, function () {_self.canShoot = true;}, this);
      var bullet = Application.Game.add.sprite(_Player.x, _Player.y, "Shuriken");
      bullet.anchor.setTo(0.5);
      bullet.scale.setTo(0.4);
      Application.Game.physics.arcade.enable(bullet);
      bullet.update = function () 
      {
        //console.log('alive')
        bullet.x += _self.speed + _Player.Speed;
        bullet.angle += 10;
        if (Application.debugMode)
        {
            Application.Game.debug.body(bullet);
        }
        if (bullet.position.x > Application.Game.world.width + bullet.width) 
        {
          bullet.destroy();
        }
      }
      _bulletGroup.add(bullet);
    }
     
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}