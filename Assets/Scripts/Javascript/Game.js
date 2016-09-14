// on crée l'objet principal du jeu
var Application = {
	Config : {
		width : 1920, // meilleur taille pour le jeu
		height : 1080
	},
	Game : null,
	Juicy : null,
	debugMode: true,
	// Debug for touch button
	debugTouch: false,
	godMode: false,
	//Change to true to force touch for mobile (default : false)
	touchEnabled: false,
	Player: null	
}