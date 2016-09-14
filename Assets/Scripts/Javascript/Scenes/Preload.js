Application.Preload = function(){};

Application.Preload.prototype = 
{
	preload: function()
	{ 
		this.game.stage.backgroundColor = "#000";
		console.log("Preload preload");
		// on crée un sprite pour la barre de chargement
        var loadingBar = this.add.sprite(Application.Config.width / 2, Application.Config.height / 2, "loading");
	    loadingBar.anchor.setTo(0.5,0.5);

	    // on défini la barre de chargement et phaser va gérer la bare tout seul
	    this.load.setPreloadSprite(loadingBar);

	    // Add the Juicy Plugins to Application.
		Application.Juicy = this.game.plugins.add(new Phaser.Plugin.Juicy(this.game));


	    /***********************
	    	Loading Example
		************************
		this.game.load.tilemap('LevelTest', 'Assets/Graphics/TilesMap/LevelTest.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('Tuto', 'Assets/Graphics/TilesMap/Tuto.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.tilemap('Ante1', 'Assets/Graphics/TilesMap/Ante1.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.spritesheet('Hole', 'Assets/Graphics/Interact/Trap/Hole_32_32.png', 32, 32, 4);
    	this.game.load.image('pauseMenu', 'Assets/Graphics/PauseMenu/pauseMenu_150_300.png');
		this.game.load.audio('bossGrunt', 'Assets/Audio/SFX/bossGrunt.wav');
		*/
		/*********************************** 
	    	chargement des assets
	    ************************************/
	    //Title Load
	    this.game.load.image('Title','Assets/Graphics/Background/TitleBackground.png');


	    //Chara Loading
	    this.game.load.spritesheet('Yama','Assets/Graphics/Chara/Yama_98_96.png',96,96,16);

	    //Chara Girl
	    this.game.load.image('Red','Assets/Graphics/Chara/GirlRed_60_60.PNG');
	    this.game.load.image('Blue','Assets/Graphics/Chara/GirlBlue_60_60.PNG');
	    this.game.load.image('Green','Assets/Graphics/Chara/GirlGreen_60_60.PNG');

	    //ParticlesLoad
	    this.game.load.image('PMoon','Assets/Graphics/SFX/blueParticles.png');

	    //Background Loading
	    //this.game.load.image('City1','Assets/Graphics/Background/CityTest1.png');
	    //this.game.load.image('City2','Assets/Graphics/Background/CityTest2.png');
	    this.game.load.image('Background','Assets/Graphics/Background/BackgroundTest.png');
	    

	    //Weapon Loading
	    this.game.load.image('ShurikenBtn','Assets/Graphics/Weapons/ShurikenBtn.png');

	    //Debug Loading
	    this.game.load.image('DebugUp','Assets/Graphics/Debug/DebugUp.png');
	    this.game.load.image('DebugDown','Assets/Graphics/Debug/DebugDown.png');
	    this.game.load.image('DebugAttack','Assets/Graphics/Debug/DebugAttack.png');

	    /*********************************** 
	    			Touch Gestion
	    ************************************/

	    

	    if (Application.touchEnabled == false) 
	    {
	    	console.log(Application)
	    	if (!Application.Game.device.desktop) 
	    	{
	    		Application.touchEnabled = true
	    	};
	    }


	    /*********************************** 
	    			Load Parameter
	    ************************************/


	},

  	create: function()
  	{
  		console.log("create Preload");

  		// go to another State
		this.state.start("TitleScene");
	}
}