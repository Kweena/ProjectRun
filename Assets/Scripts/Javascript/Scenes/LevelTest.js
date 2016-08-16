Application.LevelTest = function(){};
Application.LevelTest.prototype = {
	create: function()
	{ 
		Application.Game.physics.startSystem(Phaser.Physics.ARCADE);
		console.log('Starting','LevelTest');
		this.city1 = Application.Game.add.sprite(0,-0,'City1');
		this.city2 = Application.Game.add.sprite(1000,-0,'City2');

		this.Player = new Yama(Application.Game,150,300);
		var Red = new Girl(Application.Game,500,300,"Red",Math.random() * (2 - 0.5) + 0.5);
		var Blue = new Girl(Application.Game,800,250,"Blue",Math.random() * (2 - 0.5) + 0.5);
		var Green = new Girl(Application.Game,1200,350,"Green",Math.random() * (2 - 0.5) + 0.5);
		this.Ennemies = [Red, Blue, Green];

	},

	update : function()
	{
		this.city1.position.x -= 1.5;	
		this.city2.position.x -= 1.5;	
		if (this.city1.position.x + this.city1.width <0) 
		{
			this.city1.position.x = 1000;
		}
		if (this.city2.position.x + this.city2.width < 0) 
		{
			this.city2.position.x = 1000;
		}

		// TODO GROUP COLLISION
		for (var i = 0; i < this.Ennemies.length; i++) 
		{
			Application.Game.physics.arcade.collide(this.Player, this.Ennemies[i], this.collisionPlayerEnnemies);
			Application.Game.physics.arcade.collide(this.Player.Tentacle, this.Ennemies[i], this.killEnnemies);
		}

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
