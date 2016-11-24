Application.TitleScene = function(){};
Application.TitleScene.prototype = {
	create: function()
	{ 
		console.log('Starting','TitleScene');

		this.background = Application.Game.add.sprite(0,0,'Title');
		this.background.width = Application.Game.world.width;
		this.background.height = Application.Game.world.height;

	 	this.start = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 90, "Start", { font: "20px Merriweather", fill: "#fff", align: "left" });
		this.start.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.start.anchor.x = 0.5;
		this.start.inputEnabled = true;
		this.start.events.onInputOver.add(StartGame,this);
		

		this.load = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 120, "Load", { font: "20px Merriweather", fill: "#808DC1", align: "left" });
		this.load.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.load.anchor.x = 0.5;

		this.option = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 150, "Option", { font: "20px Merriweather", fill: "#fff", align: "left" });
		this.option.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.option.anchor.x = 0.5;
		this.option.inputEnabled = true;
		this.option.events.onInputOver.add(StartOptions,this);

		this.credit = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 180, "Credit", { font: "20px Merriweather", fill: "#fff", align: "left" });
		this.credit.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.credit.anchor.x = 0.5;
		this.credit.inputEnabled = true;
		//this.credit.events.onInputOver.add(StartCredit,this);

		//this.start.events.onInputOver.add(StartGame,this);
		
	},

	update : function()
	{
		
	},

	render : function()
	{

	}

}

function StartGame (item)
{
	Application.Game.state.add("LevelTest", Application.LevelTest);
	this.state.start("LevelTest");
}
function StartOptions (item)
{
	this.state.start("Options");
}