Application.LevelTest = function(){};
Application.LevelTest.prototype = {
	create: function()
	{ 
		console.log('Starting','LevelTest');
		this.city1 = Application.Game.add.sprite(0,-0,'City1');
		this.city2 = Application.Game.add.sprite(1000,-0,'City2');

		var Player = new Yama(Application.Game,150,300);
		var Red = new Girl(Application.Game,500,300,"Red");
		var Blue = new Girl(Application.Game,800,250,"Blue");
		var Green = new Girl(Application.Game,1200,350,"Green");

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
	},

	render : function()
	{

	}

}
