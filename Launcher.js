// la fonction anonyme protège la variable Game
(function() {
	var Game = new Phaser.Game(
			Application.Config.width, 
			Application.Config.height, 
			Phaser.AUTO, 
			Application.name
		);
	Application.Game = Game;

	/*
		le premier argument est le nom de l'état,
		le deuxième est le nom de la fonction pour appeler cet état
	*/
	Game.state.add("Splash", Application.Splash);
	Game.state.add("Preload", Application.Preload);
	Game.state.add("TitleScene", Application.TitleScene);
	Game.state.add("LevelTest", Application.LevelTest);
	Game.state.add("Options", Application.Options);
	Game.state.add("VictoryScene", Application.VictoryScene);
	Game.state.add("GameOverScene", Application.GameOverScene);

	// lancer l'ecran de lancement du jeu
	Game.state.start("Splash");	
})();    