// on crée l'objet principal du jeu
var Application = {
	Config : {
		width : 640, // meilleur taille pour le jeu
		height : 480
	},
	Game : null,
	Juicy : null,
	debugMode: true,
	debugTouch: true,
	godMode: false,
	//Change to true to force touch for mobile (default : false)
	touchEnabled: false,
	Player: null	
}