function Shuriken()
{
  

  /*****************************
           Properties
  ******************************/

  // create a Phaser Sprite Object
  var _self = Application.Game.add.sprite(0, 0, "");
      _self.anchor.setTo(0.5,0.5);

  _self.speed = 0;

  _self.btnAsset = "ShurikenBtn";


  /*****************************
            Method
  ******************************/

  _self.Use = function (_Player) 
  {
     console.log('Shuriken')
  }



  /*****************************
              Return
  ******************************/

  // return the GameObect (Last thing to do in the Object Function)
  return _self;
  
}