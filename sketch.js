  var life_bar1,life_bar2,life_bar3,potter,voldermort,potter_img,voldermort_img;
  var beamR,beamG;
  var  playerCount,gameState,player,form,game,allPlayers,database,bg;
  var walls,walls_img;


  function preload(){
  beamR=loadImage("Hbeam.png");
  beamG=loadImage("Vbeam.png");
  bg=loadImage("BG.jpg");
  voldermort_img=loadImage("voldermort.png");
  potter_img=loadImage("harry potter.png");


  }





  function setup() {
    //database=firebase.database();
    createCanvas(1280,577);
    
    voldermort=createSprite(1100, 300, 50, 50);
          voldermort.addImage(voldermort_img);
          voldermort.scale=0.30;
        
          potter=createSprite(160, 300, 50, 50);
          potter.addImage(potter_img);
          potter.scale=0.85;

  }

  function draw() {
    background(bg); 
    
    if(playerCount===2){
      game.update(1)
      }

  if(gameState===1){
      game.play();
  }

  if(gameState===2){
      game.end();
  }


    drawSprites();
  }