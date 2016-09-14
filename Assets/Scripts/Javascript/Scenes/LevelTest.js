Application.LevelTest = function(){};
Application.LevelTest.prototype = {
	create: function()
	{ 
		Application.Game.physics.startSystem(Phaser.Physics.ARCADE);
		console.log('Starting','LevelTest');
		this.background1 = Application.Game.add.sprite(0,-0,'Background');
		this.background2 = Application.Game.add.sprite(this.background1.width,-0,'Background');

		var s = new Shuriken();

		this.Player = new Yama(Application.Game,150,300,s,s);
		var Red = new Girl(Application.Game,500,300,"Red",Math.random() * (2 - 0.5) + 0.5);
		var Blue = new Girl(Application.Game,800,250,"Blue",Math.random() * (2 - 0.5) + 0.5);
		var Green = new Girl(Application.Game,1200,350,"Green",Math.random() * (2 - 0.5) + 0.5);

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
	killEnnemies : function (Tentacle, Ennemy) 
	{
		// Score increment ?
		Ennemy.Restart();
	}

}
