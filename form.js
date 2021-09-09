class Form{

    constructor(){
        this.input=createInput("Name")
        this.button=createButton('fight')
        this.greeting=createElement('h3')
        this.title=createElement('h3')
        }
    
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        this.title.html("Howgwarts war")
        this.title.position(500,100)
        this.input.position(550,350);
        this.button.position(600,450);
        
        this.button.mousePressed(()=>
        {
            this.greeting.hide()
            this.button.hide()
            this.input.hide()
            player.name=this.input.value();
            playerCount+=1;
    
    
            this.greeting.html("welcome to the war of the wizards"+player.name)
            this.greeting.position(500,100);
          });
    }
    
    
    }