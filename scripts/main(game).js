var OgerPic=document.getElementById('OgerPic')
var zombiePic=document.getElementById('zombiePic')
var GoblinPic=document.getElementById('GoblinPic')
var LimbDamage =document.getElementById('LimbDamage')

var die5= document.getElementById('die5')
var die6= document.getElementById('die6')

var status1=document.getElementById('status1')

function ReapearingLimbs(){
	document.getElementById('arms').style.display='inline';
document.getElementById('legs').style.display='inline';
document.getElementById('head').style.display='inline';
document.getElementById('chest').style.display='inline';
}

function dissapearingLimbs(){
document.getElementById('arms').style.display='none';
document.getElementById('legs').style.display='none';
document.getElementById('head').style.display='none';
document.getElementById('chest').style.display='none';
}
var log=document.getElementById('log')

function YouHitLimb(){
	var t = document.createTextNode('You Hit. Now hit the Damage Limb die to do damage. ');      
log.appendChild(t); 
dissapearingLimbs()
}
function MonstersTurnText(){
	var t = document.createTextNode(' Monsters Turn!');      
log.appendChild(t); 

}
function YouMissedLimb(){
	log.innerHTML=(' You missed! The Enemy attacks now!');      // Create a text node 
}

var AttackList = document.getElementById('AttackList')
var AttackList1 =document.getElementById('AttackList1')
var head =document.getElementById('head')
var legs =document.getElementById('legs')

var dice1 = document.getElementById('die1')
var dice2 = document.getElementById('die2')
var dice3 = document.getElementById('die3')
var dice4 = document.getElementById('die4')

function GoblinImg(){
	document.getElementById('GoblinPic').style.display='block'
		AttackList1.style.display='block';
}
function OgerImg(){
	document.getElementById('OgerPic').style.display='block'
			AttackList1.style.display='block';
}
function ZombieImg(){
	document.getElementById('ZombiePic').style.display='block'
			AttackList1.style.display='block';
}
function dissapear(){
	DmgDice.style.display='none'
	AtkDice.style.display= "none";		
	dice1.style.display='inline';
dice2.style.display='inline';
		dice3.style.display='none';
		dice4.style.display='none';
}
function displayOnImg(){
AtkDice.style.display= "block";		
dice1.style.display='inline';
dice2.style.display='inline';
}
function display(){
AtkDice.style.display= "block";		
dice1.style.display='inline';
dice2.style.display='inline';
		 	LimbDamage.style.display='none'

}


/////////

var hp = 50;
var health = document.getElementById('health')
health.innerHTML="health: " +hp;
//exp
var exp=[10,5,53,100];
var Strength =1
var PlayerExp= 0;

// document.getElementById('NextPage').addEventListener("click", function(){
// document.write('IFBWIPEUGRNUEPQGNRPEWIUGNVEIPWERUI')
// });



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
	//plot
var NextPage10= document.getElementById('NextPage1');

function nextPage(){
NextPage10.style.display='block';
}
var yes =document.getElementById('yes')
var no =document.getElementById('no')
	document.getElementById('yes').addEventListener("click", function(){
		var randomDMG = Math.floor(Math.random()*3) + 1;
		hp=hp-randomDMG
				console.log("Goblin Damange"+randomDMG)
			GoblinImg()
		health.innerHTML=hp	
		no.style.display='none';
		yes.style.display='none';

document.getElementById('lorem').innerHTML ='from the chest a goblin jumpped out and attacked you. make him REGRET that'
display()
	GoblinImg();
});
// ASK HOW TO MAKE THINGS LIKE BUTTONS ON THE PREVIOUS PAGE SHOW UP

no.onclick=function(){
	document.getElementById('lorem').innerHTML ='ignoring the chest you continue your trip'
	nextPage()
	}

var h1 =document.getElementById('h1')
var h3 =document.getElementById('h3')
var h4 =document.getElementById('h4')
var p =document.getElementById('lorem')
var right1 =document.getElementById('right1')

function NextPage1(){
	yes.style.display='none';
	h1.innerHTML='the cave divergerts 2 ways';
	h3.innerHTML='right or left'
	h4.innerHTML="choose, but remember each dicision has it's risks"
	lorem.innerHTML=''
	right1.style.display='block'
		left.style.display='block'
	NextPage10.style.display='none';
	no.style.display='none'
	log.innerHTML=' '

}


	// var healthRand = Math.floor(Math.random()*20) + 1;


var monster = function(MonsterHealth, name, ArmHealth, LegHealth, ChestHealth, HeadHealth ){
	this.MonsterHealth = MonsterHealth,
	this.name = name,
	this.ArmHealth=ArmHealth,
	this.LegHealth=LegHealth,
	this.ChestHealth=ChestHealth,
	this.HeadHealth=HeadHealth
	this.Atk = function(){
		// function GoblinAtkDmg(){
	var Md1= Math.floor(Math.random()*6) + 1;
		var Md2= Math.floor(Math.random()*6) + 1;
		var MdiceTotal = Md1+Md2;
		if(GoblinPic.style.display=='block')
		var Mdmg1= Math.floor(Math.random()*3) + 1;
		var Mdmg2= Math.floor(Math.random()*3) + 1;
		var MdmgDiceTotal = Mdmg1+Mdmg2;
		if(ZombiePic.style.display=='block')
		var Mdmg1= Math.floor(Math.random()*9) + 1;
		var Mdmg2= Math.floor(Math.random()*3) + 1;
		var MdmgDiceTotal = Mdmg1+Mdmg2;
		if(OgerPic.style.display=='block')
		var Mdmg1= Math.floor(Math.random()*8) + 1;
		var Mdmg2= Math.floor(Math.random()*8) + 1;
		var MdmgDiceTotal = Mdmg1+Mdmg2;
		
		if(MdiceTotal>=9){
				console.log('monster rolled a' + MdiceTotal)
		
				hp=hp-MdmgDiceTotal
				console.log("monster Damange"+MdmgDiceTotal)
			
		health.innerHTML=hp	
		console.log('the monster hit'+MdmgDiceTotal)
		
				var t = document.createTextNode(' it did ' + MdmgDiceTotal + ' damage');      
log.appendChild(t); 
		
		console.log('your health'+hp)
		
		}
		else{
			var t = document.createTextNode(' the ' + monster.name + ' missed');      
log.appendChild(t); 
			 // alert('the ' + monster.name + ' missed')
			 return console.log('monster rolled a ' + MdiceTotal)
			}
		// }
		}
		
	}
	
	

	
	var Oger= new monster(60, 'Oger', 10, 10, 15, 25);
	var zombie=new monster(45, 'zombie', 10, 10, 10, 15);
	var goblin= new monster(35, 'goblin', 4, 6, 10, 15);

function MonsterDeath(){
		if(goblin.MonsterHealth<=0)
			{
				if(document.getElementById('GoblinPic').style.display=='block'){
						PlayerExp=PlayerExp+exp[0];
					alert('you won:' + exp[0] +'exp');
					console.log('exp:'+PlayerExp);
					dissapear();
					nextPage()
					GoblinPic.style.display='none';
						}
					}
		
				if(zombie.MonsterHealth<=0){
				if(document.getElementById('ZombiePic').style.display=='block'){
					PlayerExp=PlayerExp+exp[1];
			alert('you won:' + exp[1] +'exp');
			console.log('exp:'+PlayerExp);
			dissapear();
			nextPage()
			ZombiePic.style.display='none';
				}
				}	if(Oger.MonsterHealth<=0){
								if(document.getElementById('OgerPic').style.display=='block'){
									PlayerExp=PlayerExp+exp[2];
							alert('you won:' + exp[2] +'exp');
							console.log('exp:'+PlayerExp);
							dissapear();
							nextPage()
							OgerPic.style.display='none';
								}}
		
		
		else {
			AtkDice.style.display='block';
			DmgDice.style.display='none';
			dice3.style.display='none';
			dice4.style.display='none';
			// return rollDice1()
		}
		if(PlayerExp==100){
			alert('YOU LEVELED UP')
	hp=hp*3;
	Strength=Strength*2
}
	}

	var BodyPartsDmg = function(chance){
		
		 this.chance= chance;
		
		 this.BodyPartsDmg1=function(){
// MonsterDeath()
ReapearingLimbs();
		 	LimbDamage.style.display='block',
		AtkDice.style.display='none'
		if(GoblinPic.style.display=='block'){
				var Damage=Math.floor(Math.random()*chance)+1
				goblin.MonsterHealth=goblin.MonsterHealth-(Damage+Strength)
				log.innerHTML= "dmg: " + Damage + " || Goblin-health: " + goblin.MonsterHealth;
				}
		if(ZombiePic.style.display=='block'){
				var Damage=Math.floor(Math.random()*chance)+1
				zombie.MonsterHealth=zombie.MonsterHealth-(Damage+Strength)
				log.innerHTML= "dmg: " + Damage + " || zombie-health: " + zombie.MonsterHealth;
			}
		if(OgerPic.style.display=='block'){
				var Damage=Math.floor(Math.random()*chance)+1
				Oger.MonsterHealth=Oger.MonsterHealth-(Damage+Strength)
				log.innerHTML= "dmg: " + Damage + " || Oger-health: " + Oger.MonsterHealth;
				 		 }
		MonstersTurn();
 die5.innerHTML=Damage
		 		}
		}
		


	
// function youth(){
// 	var FountainOfYouth = Math.floor(Math.random()*9) + 1;
// 			hp=hp+FountainOfYouth
	
// }
// var right =[FountOfYouth, goblin, Oger]
function youth(){
	var FountainOfYouth = Math.floor(Math.random()*9) + 1;
			hp=hp+FountainOfYouth
	console.log(FountainOfYouth)
}
right1.onclick= function(){
	var Rooms =Math.floor(Math.random()*3)+1; 
	right1.style.display='none'
		no.style.display='none'
		left.style.display='none'
	if (Rooms==1)
	{
		// right[0]
		alert( 'you found a fountain of youth Fountain Of Youth!');
			youth()
		console.log('hp'+hp);
				nextPage()

	}
	else if (Rooms==2 ){
	// right[1]
	alert('Goblin')
   goblin.MonsterHealth=20;
   	display()
			AtkDice.style.display='block'
			GoblinImg()
			if(goblin.MonsterHealth<=0){
			nextPage()
			}
}
		else if (Rooms==3){
		alert('Oger')
   Oger.MonsterHealth=60;
   	display()
   	OgerImg()
			AtkDice.style.display='block'
			
			if(Oger.MonsterHealth<=0){
			nextPage()
			}
			// right[2]
					
	}
	else{
		alert('nothing of interest in here')
		nextPage()
	}
 }
 function left1(){
	var Rooms =Math.floor(Math.random()*3)+1;
		right1.style.display='none'
		no.style.display='none'
		left.style.display='none'
	if (Rooms==1)
	{
		// right[0]

		alert('nothing interesting here, which is good to an extent');
		nextPage()
	}
	else if (Rooms==2 ){
	// right[1]
	
		alert('zombie')
		AtkDice.style.display='block'
		display()
		ZombieImg()
			
			zombie.MonsterHealth=10
			if(zombie.MonsterHealth<=0){
			nextPage()
			}


}
		else if (Rooms==3){
			alert('Goblin')
   goblin.MonsterHealth=20;
   	display()
   	GoblinImg()
			AtkDice.style.display='block'
			
			if(goblin.MonsterHealth<=0){
			nextPage()
			}
	}
 }

var ArmDama = new BodyPartsDmg(13)
var ArmsChances =[12,9,14,15]
var LegChances=[9,8,13,18]
var ChestChances=[16,18,17,16]
var HeadChances=[9,9,9,9]


var status = document.getElementById("status");
function arms(){

 	if(OgerPic.style.display=='block'){
 		 			var d= Math.floor(Math.random()*ArmsChances[0]) + 1;

		
}

if(ZombiePic.style.display=='block'){
		 	
var d= Math.floor(Math.random()*ArmsChances[1]) + 1;
		 			
		 		}

		 			if (GoblinPic.style.display=='block'){
		 					//Zombie
		 					var d= Math.floor(Math.random()*ArmsChances[2]) + 1;

		 				}
		 					console.log('you rolled a' +d)
			
status1.innerHTML="you rolled " +d+".";
die6.innerHTML=d  
			if (d>=7) 
{	                    // Create a <p> element
YouHitLimb()
		dissapear()
		LimbDamage.style.display='block';
LimbDamage.onclick=function(){
				var ArmDama = new BodyPartsDmg(12)
 	ArmDama.BodyPartsDmg1()
 	console.log('goblin health'+goblin.MonsterHealth)
 	display()
 	MonsterDeath()
 	// return goblin.MonsterHealth=goblin.MonsterHealth-damage;
 	// ATTACK123()
}
}
else{
	YouMissed()
	
}

	}


//head
	legs.onclick=function(){
		if(OgerPic.style.display=='block'){

 			var d= Math.floor(Math.random()*LegChances[0]) + 1;
 		
}
		 	if(ZombiePic.style.display=='block'){
		 	
		 			var d= Math.floor(Math.random()*LegChances[3]) + 1;
		 		
}
		 			if (GoblinPic.style.display=='block'){
		 				
		 					var d= Math.floor(Math.random()*LegChances[2]) + 1;
		 				}

		 					status1.innerHTML="you rolled " +d+".";
		 					die6.innerHTML=d   
if (d>=7) {YouHitLimb();
		dissapear()
		    

		// YouHitLimb()

		LimbDamage.style.display='block';
LimbDamage.onclick=function(){
	var ArmDama = new BodyPartsDmg(15)
 	ArmDama.BodyPartsDmg1()
 	console.log('goblin health'+goblin.MonsterHealth)
 	MonsterDeath()
 	display()
 	console.log('goblin health'+goblin.MonsterHealths)

 	// ATTACK123()
 }
 }
 // 	DmgDice.style.display='none'
 // dice3.style.display='none'
 // dice4.style.display='none'


else{
	YouMissed()

}
	}
	//legs
head.onclick=function(){
		if(OgerPic.style.display=='block'){
 	 

 			var d= Math.floor(Math.random()*HeadChances[0]) + 1;
 		}

		 	if(ZombiePic.style.display=='block'){
		 		var d= Math.floor(Math.random()*HeadChances[3]) + 1;
		 	//Oger
		 		}
		 			if (GoblinPic.style.display=='block'){
		 					 				var d= Math.floor(Math.random()*HeadChances[2]) + 1;
		 					 			}
		 					//Zombie
		 			


		status1.innerHTML="you rolled " +d+".";
		die6.innerHTML=d       
if (d>=7) {
	
	YouHitLimb();
					dissapear()
	LimbDamage.style.display='block';
LimbDamage.onclick=function(){
var ArmDama = new BodyPartsDmg(50)
ArmDama.BodyPartsDmg1()
MonsterDeath()
console.log('goblin health'+goblin.MonsterHealth)
display()

// ATTACK123()
}
}
else{
	YouMissed()

}
	}
		 				
	//chests
	function chest(){
		if(OgerPic.style.display=='block'){
 	 	//Goblin
 			var d= Math.floor(Math.random()*ChestChances[0]) + 1;
 		}
		 	if(ZombiePic.style.display=='block'){
		 	
		 			//Oger
		 			var d= Math.floor(Math.random()*ChestChances[3]) + 1;
		 		}
		 			if (GoblinPic.style.display=='block'){
		 					//Zombie
		 					var d= Math.floor(Math.random()*ChestChances[2]) + 1;
		 				}

		 					status1.innerHTML="you rolled " +d+".";
		 						die6.innerHTML=d     
	if (d>=7) {
	  
		LimbDamage.style.display='block';
					dissapear()
					YouHitLimb()

LimbDamage.onclick=function(){

		var ArmDama = new BodyPartsDmg(10)
 	ArmDama.BodyPartsDmg1()
 	console.log(goblin.MonsterHealth)
 	display()
 	MonsterDeath()
 	// ATTACK123()
}
}
else{
	YouMissed()
	
}
	}

function AttackList2(){
	AttackList.style.display='inline'
//arms
	if(OgerPic.style.display=='block'){
		document.getElementById('arms1').innerHTML="chance of failure is 6/ "+ArmsChances[0];
	}
	if(ZombiePic.style.display=='block'){
document.getElementById('arms1').innerHTML="chance of failure is 6/ "+ArmsChances[1];
	}
	if (GoblinPic.style.display=='block'){
document.getElementById('arms1').textContent="chance of failure is 6/ "+ArmsChances[2];
//legs
	}
	if(OgerPic.style.display=='block'){
		document.getElementById('legs1').innerHTML="chance of failure is 6/ "+LegChances[0];
	}
	if(ZombiePic.style.display=='block'){
document.getElementById('legs1').innerHTML="chance of failure is 6/ "+LegChances[3];
	}
	if (GoblinPic.style.display=='block'){
document.getElementById('legs1').innerHTML="chance of failure is 6/ "+LegChances[2];
}
//head

	if(OgerPic.style.display=='block'){
		document.getElementById('head1').innerHTML="chance of failure is 6/ "+HeadChances[0];
	}
	if(ZombiePic.style.display=='block'){
document.getElementById('head1').innerHTML="chance of failure is 6/ "+HeadChances[3];
	}
	if (GoblinPic.style.display=='block'){
document.getElementById('head1').innerHTML="chance of failure is 6/ "+HeadChances[2];
//chest
	}
	if(OgerPic.style.display=='block'){
		document.getElementById('chest1').innerHTML="chance of failure is 6/ "+ChestChances[0];
	}
	if(ZombiePic.style.display=='block'){
document.getElementById('chest1').innerHTML="chance of failure is 6/ "+ChestChances[3];
	}
	if (GoblinPic.style.display=='block'){
document.getElementById('chest1').innerHTML="chance of failure is 6/ "+ChestChances[2];	//chest
}
}
//arms
// ArmHealth=ArmHealth,
// 	this.LegHealth=LegHealth,
// 	this.ChestHealth=ChestHealth,
// 	this.HeadHealth=HeadHealth
var element=document.getElementById('div1')
 

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

		if (d1+d2>7){
			ATTACK123()
		}
		else{
			YouMissedLimb()
			YouMissed()
		}
	}
		function ATTACK123(){
			if (document.getElementById('OgerPic').style.display=='block'){
				log.innerHTML='HIT roll for damage'
			
				DmgDice.style.display= "block";
				AtkDice.style.display="none";
				dice3.style.display='inline';
		dice4.style.display='inline';
			}
		
		else if  (document.getElementById('GoblinPic').style.display=='block'){
			
				log.innerHTML='HIT roll for damage'

				DmgDice.style.display= "block";
				AtkDice.style.display="none";
				dice3.style.display='inline';
		dice4.style.display='inline';
			
		}
		else if(document.getElementById('ZombiePic').style.display=='block'){
		
				log.innerHTML='HIT roll for damage'

				DmgDice.style.display= "block";
				AtkDice.style.display="none";
				dice3.style.display='inline';
		dice4.style.display='inline';
			
		}
		
		/// I need to figure out how to trigger the code else since the d1 and d2 isn't the trigger right now
		}
					function YouMissed(){

	if(document.getElementById('GoblinPic').style.display=='block'){
YouMissedLimb();
 goblin.Atk();
}
						
	else if(document.getElementById('ZombiePic').style.display=='block'){
	YouMissedLimb();
zombie.Atk();
		}
			else if(document.getElementById('OgerPic').style.display=='block'){
				YouMissedLimb();
	 Oger.Atk();
	}
							
									
							
		if(hp<=0){
		document.write('you died end of tutorial refresh to retry tutorial or you can always go back to Main Menu'+ result)	
		} 
	}						
					
		
function rollDice(){
		var  DgmDie1= Math.floor(Math.random()*12) + 9;
		var DgmDie2= Math.floor(Math.random()*6) + 1;
		var DGM=DgmDie2+DgmDie1
		var die3 = document.getElementById("die3");
	var die4 = document.getElementById("die4");
		//var diceTotal = document.getElementById.innerHTML
		die3.innerHTML=DgmDie1
				die4.innerHTML=DgmDie2
// var ArmDama = new BodyPartsDmg(15)
//  	ArmDama.BodyPartsDmg1()
//  	console.log(goblin.MonsterHealth)

		console.log( "DGM:" + DGM)

			if(document.getElementById('GoblinPic').style.display=='block'){
			goblin.MonsterHealth = goblin.MonsterHealth-DGM;
			alert( "dmg: " + DGM + " || goblin-health: " + goblin.MonsterHealth)
			}

			if(document.getElementById('ZombiePic').style.display=='block'){
				zombie.MonsterHealth = zombie.MonsterHealth-DGM;
			alert( "dmg: " + DGM + " || zombie-health: " + zombie.MonsterHealth)
			}

			if(document.getElementById('OgerPic').style.display=='block'){
				Oger.MonsterHealth = Oger.MonsterHealth-DGM;
			alert( "dmg: " + DGM + " || Oger-health: " + Oger.MonsterHealth)
			}
			MonstersTurn()
			MonsterDeath()
}

function MonstersTurn(){
			if(goblin.MonsterHealth>=0||Oger.MonsterHealth>=0||zombie.MonsterHealth>=0){
MonstersTurnText()

				if(document.getElementById('GoblinPic').style.display=='block'){
				// alert('goblin attacks');
			 goblin.Atk();
			}
			else if(document.getElementById('ZombiePic').style.display=='block'){
				// alert('zombie attacks');
			 zombie.Atk();
			}
			else if(document.getElementById('OgerPic').style.display=='block'){
				// alert('Oger attacks');
			 Oger.Atk();
			}
						
			}
		}


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
    document.getElementById('HealthMenu').innerHTML='health: '+hp + ' Exp:' +PlayerExp;
   // +" there will be more when I get the chance to make them *please note that stats will be different for different classes";
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
