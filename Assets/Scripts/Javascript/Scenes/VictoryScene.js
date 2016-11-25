Application.VictoryScene = function(){};
Application.VictoryScene.prototype = {
	create: function()
	{ 

		this.background = Application.Game.add.sprite(0,0,'logo');
		this.background.width = Application.Game.world.width;
		this.background.height = Application.Game.world.height;

		this.text = this.game.add.text(this.game.world.centerX , this.game.world.centerY - 500, "Victory", { font: "50px Merriweather", fill: "#E6007E", align: "left" });
		this.text.anchor.x = 0.5;

	 	this.victoryToMain = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 450, "Back To Main Menu", { font: "50px Merriweather", fill: "#E6007E", align: "left" });
		this.victoryToMain.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.victoryToMain.anchor.x = 0.5;
		this.victoryToMain.inputEnabled = true;
		this.victoryToMain.events.onInputOver.add(VictoryToMain,this);
		

	},

	update : function()
	{
		
	},

	render : function()
	{

	}

}

function VictoryToMain (item)
{
	Application.Game.world.removeAll();
	this.state.start("TitleScene");
}
