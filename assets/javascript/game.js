//global vars
//characters, Han Solo, R2-D2, Chewbacca, Darth Vader
//hp - health points, ad - attack damage, cad - counter attack damage
var hanSolo = {
	name: "Han Solo",
	hp: 150,
	ad: 5,
	cad: 12
};

var r2d2 = {
	name: "R2-D2",
	hp: 115,
	ad: 7,
	cad: 5,
};

var chewbacca = {
	name: "Chewbacca",
	hp: 180,
	ad: 8,
	cad: 9
};

var darthVader = {
	name: "Darth Vader",
	hp: 200,
	ad: 10,
	cad: 20
};

var availableChars = [hanSolo, r2d2, chewbacca, darthVader];
var playerChar;
var currentDefender;
var remainingEnemies = [];
//functions

/*start game should put all 4 available characters in the playerCharactersWrapper section as spans.
defender section should be empty. combat log should be empty. enemies should be empty. */
function startGame() {
	$(".defenderWrapper").html("");
	$(".combatLog").html("");
	$(".enemyCharactersWrapper").html("");
}

function removeFromAvail(char) {
	availableChars.splice(availableChars.indexOf(char), 1);
}
/*choose player char should be triggered by clicking a character at beginning of game.
should move all the unchosen characters to the remaining enemies section. */ 
function setPlayerChar() {
	/*if id of img clicked is hansolo, set player char to han solo etc
	IS THERE A BETTER WAY TO DO THIS??????????
	would like to be able to do something like playerchar = document.getElementById(this.id).id 
	but that returns a string value, not a reference to a variable*/
	switch(this.id) {
		case "hanSolo": {
			playerChar = hanSolo;
			removeFromAvail(hanSolo);
			$("#r2d2").appendTo(".enemyCharactersWrapper");
		}
		break;
		case "r2d2": {playerChar = r2d2; removeFromAvail(r2d2);}
		break;
		case "chewbacca": {playerChar = chewbacca; removeFromAvail(chewbacca);}
		break;
		case "darthVader": {playerChar = darthVader; removeFromAvail(darthVader);}
		break;
	}
	//HOW TO CHANGE ELEMENT TO MAKE CLICK NOT WORK ON IT ANYMORE?
	console.log(playerChar);
	console.log(availableChars);
	remainingEnemies = availableChars;
	console.log("remaining enemies: " + remainingEnemies);
}
/*select enemy should remove chosen enemy from remaining enemies section and place in defender section
and set currentenemy */
function selectEnemy() {

}
/*player attack should attack defender for damage = to players ad. then increase players ad by ad.
then player should lose hp = to amount of cad enemy has*/
function playerAttack() {

}

//game flow
$(document).ready( function() {
	//when an image with class "selectableChar" is clicked, set that character to playerChar
	$(".selectableChar").on("click", setPlayerChar);
	$(".selectableChar").on("click", function() {
		console.log(this);
		console.log(this.class);
		$(this).attr("class", "selected");
	})














})