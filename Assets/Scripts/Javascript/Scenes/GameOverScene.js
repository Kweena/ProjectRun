Application.GameOverScene = function(){};
Application.GameOverScene.prototype = {
	create: function()
	{ 
		console.log('Starting','TitleScene');

		this.background = Application.Game.add.sprite(0,0,'logo');
		this.background.width = Application.Game.world.width;
		this.background.height = Application.Game.world.height;

		this.text = this.game.add.text(this.game.world.centerX + 200 , this.game.world.centerY + 200, "GAME OVER", { font: "150px Open Sans Condensed", fill: "#E6007E", align: "left" });
		this.text.anchor.x = 0.5;
		this.text.fontWeight = 'bold';

	 	this.gameOverToMain = this.game.add.text(this.game.world.centerX , this.game.world.centerY + 450, "Back To Main Menu", { font: "50px Open Sans Condensed", fill: "#E6007E", align: "left" });
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
