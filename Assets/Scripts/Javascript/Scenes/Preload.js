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

		/*********************************** 
	    			Load Parameter
	    ************************************/

		// Load Saved Data (LocalStorage)
		if(typeof localStorage!='undefined') 
		{
		  	// Récupération de la valeur dans web storage
		  	var SavedKeys = localStorage.getItem('Keys');
		  	console.log("keys :");
		  	console.log(SavedKeys);
		  	if (SavedKeys == null) 
			{
				// Stockage valeur par défaut
		  		localStorage.setItem('Keys',JSON.stringify(Application.Keys));
			}
			else 
			{
				Application.Keys = JSON.parse(SavedKeys);
			}
		  	
		} 
		else 
		{
		  	alert("localStorage n'est pas supporté");
		}


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
	    this.game.load.image('Title','Assets/Graphics/Preload/logo.png');


	    //Chara Loading
	    this.game.load.spritesheet('Yama','Assets/Graphics/Character/yam001_01.png',171,128,12);

	    //Chara Girl
	    this.game.load.image('Red','Assets/Graphics/Chara/GirlRed_60_60.PNG');
	    this.game.load.image('Blue','Assets/Graphics/Chara/GirlBlue_60_60.PNG');
	    this.game.load.image('Green','Assets/Graphics/Chara/GirlGreen_60_60.PNG');
	    
	    //enemy
	    this.game.load.image('Mob_Spike','Assets/Graphics/Enemy/eny101_01.png');
	    this.game.load.image('Mob_Noodle','Assets/Graphics/Enemy/eny102_01.png');
	    this.game.load.image('ChopStick','Assets/Graphics/Enemy/eny102_02.png');
	    this.game.load.image('Mob_Barrel','Assets/Graphics/Item/itm101_01.png');
	    

	    //ParticlesLoad
	    //this.game.load.image('PMoon','Assets/Graphics/SFX/blueParticles.png');
	    this.game.load.spritesheet('PMoon','Assets/Graphics/Item/itm001_01.png',48,48,6);

	    //Background Loading
	    //this.game.load.image('City1','Assets/Graphics/Background/CityTest1.png');
	    //this.game.load.image('City2','Assets/Graphics/Background/CityTest2.png');
	    //this.game.load.image('Background','Assets/Graphics/Background/BackgroundTest.png');
	    this.game.load.image('Background','Assets/Graphics/Background/bcg101_01.png');
	    
	    //Shadows
	    this.game.load.spritesheet('Ground1','Assets/Graphics/Background/bcg102_01.png',512,50,8);
	    this.game.load.spritesheet('Ground1Elem','Assets/Graphics/Background/bcg102_02.png',140,90,4);
	    this.game.load.spritesheet('Ground2','Assets/Graphics/Background/bcg103_01.png',512,50,8);

	    //HUD ELEMENT
	    this.game.load.image('Life','Assets/Graphics/UI/life_full.png');
	    this.game.load.image('NoLife','Assets/Graphics/UI/life_empty.png');
	    this.game.load.image('Weapon','Assets/Graphics/UI/star.png');
	    this.game.load.image('BlackUI','Assets/Graphics/UI/black_UI.png');
	    this.game.load.image('Stage','Assets/Graphics/UI/stage.png');
	    this.game.load.image('Bar','Assets/Graphics/UI/bar.png');
	    this.game.load.image('BarContainer','Assets/Graphics/UI/barContainer.png');
	    
	    //Effect
	    this.game.load.image('dark_corner','Assets/Graphics/SFX/eff001_01.png');
	    this.game.load.image('darkness','Assets/Graphics/SFX/eff002_01_darkness.png');

	    //Weapon Loading
	    this.game.load.image('ShurikenBtn','Assets/Graphics/Weapons/ShurikenBtn.png');
	    this.game.load.image('Shuriken','Assets/Graphics/Weapons/Shuriken2.png');

	    //Debug Loading
	    this.game.load.image('DebugUp','Assets/Graphics/Debug/DebugUp.png');
	    this.game.load.image('DebugDown','Assets/Graphics/Debug/DebugDown.png');
	    this.game.load.image('DebugAttack','Assets/Graphics/Debug/DebugAttack.png');

	    /*********************************** 
	    			Touch Gestion
	    ************************************/

	    

	    if (Application.touchEnabled == false) 
	    {
	    	
	    	if (!Application.Game.device.desktop) 
	    	{
	    		Application.touchEnabled = true
	    	};
	    }



	},

  	create: function()
  	{
  		console.log("create Preload");

  		// go to another State
		this.state.start("TitleScene");
	}
}