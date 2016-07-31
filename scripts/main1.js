// var Chest = prompt('open the chest yes or no')


// var age = prompt("what's your age");
// var userAnswer = prompt("Do you want to race on stage?");

// function onclick(){
//     confirm("I understand confirm!");
//     age();
// }
// if (chest=='yes')
// {
//     write('opening the chest you find nothing')
// }
// else {
//     console.log("go get em");
// }
// console.log("You are at a concert, and you hear this lyric 'Lace my shoes off, start racing.'")
// console.log("Suddenly,  stops and says, 'Who wants to race me?'")

// if (userAnswer=="yes"){ 
//     "You and  start racing. It's neck and neck! You win by a shoelace!"
// }
// else {
//     "Oh no!  shakes his head and sings 'I set a pace, so I can race without pacing.'"
// }
// if (feedback>8){
//     "Thank you! We should race at the next concert!"
// } else {
//     "I'll keep practicing coding and racing."
// }

var potion=['healthPotion']
var armor= ['plateMail']
var weapon =['sword']
function inventory(){
if(weapon[0]){


}
}

var hp = 20;
var health = document.getElementById('health')
health.innerHTML="health: " +20;
//exp
var exp=[10,20,53,12,54,100];
var PlayerExp= 0;
//

//goblin health
var goblin ={
	health: 16
}
	var monsters[goblin]
	


	//goblin health

//link code

	var startPage =document.getElementById('startPage');
	var str = "start Page";
var result = str.link("index.html");
//

var AtkDice= document.getElementById('AtkDice');
var DmgDice = document.getElementById('DmgDice');
var diceTotal;
//monster attack dice
// for (function){

// function variables(){
	function MonstersAtkDmg(){
	var Md1= Math.floor(Math.random()*6) + 1;
		var Md2= Math.floor(Math.random()*6) + 1;
		var MdiceTotal = Md1+Md2;
		var Mdmg1= Math.floor(Math.random()*6) + 1;
		var Mdmg2= Math.floor(Math.random()*6) + 1;
		var MdmgDiceTotal = Mdmg1+Mdmg2;
		
		if(MdiceTotal>=9){
				console.log('goblin rolled a' + MdiceTotal)
		
				hp=hp-MdmgDiceTotal
				console.log("Goblin Damange"+MdmgDiceTotal)
			
		health.innerHTML=hp	
		console.log('the goblin hit'+MdmgDiceTotal)
		
				alert('it did ' + MdmgDiceTotal + ' damage');	
		
		console.log(hp)
		
		}
	
		
		else{
			 alert('the goblin missed')
			 return console.log('goblin rolled a' + MdiceTotal)
			}
		// }
		}
	

function rollDice1(){
	
	var d1= Math.floor(Math.random()*6) + 1;
	var d2= Math.floor(Math.random()*6) + 1;
	var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var status = document.getElementById("status");
	
		diceTotal=d1+d2;
		die1.innerHTML=d1;
		die2.innerHTML=d2;
		status.innerHTML="you rolled " +diceTotal+"."
		if(d1 == d2){
			status.innerHTML= "double! you get a free turn!!"

		}
	
	
	if (d1+d2>7){
		alert("hit");
		alert('roll for damage')
		DmgDice.style.display= "block";
		AtkDice.style.display="none";
	}

	else {
			alert('you missed and now goblin attacks');
			 MonstersAtkDmg()
			
	}

	if(hp<=0){
		document.write('you died end of tutorial refresh to retry tutorial or you can always go back to Main Menu'+ result)	
} 

	

}

function rollDice(){
		var  DgmDie1= Math.floor(Math.random()*6) + 1;
		var DgmDie2= Math.floor(Math.random()*6) + 1;
		var DGM=DgmDie2+DgmDie1
		var die3 = document.getElementById("die3");
	var die4 = document.getElementById("die4");
		//var diceTotal = document.getElementById.innerHTML
		die3.innerHTML=DgmDie1
				die4.innerHTML=DgmDie2


		console.log( "DGM:" + DGM)
		if(diceTotal>7){

			
			goblin.health = goblin-DGM;
			alert( "dmg: " + DGM + " || goblin-health: " + goblin.health)

//TRY TO FIND A WAY TO ACCESS FUNCTION INSIDE A FUNCTION SO WE CAN TURN THIS GOBLIN HP THING INTO A FUNCTION
	if(goblin.health<0){
		exp=PlayerExp+exp[0];
		alert('you won:' + exp +'exp');
		document.write('end of tutorial '+ result)	
		console.log('exp:'+exp);

	}
	}
	if (DGM>0){
		alert:('goblins turn')
		AtkDice.style.display='block';
		DmgDice.style.display='none';
		// return rollDice1()
	}
}

// if(PlayerExp>100){
// 	//some kind of level boost
// }



//////////////////////try to ask about improving the modal//////////////////////////
window.onload = function() {

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById('HealthMenu').innerHTML='health: '+hp + "there will be more when I get the chance to make them *please note that stats will be different for different classes";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}