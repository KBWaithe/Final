let Game = (function(){

    // variable declarations
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    
    let assets: createjs.LoadQueue;

    /* Labels */
    let diceOneLabel: UIObjects.Label;
    let diceTwoLabel: UIObjects.Label;
    let diceResultLabel: UIObjects.Label;

    /* Dice designs */
    let diceDesignOne: Core.GameObject;
    let diceDesignTwo: Core.GameObject;
    
    /* Buttons */
    let rollButton: UIObjects.Button;
    let startOverButton: UIObjects.Button;
       
    /* Instead of deleting the other assets, I commented them out just in case I could utilize them later on */
    let assetManifest = 
    [
        {id:"1", src:"./Assets/images/1.png"},
        {id:"2", src:"./Assets/images/2.png"},
        {id:"3", src:"./Assets/images/3.png"},
        {id:"4", src:"./Assets/images/4.png"},
        {id:"5", src:"./Assets/images/5.png"},
        {id:"6", src:"./Assets/images/6.png"},
        //{id:"backButton", src:"./Assets/images/startButton.png"},
        //{id:"background", src:"./Assets/images/background.png"},
        //{id:"blank", src:"./Assets/images/blank.png"},
        //{id:"button", src:"./Assets/images/button.png"},
        //{id:"nextButton", src:"./Assets/images/nextButton.png"},
        //{id:"placeholder", src:"./Assets/images/placeholder.png"},
        //{id:"resetButton", src:"./Assets/images/resetButton.png"},
        {id:"rollButton", src:"./Assets/images/rollButton.png"},
        {id:"startButton", src:"./Assets/images/startButton.png"},
        {id:"startOverButton", src:"./Assets/images/startOverButton.png"}
    ];

    function Preload():void
    {
        console.log(`%c Preload Function`, "color: green; font-size: 14px; font-weight: bold;");
        assets = new createjs.LoadQueue(); // asset container 
        assets.installPlugin(createjs.Sound); // supports sound preloading
        assets.loadManifest(assetManifest);
        assets.on("complete", Start);
    }

    /*
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start():void
    {
        console.log(`%c Start Function`, "color: green; font-size: 14px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = Config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        
        Config.Game.ASSETS = assets; // make a reference to the assets in the global config

        Main();
    }

    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn 60x per second
     */
    function Update():void
    {
        stage.update();
    }

    /* RNG functionality for the dice*/
    function generateRandomNumber()
    {
        return Math.floor(Math.random()*(6)+1);
    }

    /**
     * Game Functionality
     *
     */
    function Main():void
    {
        console.log(`%c Main Function`, "color: green; font-size: 14px; font-weight: bold;");

        /* Button Functionality first */
        rollButton = new UIObjects.Button("rollButton", Config.Game.CENTER_X, Config.Game.CENTER_Y + 80, true);
        stage.addChild(rollButton);

        startOverButton = new UIObjects.Button("startOverButton", Config.Game.CENTER_X, Config.Game.CENTER_Y + 190, true);
        stage.addChild(rollButton);
        rollButton.on("click", ()=>{

            console.log("The dice have been cast.");
            let ranNumGenOne = generateRandomNumber();
            let ranNumGenTwo = generateRandomNumber();
            let diceResults = ranNumGenOne + ranNumGenTwo;

            /* Clear the labels, dice designs and results in order to reroll */
            stage.removeChild(diceOneLabel, diceTwoLabel, diceDesignOne, diceDesignTwo, diceResultLabel)
            
            /* Linking first and second RNG functions to respective labels then appending the labels to the stage */
            diceOneLabel = new UIObjects.Label(ranNumGenOne.toString(), "40px", "Consolas", "#000000", Config.Game.CENTER_X - 190, Config.Game.CENTER_Y + 100, true);
            stage.addChild(diceOneLabel);
            
            diceTwoLabel = new UIObjects.Label(ranNumGenTwo.toString(), "40px", "Consolas", "#000000", Config.Game.CENTER_X + 190, Config.Game.CENTER_Y + 100, true);
            stage.addChild(diceTwoLabel);

            /* Linking results to the result label */
            diceResultLabel = new UIObjects.Label(diceResults.toString (), "35px", "Consolas", "#000000", Config.Game.CENTER_X, Config.Game.CENTER_Y + 90, true);
            
            /* Linking the designs for the dice to the dice object */
            diceDesignOne = new Core.GameObject(ranNumGenOne.toString(), Config.Game.CENTER_X - 190, Config.Game.CENTER_Y - 110, true);
            stage.addChild(diceDesignOne);
            
            diceDesignTwo = new Core.GameObject(ranNumGenTwo.toString(), Config.Game.CENTER_X + 190, Config.Game.CENTER_Y - 110, true);
            stage.addChild(diceDesignTwo);
        });

        diceDesignOne = new Core.GameObject("startButton", Config.Game.CENTER_X - 190, Config.Game.CENTER_Y - 110, true);
        stage.addChild(diceDesignOne);
        
        diceDesignTwo = new Core.GameObject("startButton", Config.Game.CENTER_X + 190, Config.Game.CENTER_Y - 110, true);
        stage.addChild(diceDesignTwo);

        startOverButton.on("click", ()=>
        {
            console.log("StartOverButton has been clicked");
            stage.removeChild(diceOneLabel, diceTwoLabel, diceDesignOne, diceDesignTwo, diceResultLabel)
            
            diceDesignOne = new Core.GameObject("startButton", Config.Game.CENTER_X - 200, Config.Game.CENTER_Y - 110, true);
            stage.addChild(diceDesignOne);

            diceDesignTwo = new Core.GameObject("startButton", Config.Game.CENTER_X + 200, Config.Game.CENTER_Y - 110, true);
            stage.addChild(diceDesignTwo);
        });
        
    }

    window.addEventListener('load', Preload);


})();