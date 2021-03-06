Application.LevelTest = function(){};
Application.LevelTest.prototype = {
	create: function()
	{ 
		Application.Game.stage.smoothed = false;

		Application.Game.physics.startSystem(Phaser.Physics.ARCADE);
		console.log('Starting','LevelTest');
		var cr = new Phaser.Rectangle(0, 0, 0, 49);

		this.background1 = Application.Game.add.sprite(0,-0,'Background');
		this.background1.smoothed = false;
		this.background1.scale.setTo(2.1);
		this.background2 = Application.Game.add.sprite( this.background1.width ,-0,'Background');
		this.background2.smoothed = false;
		this.background2.scale.setTo(2.1);
		this.background3 = Application.Game.add.sprite( 2*(this.background1.width) ,-0,'Background');
		this.background3.smoothed = false;
		this.background3.scale.setTo(2.1);

		this.ground1Elem = Application.Game.add.sprite( 2000 , Application.Game.height - 95,'Ground1Elem');
		this.ground1Elem.smoothed = false;
		this.ground1Elem.anchor.y = 1
		this.ground1Elem.frame = 0;
		this.ground1Elem.scale.setTo(2.1);

		this.ground1 = Application.Game.add.sprite( 0 , Application.Game.height - 63,'Ground1');
		this.ground1.smoothed = false;
		this.ground1.anchor.y = 1
		this.ground1.frame = 3;
		this.ground1.scale.setTo(2.1);

		this.ground2 = Application.Game.add.sprite( this.ground1.width , Application.Game.height - 63,'Ground1');
		this.ground2.smoothed = false;
		this.ground2.anchor.y = 1
		this.ground2.frame = 4;
		this.ground2.scale.setTo(2.1);

		this.ground3 = Application.Game.add.sprite( 2*this.ground1.width , Application.Game.height - 63,'Ground1');
		this.ground3.smoothed = false;
		this.ground3.anchor.y = 1
		this.ground3.frame = 5;
		this.ground3.scale.setTo(2.1);

		this.ground4 = Application.Game.add.sprite( 2*this.ground1.width , Application.Game.height - 63,'Ground1');
		this.ground4.smoothed = false;
		this.ground4.anchor.y = 1
		this.ground4.frame = 6;
		this.ground4.scale.setTo(2.1);

		this.ground5 = Application.Game.add.sprite( 2*this.ground1.width , Application.Game.height - 63,'Ground1');
		this.ground5.smoothed = false;
		this.ground5.anchor.y = 1
		this.ground5.frame = 7;
		this.ground5.scale.setTo(2.1);

		


		this.Bullets = Application.Game.add.physicsGroup();
		var s = new Shuriken(this.Bullets);

		this.maxParticules = 30;

		Application.Player = this.Player = new Yama(Application.Game,225,300,s,s);

		this.Ennemies = Application.Game.add.physicsGroup();

		var Red = new Tank(Application.Game,-10,-10);
		var Blue = new Ranger(Application.Game,-10,-10,this.Ennemies);
		var Green = new Barrel(Application.Game,-10,-10);
		var Red2 = new Tank(Application.Game,-10,-10);
		var Blue2 = new Ranger(Application.Game,-10,-10,this.Ennemies);
		var Green2 = new Barrel(Application.Game,-10,-10);

		
		this.Ennemies.add(Red);
		this.Ennemies.add(Blue);
		this.Ennemies.add(Green);
		this.Ennemies.add(Red2);
		this.Ennemies.add(Blue2);
		this.Ennemies.add(Green2);
	

		this.MoonParticules = Application.Game.add.physicsGroup();
		var PMoon = new ParticuleMoon(Application.Game,-10,-10,Math.random() * (2 - 0.5) + 0.5);
		this.MoonParticules.add(PMoon);
		PMoon = new ParticuleMoon(Application.Game,-10,-10,Math.random() * (2 - 0.5) + 0.5);
		this.MoonParticules.add(PMoon);
		PMoon = new ParticuleMoon(Application.Game,-10,-10,Math.random() * (2 - 0.5) + 0.5);
		this.MoonParticules.add(PMoon);
		PMoon = new ParticuleMoon(Application.Game,-10,-10,Math.random() * (2 - 0.5) + 0.5);
		this.MoonParticules.add(PMoon);
		PMoon = new ParticuleMoon(Application.Game,-10,-10,Math.random() * (2 - 0.5) + 0.5);
		this.MoonParticules.add(PMoon);

		/*********************************** 
	    			Effects
	    ************************************/

		this.Effect1 = Application.Game.add.sprite(0,0,'dark_corner');
		this.Effect1.width = 1920;
		this.Effect1.height = 1080;

		this.Effect2 = Application.Game.add.sprite(0,0,'darkness');
		this.Effect2.width = 1920;
		this.Effect2.height = 1080;

		/*********************************** 
	    			HUD Start
	    ************************************/
	    
		this.blackUI1 = Application.Game.add.sprite(0,0,'BlackUI');
		this.blackUI1.scale.setTo(3,3);
		this.blackUI2 = Application.Game.add.graphics(0, 0);

		// up black rectangle
		this.blackUI2.beginFill(0x000000);
	    this.blackUI2.moveTo(0, 0);  
	    this.blackUI2.lineTo(Application.Game.width, 0); 
	    this.blackUI2.lineTo(Application.Game.width, 63);  
	    this.blackUI2.lineTo(0, 63);
	    this.blackUI2.lineTo(0, 0);
	    this.blackUI2.endFill();
	    // down black rectangle
		this.blackUI2.beginFill(0x000000);
	    this.blackUI2.moveTo(0, Application.Game.height-63);  
	    this.blackUI2.lineTo(Application.Game.width, Application.Game.height-63); 
	    this.blackUI2.lineTo(Application.Game.width, Application.Game.height);  
	    this.blackUI2.lineTo(0, Application.Game.height);
	    this.blackUI2.lineTo(0, Application.Game.height-63);
	    this.blackUI2.endFill();

	    this.blackUI3 = Application.Game.add.sprite(0,Application.Game.height,'BlackUI');
		this.blackUI3.scale.setTo(3,-3);

		this.blackUI4 = Application.Game.add.sprite(Application.Game.width,Application.Game.height,'BlackUI');
		this.blackUI4.scale.setTo(-3,-3);

		this.blackUI5 = Application.Game.add.sprite(Application.Game.width,0,'BlackUI');
		this.blackUI5.scale.setTo(-3,3);


		//futur HUD sans element graphique ( très très sommaire, j'doit vraiment revoir nos cours etc -_- )
		//var Light = 0;
		//this.nbrLight = this.game.add.text(this.game.world.centerX,this.game.world.centerY + 450, "Light: " + Light,{ font: "40px Merriweather", fill: "#fff", align: "left" });

		//var Life = 5;
		//this.nbrLife = this.game.add.text(this.game.world.centerX - 900,this.game.world.centerY - 500, "Life: " + Life,{ font: "40px Merriweather", fill: "#fff",align:"left"});
		this.life = [];
		this.life[0] = Application.Game.add.sprite(this.game.world.centerX - 940, this.game.world.centerY - 500, 'Life');
		this.life[0].scale.setTo(1.5,1.5);
		this.life[1] = Application.Game.add.sprite(this.game.world.centerX - 920, this.game.world.centerY - 500, 'Life');
		this.life[1].scale.setTo(1.5,1.5);
		this.life[2] = Application.Game.add.sprite(this.game.world.centerX - 900, this.game.world.centerY - 500, 'Life');
		this.life[2].scale.setTo(1.5,1.5);
		this.life[3] = Application.Game.add.sprite(this.game.world.centerX - 880, this.game.world.centerY - 500, 'Life');
		this.life[3].scale.setTo(1.5,1.5);
		this.life[4] = Application.Game.add.sprite(this.game.world.centerX - 860, this.game.world.centerY - 500, 'Life');
		this.life[4].scale.setTo(1.5,1.5);
		this.life[5] = Application.Game.add.sprite(this.game.world.centerX - 840, this.game.world.centerY - 500, 'Life');
		this.life[5].scale.setTo(1.5,1.5);
		//this.life.scale.setTo(32,32);

		this.stage = Application.Game.add.sprite(this.game.world.centerX + 800, this.game.world.centerY - 500, 'Stage');
		
		this.nbrWeapon = this.game.add.text(this.game.world.centerX - 750,this.game.world.centerY - 500, "∞",{ font: "40px Merriweather", fill: "#fff",align:"left"});
		this.weapon = Application.Game.add.sprite(this.world.centerX - 810, this.game.world.centerY - 490,'Weapon');

		this.weapon.scale.setTo(1.8,1.8);


		// Particules Bar

		this.particulesBar = Application.Game.add.sprite(-200, -200,'Bar');
		this.particulesBar.scale.setTo(3,3);

		this.cropRect = new Phaser.Rectangle(0, 0, 0, this.particulesBar.height);

		var posX = Application.Game.width * 0.5 - this.particulesBar.width * 0.5 ;
		var posY = Application.Game.height - 50;

		this.particulesBar.crop(this.cropRect);
		this.particulesBar.position.x = posX;
		this.particulesBar.position.y = posY;

		this.particulesBarContainer = Application.Game.add.sprite(posX, posY,'BarContainer');
		this.particulesBarContainer.scale.setTo(3,3);

		/*********************************** 
	    			HUD End
	    ************************************/
		

	},

	update : function()
	{
		// background Move
		this.background1.position.x -= this.Player.Speed;	
		this.background2.position.x -= this.Player.Speed;
		this.background3.position.x -= this.Player.Speed;	
		if (this.background1.position.x < -this.background1.width) 
		{
			this.background1.position.x = this.background3.position.x + this.background1.width;
		}
		if (this.background2.position.x < -this.background2.width) 
		{
			this.background2.position.x = this.background1.position.x + this.background1.width;
		}
		if (this.background3.position.x < -this.background3.width) 
		{
			this.background3.position.x = this.background2.position.x + this.background1.width;
		}

		//Ground Move
		this.ground1.position.x -= this.Player.Speed;	
		this.ground2.position.x -= this.Player.Speed;
		this.ground3.position.x -= this.Player.Speed;
		this.ground4.position.x -= this.Player.Speed;
		this.ground5.position.x -= this.Player.Speed;	
		if (this.ground1.position.x < -this.ground1.width) 
		{
			this.ground1.position.x = this.ground5.position.x + this.ground1.width;
		}
		if (this.ground2.position.x < -this.ground2.width) 
		{
			this.ground2.position.x = this.ground1.position.x + this.ground1.width;
		}
		if (this.ground3.position.x < -this.ground3.width) 
		{
			this.ground3.position.x = this.ground2.position.x + this.ground1.width;
		}
		if (this.ground4.position.x < -this.ground4.width) 
		{
			this.ground4.position.x = this.ground3.position.x + this.ground1.width;
		}
		if (this.ground5.position.x < -this.ground5.width) 
		{
			this.ground5.position.x = this.ground4.position.x + this.ground1.width;
		}

		this.ground1Elem.position.x -= this.Player.Speed;
		if (this.ground1Elem.position.x < -this.ground1Elem.width) 
		{
			this.ground1Elem.position.x = Application.Game.width + 300 + Math.random()* 500;
			this.ground1Elem.frame = Math.floor(Math.random()*4);
		}

		Application.Game.physics.arcade.collide(this.Player, this.Ennemies, this.collisionPlayerEnnemies, null, this);
		Application.Game.physics.arcade.collide(this.Player, this.MoonParticules, this.getParticules, null, this);
		Application.Game.physics.arcade.collide(this.Bullets, this.Ennemies, this.collisionBulletEnnemies, null, this);
		Application.Game.physics.arcade.collide(this.Player.Tentacle, this.Ennemies, this.killEnnemies, null, this);

	},

	render : function()
	{

	},

	// CALLBACKS
	collisionPlayerEnnemies : function (Player, Ennemy) 
	{
		Player.Hitted();
		this.life[Player.Life].loadTexture('NoLife');
		if (Player.Life == 0) 
		{
			Application.Game.world.removeAll();
			Application.Game.state.start("GameOverScene");
		}
		Ennemy.Restart();
	},
	collisionBulletEnnemies : function (Bullet, Ennemy) 
	{
		this.Bullets.remove(Bullet);
		Ennemy.Restart();
	},
	killEnnemies : function (Tentacle, Ennemy) 
	{
		// Score increment ?
		Ennemy.Restart();
	},
	getParticules : function (Player, MoonParticule) 
	{
		Player.GetParticules();
		this.Effect1.alpha = (this.maxParticules - Player.MoonParticules) / this.maxParticules;
		this.Effect2.alpha = (this.maxParticules - Player.MoonParticules) / this.maxParticules;
		this.cropRect.width = 3 + (((this.particulesBarContainer.width / this.particulesBarContainer.scale.x - 6)/this.maxParticules) * Player.MoonParticules);
		this.particulesBar.updateCrop();
		if (Player.MoonParticules == this.maxParticules) 
		{
			Application.Game.world.removeAll();
			Application.Game.state.start("VictoryScene");
		}
		MoonParticule.Restart();
	}

}
