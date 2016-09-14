function Shuriken()
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = Application.Game.add.sprite(0, 0, "");
      _self.anchor.setTo(0.5,0.5);

  _self.speed = 0;
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
      Application.Game.time.events.add(Phaser.Timer.SECOND * 0.5, function () {_self.canShoot = true;}, this);
      var bullet = Application.Game.add.sprite(_Player.x, _Player.y, "Shuriken");
      bullet.anchor.setTo(0.5);
      bullet.scale.setTo(0.5);
      Application.Game.physics.arcade.enable(bullet);
      bullet.checkWorldBounds = true;
      bullet.outOfBoundsKill = true;
      bullet.update = function () 
      {
        this.x += 25;
        this.angle += 25;
      }
    }
     
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}