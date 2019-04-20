/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gameplaying,prev ;

init();  

//console.log(activePlayer);

//dice=Math.floor(Math.random()*6)+1;
//console.log(dice);

//document.querySelector("#current-"+activePlayer).textContent=dice;

//document.querySelector("#current-"+activePlayer).innerHTML="<em>" + dice + "</em>";

//var x=document.querySelector("#score-1").textContent;
//console.log(x);



/*function btn(){
    //do something when the button is clicked
}*/
prev=0;
document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamePlaying){
        
    //random number
    var dice=Math.floor(Math.random()*6)+1;
    
    //display the result
    var diceDOM=document.querySelector(".dice");
    diceDOM.style.display="block";
    diceDOM.src="dice-"+dice+".png";
    //update the score
    
    if(prev!=6||dice!=6){
        //add score
        roundScore+=dice;
        document.querySelector("#current-" + activePlayer).textContent=roundScore;
    }else{
        //next player
       nextPlayer();
       // document.querySelector(".dice").style.display="none";
    }
        prev=dice;
    }   
});//when the rool device button is clicked the btn function is executed
document.querySelector(".btn-hold").addEventListener("click",function(){
        //add current score to global score
    if(gamePlaying){
        scores[activePlayer]+=roundScore;
           
        
        //update the UI
        document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
        //check if the player won or not
    if(scores[activePlayer]>=20){
        document.querySelector("#name-"+activePlayer).textContent="WINNER!!";
        document.querySelector(".dice").style.display="none";
        document.querySelector(".player-"+activePlayer+"-panel").classList.add("winner");
        document.querySelector(".player-"+activePlayer+"-panel").classList.remove("active");
        gamePlaying=false;
    }else{
          nextPlayer();
    }}
 //nextplayer
  
    });
function nextPlayer(){
     if(activePlayer===0){
            activePlayer=1;
        }
        else{
            activePlayer=0;
        }
        roundScore=0;
        document.getElementById("current-0").textContent="0";
        document.getElementById("current-1").textContent="0";
        
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        
        //document.querySelector(".dice").style.display="none";
}

document.querySelector(".btn-new").addEventListener("click",init);

function init(){
    scores=[0,0];
roundScore=0;
activePlayer=0;
     gamePlaying = true;
    document.querySelector(".dice").style.display="none";

document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById("name-0").textContent="PLAYER 1"; 
document.getElementById("name-1").textContent="PLAYER 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
