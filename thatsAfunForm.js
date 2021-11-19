class ThatsAfunForm{

    constructor( configuration ){

        this.configuration = configuration;
        this.running = 0;
        this.activeAnimation = 0;
        this.lastAnimation;
        var self = this;

        this.formSelector = "#"+configuration.formId;
        this.buildCanvas( this.formSelector , configuration.size.width , configuration.size.height );
        this.buildActions( configuration.actions );

        if( configuration.autoplay == true ){
            this.onLoad( configuration );
        }

        this.sprite = new Image();

        this.sprite.addEventListener('load', function() {
            self.ctx.drawImage( self.sprite , 0 , configuration.onLoad.spriteRow - 1 , configuration.sprite.frameWidth , configuration.sprite.frameHeight , 0 , 0 , configuration.sprite.frameWidth , configuration.sprite.frameHeight );
        });

        this.sprite.src = configuration.sprite.location;

    }

    start(){

        this.onLoad( this.configuration );

    }

    buildCanvas( idForm , width , height ){

        $( idForm ).prepend( '<div id="thatsAfunForm" style="text-align:center;"><canvas id="thatsAfunFormCanvas"></canvas></div>' );
        var canvas = document.getElementById("thatsAfunFormCanvas");
        this.ctx = canvas.getContext("2d");  
        canvas.width = width;
        canvas.height = height;         

    }

    buildActions( actions ){

        var fieldSelection;
        var self = this;

        actions.forEach(function (item) {
        
            fieldSelection = self.formSelector+" "+item.selector;

            $( fieldSelection ).on("focus" , function(){

                if( self.activeAnimation == 0 ){
                    
                    self.lastAnimation = item;
                    self.createAnimation( item.speed , null , item.onFocusIn );
                    self.activeAnimation = 1;
                
                }else{
                
                    self.createAnimation( item.speed , self.lastAnimation.onFocusOut , item.onFocusIn );
                    self.activeAnimation = 0;
                
                }
 
            });        

            if( item.onKeyUp !== undefined ){

                $( fieldSelection ).on("keyup" , function( e ){
                    var inputText = $( fieldSelection ).val();
                    var lastKey = inputText[inputText.length - 1];

                    if( lastKey == item.onKeyUp.char ){
                    
                        self.activeAnimation = 0;
                        self.createAnimation( item.speed , null , item.onKeyUp );
                        self.activeAnimation = 1;
                    
                    }
                    
                });                

            }

        });

    }

    createAnimation( speed , focusOut = null , focusIn ){

        var spritePositionIn = 0;
        var spritePositionOut = 0;
        var configuration = this.configuration;
        var self = this;

        if( this.running == 0 ){

            this.running = 1;

            if( this.activeAnimation == 0 ){

                var animation = window.setInterval( function(){

                    if( spritePositionIn < configuration.sprite.frameWidth * ( focusIn.frames - 1 ) ){
                        self.ctx.clearRect( 0, 0, configuration.size.width , configuration.size.height );
                        spritePositionIn += configuration.sprite.frameWidth;
                        self.ctx.drawImage( self.sprite , spritePositionIn , ( focusIn.spriteRow - 1 ) * configuration.sprite.frameHeight , configuration.sprite.frameWidth , configuration.sprite.frameHeight , 0 , 0 , configuration.sprite.frameWidth , configuration.sprite.frameHeight );
                    }else{
                        clearInterval( animation );
                        self.running = 0;
                    }
    
                } , speed ); 

            }else{

                var animation = window.setInterval( function(){

                    if( spritePositionOut < configuration.sprite.frameWidth * ( focusOut.frames - 1 ) ){
                        self.ctx.clearRect( 0, 0, configuration.size.width , configuration.size.height );
                        spritePositionOut += configuration.sprite.frameWidth;
                        self.ctx.drawImage( self.sprite , spritePositionOut , ( focusOut.spriteRow - 1 ) * configuration.sprite.frameHeight , configuration.sprite.frameWidth , configuration.sprite.frameHeight , 0 , 0 , configuration.sprite.frameWidth , configuration.sprite.frameHeight );
                    }else{

                        if( spritePositionIn < configuration.sprite.frameWidth * ( focusIn.frames - 1 ) ){
                            self.ctx.clearRect( 0, 0, configuration.size.width , configuration.size.height );
                            spritePositionIn += configuration.sprite.frameWidth;
                            self.ctx.drawImage( self.sprite , spritePositionIn , ( focusIn.spriteRow - 1 ) * configuration.sprite.frameHeight , configuration.sprite.frameWidth , configuration.sprite.frameHeight , 0 , 0 , configuration.sprite.frameWidth , configuration.sprite.frameHeight );
                        }else{
                            clearInterval( animation );
                            self.running = 0;
                        }
          
                    }
    
                } , speed ); 
                
            }

        }

    }

    onLoad( configuration ){

        var self = this;
        var spritePosition = 0;

        if( this.running == 0 ){

            this.running = 1;

            var runLoop = window.setInterval( function(){

                if( spritePosition < configuration.sprite.frameWidth * ( configuration.onLoad.frames - 1 ) ){

                    self.ctx.clearRect( 0, 0, configuration.size.width , configuration.size.height );
                    spritePosition += configuration.sprite.frameWidth;
                    self.ctx.drawImage( self.sprite , spritePosition , ( configuration.onLoad.spriteRow - 1 ) * configuration.sprite.frameHeight , configuration.sprite.frameWidth , configuration.sprite.frameHeight , 0 , 0 , configuration.sprite.frameWidth , configuration.sprite.frameHeight );

                }else{
                    clearInterval( runLoop );
                    self.running = 0;
                }

            } , configuration.onLoad.speed );  

        }

    }

}