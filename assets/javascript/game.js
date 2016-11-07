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
//global vars
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
	if (availableChars.indexOf(char) >= 0) {
		availableChars.splice(availableChars.indexOf(char), 1);
	}
}

/*choose player char should be triggered by clicking a character at beginning of game.
should move all the unchosen characters to the remaining enemies section. */ 
function setPlayerChar() {
	/*if id of img clicked is hansolo, set player char to han solo etc
	IS THERE A BETTER WAY TO DO THIS??????????
	would like to be able to do something like playerchar = document.getElementById(this.id).id 
	but that returns a string value, not a reference to a variable*/
	$(".selectableChar").unbind("click");
	switch(this.id) {
		case "hanSolo": {
			playerChar = hanSolo;
			removeFromAvail(hanSolo);
			console.log(this);
			$(this).attr("class", "selected");
			$("#r2d2").attr("class", "selectableEnemy");
			$("#r2d2").appendTo(".enemyCharactersWrapper");
			$("#r2d2Hp").appendTo(".enemyCharactersWrapper");
			$("#chewbacca").attr("class", "selectableEnemy");
			$("#chewbacca").appendTo(".enemyCharactersWrapper");
			$("#chewbaccaHp").appendTo(".enemyCharactersWrapper");
			$("#darthVader").attr("class", "selectableEnemy");
			$("#darthVader").appendTo(".enemyCharactersWrapper");
			$("#darthVaderHp").appendTo(".enemyCharactersWrapper");
		}
		break;
		case "r2d2": {
			playerChar = r2d2;
			removeFromAvail(r2d2);
			$(this).attr("class", "selected");
			$("#hanSolo").attr("class", "selectableEnemy");
			$("#hanSolo").appendTo(".enemyCharactersWrapper");
			$("#hanSoloHp").appendTo(".enemyCharactersWrapper");
			$("#chewbacca").attr("class", "selectableEnemy");
			$("#chewbacca").appendTo(".enemyCharactersWrapper");
			$("#chewbaccaHp").appendTo(".enemyCharactersWrapper");
			$("#darthVader").attr("class", "selectableEnemy");
			$("#darthVader").appendTo(".enemyCharactersWrapper");
			$("#darthVaderHp").appendTo(".enemyCharactersWrapper");
		}
		break;
		case "chewbacca": {
			playerChar = chewbacca;
			removeFromAvail(chewbacca);
			$(this).attr("class", "selected");
			$("#hanSolo").attr("class", "selectableEnemy");
			$("#hanSolo").appendTo(".enemyCharactersWrapper");
			$("#hanSoloHp").appendTo(".enemyCharactersWrapper");
			$("#r2d2").attr("class", "selectableEnemy");
			$("#r2d2").appendTo(".enemyCharactersWrapper");
			$("#r2d2Hp").appendTo(".enemyCharactersWrapper");
			$("#darthVader").attr("class", "selectableEnemy");
			$("#darthVader").appendTo(".enemyCharactersWrapper");
			$("#darthVaderHp").appendTo(".enemyCharactersWrapper");
		}
		break;
		case "darthVader": {
			playerChar = darthVader;
			removeFromAvail(darthVader);
			$(this).attr("class", "selected");
			$("#hanSolo").attr("class", "selectableEnemy");
			$("#hanSolo").appendTo(".enemyCharactersWrapper");
			$("#hanSoloHp").appendTo(".enemyCharactersWrapper");
			$("#r2d2").attr("class", "selectableEnemy");
			$("#r2d2").appendTo(".enemyCharactersWrapper");
			$("#r2d2Hp").appendTo(".enemyCharactersWrapper");
			$("#chewbacca").attr("class", "selectableEnemy");
			$("#chewbacca").appendTo(".enemyCharactersWrapper");
			$("#chewbaccaHp").appendTo(".enemyCharactersWrapper");
		}
		break;
	}
	//HOW TO CHANGE ELEMENT TO MAKE CLICK NOT WORK ON IT ANYMORE?
	remainingEnemies = availableChars;
	availableChars = [];
	//bind select enemy to click on selectable enemies
	$(".selectableEnemy").on("click", selectEnemy);

	console.log("player char: " + playerChar);
	console.log("available chars: " + availableChars);
	console.log("remaining enemies: " + remainingEnemies);
	console.log("player char stats: " + playerChar.hp + " " + playerChar.ad + " " + playerChar.cad);
}
/*select enemy should remove chosen enemy from remaining enemies section and place in defender section
and set currentenemy */
function selectEnemy() {
	switch (this.id) {
		case "hanSolo": {
			currentDefender = hanSolo;
			$("#hanSolo").appendTo(".defenderWrapper");
			$("#hanSoloHp").appendTo(".defenderWrapper");
		}
		case "r2d2": {
			currentDefender = r2d2;
			$("#r2d2").appendTo(".defenderWrapper");
			$("r2d2Hp").appendTo(".defenderWrapper");
		}
		case "chewbacca": {
			currentDefender = chewbacca;
			$("#chewbacca").appendTo(".defenderWrapper");
			$("#chewbacca").appendTo(".defenderWrapper");
		}
		case "darthVader": {
			currentDefender = darthVader;
			$("#darthVader").appendTo(".defenderWrapper");
			$("darthVaderHp").appendTo(".defenderWrapper");
		}
	}
	console.log(currentDefender);
	$(this).unbind("click");
}
function printCombatText() {
	console.log("You hit " + currentDefender.name + " for " + playerChar.ad + "!");
	console.log(currentDefender.name + " hit you for " + currentDefender.cad + "!");
}
function updateHp() {

}
/*player attack should attack defender for damage = to players ad. then increase players ad by ad.
then player should lose hp = to amount of cad enemy has*/
function playerAttack() {
	currentDefender.hp = (currentDefender.hp - playerChar.ad);
	playerChar.hp = (playerChar.hp - currentDefender.cad);
	playerChar.ad = playerChar.ad + playerChar.ad;
	console.log("current defender hp: " + currentDefender.hp);
	console.log("player hp: " + playerChar.hp);
	console.log("player ad: " + playerChar.ad);
}

//game flow
$(document).ready( function() {
	startGame();
	//when an image with class "selectableChar" is clicked, set that character to playerChar
	$(".selectableChar").on("click", setPlayerChar);

	$("#attackButton").on("click", playerAttack);

})

//set methods for objects to move them around dom
//try .each() to look through elements to test for classes????
//jquery target variables in js not just dom elements