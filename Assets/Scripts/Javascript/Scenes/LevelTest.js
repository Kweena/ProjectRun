Application.LevelTest = function(){};
Application.LevelTest.prototype = {
	create: function()
	{ 
		Application.Game.physics.startSystem(Phaser.Physics.ARCADE);
		console.log('Starting','LevelTest');
		this.background1 = Application.Game.add.sprite(0,-0,'Background');
		this.background2 = Application.Game.add.sprite(this.background1.width,-0,'Background');
		

		/*********************************** 
	    			HUD Start
	    ************************************/
	    
		this.blackUI = Application.Game.add.sprite(0,0,'BlackUI');
		this.blackUI.scale.setTo(16,3);
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

		this.maxParticules = 30;

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

		this.Bullets = Application.Game.add.physicsGroup();
		var s = new Shuriken(this.Bullets);

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
		

	},

	update : function()
	{
		this.background1.position.x -= this.Player.Speed;	
		this.background2.position.x -= this.Player.Speed;	
		if (this.background1.position.x < -this.background1.width) 
		{
			this.background1.position.x = this.background2.position.x + this.background2.width;
		}
		if (this.background2.position.x < -this.background2.width) 
		{
			this.background2.position.x = this.background1.position.x + this.background1.width;
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
		if (Player.Life == 0) {Application.Game.state.start("TitleScene");}
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
		this.cropRect.width = 3 + (((this.particulesBarContainer.width / this.particulesBarContainer.scale.x - 6)/this.maxParticules) * Player.MoonParticules);
		this.particulesBar.updateCrop();
		MoonParticule.Restart();
	}

}
