Application.LevelTest = function(){};
Application.LevelTest.prototype = {
	create: function()
	{ 
		Application.Game.physics.startSystem(Phaser.Physics.ARCADE);
		console.log('Starting','LevelTest');
		this.background1 = Application.Game.add.sprite(0,-0,'Background');
		this.background2 = Application.Game.add.sprite(this.background1.width,-0,'Background');

		this.Bullets = Application.Game.add.physicsGroup();
		var s = new Shuriken(this.Bullets);

		Application.Player = this.Player = new Yama(Application.Game,225,300,s,s);

		var Red = new Tank(Application.Game,-10,-10);
		var Blue = new Ranger(Application.Game,-10,-10);
		var Green = new Barrel(Application.Game,-10,-10);
		// var Red2 = new Girl(Application.Game,-10,-10,"Mob_Spike",Math.random() * (2 - 0.5) + 0.5);
		// var Blue2 = new Girl(Application.Game,-10,-10,"Mob_Noodle",Math.random() * (2 - 0.5) + 0.5);
		// var Green2 = new Girl(Application.Game,-10,-10,"Mob_Barrel",0);

		this.Ennemies = Application.Game.add.physicsGroup();
		this.Ennemies.add(Red);
		this.Ennemies.add(Blue);
		this.Ennemies.add(Green);
		// this.Ennemies.add(Red2);
		// this.Ennemies.add(Blue2);
		// this.Ennemies.add(Green2);
	

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

		Application.Game.physics.arcade.collide(this.Player, this.Ennemies, this.collisionPlayerEnnemies);
		Application.Game.physics.arcade.collide(this.Player, this.MoonParticules, this.getParticules);
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
	},
	getParticules : function (Player, MoonParticule) 
	{
		Player.GetParticules();
		MoonParticule.Restart();
	}

}
