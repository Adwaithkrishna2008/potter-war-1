class Player{
    
    constructor(){
        this.name=null;
        this.index=null;
    }

    getCount(){
        var playerCountref=database.ref('playerCount')
        playerCountref.on("value",(data)=>{
            playerCount=data.val();
        })}


updateCount(count){
    database.ref('/').update({
       playerCount:count 
    })
}

update(){
    var playerIndex="players/player"+this.index
    database.ref(playerIndex).set({
        name:this.name
    })
}

static getPlayerInfo(){
    var playerInforef=database.ref('players')
    playerInforef.on("value",(data)=>{
        allplayers=data.val();
    })
}











}