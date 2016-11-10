Application.LevelTest = function(){};
Application.LevelTest.prototype = {
	create: function()
	{ 
		Application.Game.physics.startSystem(Phaser.Physics.ARCADE);
		console.log('Starting','LevelTest');
		this.background1 = Application.Game.add.sprite(0,-0,'Background');
		this.background2 = Application.Game.add.sprite(this.background1.width,-0,'Background');

		//futur HUD sans element graphique ( très très sommaire, j'doit vraiment revoir nos cours etc -_- )
		var Light = 0;
		this.nbrLight = this.game.add.text(this.game.world.centerX,this.game.world.centerY + 450, "Light: " + Light,{ font: "40px Merriweather", fill: "#fff", align: "left" });

		var Life = 5;
		this.nbrLife = this.game.add.text(this.game.world.centerX - 900,this.game.world.centerY - 500, "Life: " + Life,{ font: "40px Merriweather", fill: "#fff",align:"left"});

		var Weapon = 3;
		this.nbrWeapon = this.game.add.text(this.game.world.centerX - 700,this.game.world.centerY - 500, "☼: "  + Life,{ font: "40px Merriweather", fill: "#fff",align:"left"});

		var Progression;
		this.Progression = this.game.add.text(this.game.world.centerX)


		this.Bullets = Application.Game.add.physicsGroup();
		var s = new Shuriken(this.Bullets);

		this.Player = new Yama(Application.Game,150,300,s,s);
		var Red = new Girl(Application.Game,-10,-10,"Red",Math.random() * (2 - 0.5) + 0.5);
		var Blue = new Girl(Application.Game,-10,-10,"Blue",Math.random() * (2 - 0.5) + 0.5);
		var Green = new Girl(Application.Game,-10,-10,"Green",Math.random() * (2 - 0.5) + 0.5);

		this.Ennemies = Application.Game.add.physicsGroup();
		this.Ennemies.add(Red);
		this.Ennemies.add(Blue);
		this.Ennemies.add(Green);
	

		this.PMoon = new ParticuleMoon(Application.Game,500,250,Math.random() * (2 - 0.5) + 0.5)

	},

	update : function()
	{
		this.background1.position.x -= 1.5;	
		this.background2.position.x -= 1.5;	
		if (this.background1.position.x < -this.background1.width) 
		{
			this.background1.position.x = this.background2.position.x + this.background2.width;
		}
		if (this.background2.position.x < -this.background2.width) 
		{
			this.background2.position.x = this.background1.position.x + this.background1.width;
		}

		Application.Game.physics.arcade.collide(this.Player, this.Ennemies, this.collisionPlayerEnnemies);
		Application.Game.physics.arcade.collide(this.Bullets, this.Ennemies, this.collisionBulletEnnemies, null, this);
		Application.Game.physics.arcade.collide(this.Player.Tentacle, this.Ennemies, this.killEnnemies);

	},

	render : function()
	{

	},

	// CALLBACKS
	collisionPlayerEnnemies : function (Player, Ennemy) 
	{
		Player.Hitted();
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
	}

}
