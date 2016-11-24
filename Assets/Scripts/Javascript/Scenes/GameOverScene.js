Application.GameOverScene = function(){};
Application.GameOverScene.prototype = {
	create: function()
	{ 
		console.log('Starting','TitleScene');

		this.background = Application.Game.add.sprite(0,0,'Title');
		this.background.width = Application.Game.world.width;
		this.background.height = Application.Game.world.height;

		this.text = this.game.add.text(this.game.world.centerX , this.game.world.centerY - 200, "Game Over", { font: "50px Merriweather", fill: "#fff", align: "left" });
		this.text.anchor.x = 0.5;

	 	this.gameOverToMain = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 200, "Back To Main Menu", { font: "50px Merriweather", fill: "#fff", align: "left" });
		this.gameOverToMain.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
		this.gameOverToMain.anchor.x = 0.5;
		this.gameOverToMain.inputEnabled = true;
		this.gameOverToMain.events.onInputOver.add(GameOverToMain,this);
		
		
	},

	update : function()
	{
		
	},

	render : function()
	{

	}

}

function GameOverToMain (item)
{
	Application.Game.world.removeAll();
	Application.Game.state.add("TitleScene", Application.TitleScene);
	this.state.start("TitleScene");
}
