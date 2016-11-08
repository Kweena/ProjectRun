Application.Options = function(){};
Application.Options.prototype = {
	create: function()
	{ 
		console.log(this);

		this.tween = null;

		this.background = Application.Game.add.sprite(0,0,'Title');
		this.background.width = Application.Game.world.width;
		this.background.height = Application.Game.world.height;

	 	this.up = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 90, "Up  :  " + Application.Keys.up.char, { font: "20px Merriweather", fill: "#fff", align: "left" });
		this.up.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.up.anchor.x = 0.5;
		this.up.inputEnabled = true;
		this.up.events.onInputOver.add(ChangeUp,this);
		
		this.down = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 120, "Down  :  " + Application.Keys.down.char, { font: "20px Merriweather", fill: "#fff", align: "left" });
		this.down.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.down.anchor.x = 0.5;
		this.down.inputEnabled = true;
		this.down.events.onInputOver.add(ChangeDown,this);

		this.attack = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 150, "Attack  :  " + Application.Keys.attack.char, { font: "20px Merriweather", fill: "#fff", align: "left" });
		this.attack.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.attack.anchor.x = 0.5;
		this.attack.inputEnabled = true;
		this.attack.events.onInputOver.add(ChangeAttack,this);

		this.weapon1 = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 180, "Weapon 1  :  " + Application.Keys.weapon1.char, { font: "20px Merriweather", fill: "#fff", align: "left" });
		this.weapon1.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.weapon1.anchor.x = 0.5;
		this.weapon1.inputEnabled = true;
		this.weapon1.events.onInputOver.add(ChangeWeapon1,this);

		this.weapon2 = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 210, "Weapon 2  :  " + Application.Keys.weapon2.char, { font: "20px Merriweather", fill: "#fff", align: "left" });
		this.weapon2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.weapon2.anchor.x = 0.5;
		this.weapon2.inputEnabled = true;
		this.weapon2.events.onInputOver.add(ChangeWeapon2,this);

		this.attack = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 280, "BACK TO MENU", { font: "35px Merriweather", fill: "#fff", align: "left" });
		this.attack.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.attack.anchor.x = 0.5;
		this.attack.inputEnabled = true;
		this.attack.events.onInputOver.add(GoToMenu,this);
		
	},

	update : function()
	{
		
	},

	render : function()
	{

	}

}

function GoToMenu() 
{
	//return to menu
	this.state.start("TitleScene");
}

var _BlinkingColor = "#1FFA5D";

function ChangeUp ()
{
	Application.Game.input.keyboard.addCallbacks(this, ChangeUpKey);

	this.up.fill = _BlinkingColor;

	//  Create our tween. This will fade the sprite to alpha 0 over the duration of 0.5 seconds
    this.tween = Application.Game.add.tween(this.up).to( { alpha: 0 }, 500, "Linear", true, 0, -1);
    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 100 tells it to wait for 0.1 seconds before starting the fade back.
    this.tween.yoyo(true, 100);
}
function ChangeUpKey(e) 
{
	this.up.text = "Up  :  " + e.key.toUpperCase();
	Application.Keys.up.keyCode = e.keyCode;
	Application.Keys.up.char = e.key.toUpperCase();; 

	Application.Game.input.keyboard.addCallbacks(this, function () {});
	this.tween.stop();
	this.up.alpha = 1;
	this.up.fill = "#fff";

	// Save Key to localStorage
	localStorage.setItem('Keys',JSON.stringify(Application.Keys));
}

function ChangeDown ()
{
	Application.Game.input.keyboard.addCallbacks(this, ChangeDownKey);

	this.down.fill = _BlinkingColor;

	//  Create our tween. This will fade the sprite to alpha 0 over the duration of 0.5 seconds
    this.tween = Application.Game.add.tween(this.down).to( { alpha: 0 }, 500, "Linear", true, 0, -1);
    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 100 tells it to wait for 0.1 seconds before starting the fade back.
    this.tween.yoyo(true, 100);
}
function ChangeDownKey(e) 
{
	this.down.text = "Down  :  " + e.key.toUpperCase();
	Application.Keys.down.keyCode = e.keyCode;
	Application.Keys.down.char = e.key.toUpperCase();; 

	Application.Game.input.keyboard.addCallbacks(this, function () {});
	this.tween.stop();
	this.down.alpha = 1;
	this.down.fill = "#fff";

	// Save Key to localStorage
	localStorage.setItem('Keys',JSON.stringify(Application.Keys));
}

function ChangeAttack ()
{
	Application.Game.input.keyboard.addCallbacks(this, ChangeAttackKey);

	this.attack.fill = _BlinkingColor;

	//  Create our tween. This will fade the sprite to alpha 0 over the duration of 0.5 seconds
    this.tween = Application.Game.add.tween(this.attack).to( { alpha: 0 }, 500, "Linear", true, 0, -1);
    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 100 tells it to wait for 0.1 seconds before starting the fade back.
    this.tween.yoyo(true, 100);
}
function ChangeAttackKey(e) 
{
	this.attack.text = "Attack  :  " + e.key.toUpperCase();
	Application.Keys.attack.keyCode = e.keyCode;
	Application.Keys.attack.char = e.key.toUpperCase();; 

	Application.Game.input.keyboard.addCallbacks(this, function () {});
	this.tween.stop();
	this.attack.alpha = 1;
	this.attack.fill = "#fff";

	// Save Key to localStorage
	localStorage.setItem('Keys',JSON.stringify(Application.Keys));
}

function ChangeWeapon1 ()
{
	Application.Game.input.keyboard.addCallbacks(this, ChangeWeapon1Key);

	this.weapon1.fill = _BlinkingColor;

	//  Create our tween. This will fade the sprite to alpha 0 over the duration of 0.5 seconds
    this.tween = Application.Game.add.tween(this.weapon1).to( { alpha: 0 }, 500, "Linear", true, 0, -1);
    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 100 tells it to wait for 0.1 seconds before starting the fade back.
    this.tween.yoyo(true, 100);
}
function ChangeWeapon1Key(e) 
{
	this.weapon1.text = "Weapon1  :  " + e.key.toUpperCase();
	Application.Keys.weapon1.keyCode = e.keyCode;
	Application.Keys.weapon1.char = e.key.toUpperCase();; 

	Application.Game.input.keyboard.addCallbacks(this, function () {});
	this.tween.stop();
	this.weapon1.alpha = 1;
	this.weapon1.fill = "#fff";

	// Save Key to localStorage
	localStorage.setItem('Keys',JSON.stringify(Application.Keys));
}

function ChangeWeapon2 ()
{
	Application.Game.input.keyboard.addCallbacks(this, ChangeWeapon2Key);

	this.weapon2.fill = _BlinkingColor;

	//  Create our tween. This will fade the sprite to alpha 0 over the duration of 0.5 seconds
    this.tween = Application.Game.add.tween(this.weapon2).to( { alpha: 0 }, 500, "Linear", true, 0, -1);
    //  And this tells it to yoyo, i.e. fade back to zero again before repeating.
    //  The 100 tells it to wait for 0.1 seconds before starting the fade back.
    this.tween.yoyo(true, 100);
}
function ChangeWeapon2Key(e) 
{
	this.weapon2.text = "Weapon2  :  " + e.key.toUpperCase();
	Application.Keys.weapon2.keyCode = e.keyCode;
	Application.Keys.weapon2.char = e.key.toUpperCase();; 

	Application.Game.input.keyboard.addCallbacks(this, function () {});
	this.tween.stop();
	this.weapon2.alpha = 1;
	this.weapon2.fill = "#fff";

	// Save Key to localStorage
	localStorage.setItem('Keys',JSON.stringify(Application.Keys));
}