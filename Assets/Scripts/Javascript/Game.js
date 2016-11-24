// on crée l'objet principal du jeu
var Application = {
	Config : {
		width : 1920, // meilleur taille pour le jeu
		height : 1080
	},
	Keys : {
		up : {keyCode : Phaser.Keyboard.UP, char :"UP"},
		down : {keyCode : Phaser.Keyboard.DOWN, char :"DOWN"},
		attack : {keyCode : Phaser.Keyboard.SPACEBAR, char :"SPACEBAR"},
		weapon1 : {keyCode : Phaser.Keyboard.A, char :"A"},
		weapon2 : {keyCode : Phaser.Keyboard.E, char :"E"}
	},
	Game : null,
	Juicy : null,
	debugMode: false,
	// Debug for touch button
	debugTouch: false,
	godMode: false,
	//Change to true to force touch for mobile (default : false)
	touchEnabled: false,
	Player: null	
}