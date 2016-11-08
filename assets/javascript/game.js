/*describe game flow here when not lazy
*/
$(document).ready( function() {
//characters, Han Solo, R2-D2, Chewbacca, Darth Vader
//hp - health points, ad - attack damage, cad - counter attack damage
var hanSolo = {
	name: "Han Solo",
	hp: 150,
	ad: 5,
	adGrowth: 5,
	cad: 10
};

var r2d2 = {
	name: "R2-D2",
	hp: 115,
	ad: 11,
	adGrowth: 11,
	cad: 5
};

var chewbacca = {
	name: "Chewbacca",
	hp: 180,
	ad: 8,
	adGrowth: 8,
	cad: 9
};

var darthVader = {
	name: "Darth Vader",
	hp: 200,
	ad: 10,
	adGrowth: 10,
	cad: 15
};
//global vars
var availableChars = [hanSolo, r2d2, chewbacca, darthVader];
var playerChar;
var currentDefender;
var remainingEnemies = 3;
//functions

/*start game should put all 4 available characters in the playerCharactersWrapper section as spans.
defender section should be empty. combat log should be empty. enemies should be empty. */
function startGame() {
	$("#playerName").text("You - Select Your Character");
	$(".defenderWrapper").html("");
	$(".combatLog").html("");
	$(".enemyCharactersWrapper").html("");
	$("#hanSoloHp").text(hanSolo.hp + " HP");
	$("#r2d2Hp").text(r2d2.hp + " HP");
	$("#chewbaccaHp").text(chewbacca.hp + " HP");
	$("#darthVaderHp").text(darthVader.hp + " HP");
}

function removeFromAvail(char) {
	if (availableChars.indexOf(char) >= 0) {
		availableChars.splice(availableChars.indexOf(char), 1);
	}
}

/*choose player char should be triggered by clicking a character at beginning of game.
should move all the unchosen characters to the remaining enemies section. */ 
function setPlayerChar() {
	/*if id of img clicked is hansolo, set player char to han solo etc*/
	/*this code is gross and obviously inefficient and im embarrassed that you're looking at it i promise i wont do it again*/
	$(".selectableChar").unbind("click");
	switch(this.id) {
		case "hanSolo": {
			playerChar = hanSolo;
			$("#hanSoloHp").attr("id", "playerHp");
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
			$("#r2d2Hp").attr("id", "playerHp");
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
			$("#chewbaccaHp").attr("id", "playerHp");
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
			$("#darthVaderHp").attr("id", "playerHp");
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
	$("#playerName").text("You - " + playerChar.name);
	//bind select enemy to click on selectable enemies
	$(".selectableEnemy").on("click", selectEnemy);

	console.log("player char name: " + playerChar.name);
	console.log("remaining enemies: " + remainingEnemies);
	console.log("player char stats: " + playerChar.hp + " " + playerChar.ad + " " + playerChar.cad);
}
/*select enemy should remove chosen enemy from remaining enemies section and place in defender section
and set currentenemy */
function selectEnemy() {
	if (currentDefender === undefined) {
		$(".defenderWrapper").html("");
		switch (this.id) {
			case "hanSolo": {
				currentDefender = hanSolo;
				$("#hanSolo").appendTo(".defenderWrapper");
				$("#hanSoloHp").appendTo(".defenderWrapper");
				$("#hanSoloHp").attr("id", "defenderHp");
			}
			break;
			case "r2d2": {
				currentDefender = r2d2;
				$("#r2d2").appendTo(".defenderWrapper");
				$("#r2d2Hp").appendTo(".defenderWrapper");
				$("#r2d2Hp").attr("id", "defenderHp");
			}
			break;
			case "chewbacca": {
				currentDefender = chewbacca;
				$("#chewbacca").appendTo(".defenderWrapper");
				$("#chewbaccaHp").appendTo(".defenderWrapper");
				$("#chewbaccaHp").attr("id", "defenderHp");
			}
			break;
			case "darthVader": {
				currentDefender = darthVader;
				$("#darthVader").appendTo(".defenderWrapper");
				$("#darthVaderHp").appendTo(".defenderWrapper");
				$("#darthVaderHp").attr("id", "defenderHp");
			}
			break;
		}
		console.log(currentDefender);
		$(this).unbind("click");
		$("#defenderName").text("Defender - " + currentDefender.name);
	}
}

function printCombatText() {
	$(".combatLog").html("<p>You hit " + currentDefender.name + " for " + playerChar.ad + "!</p><p>" + currentDefender.name + " hit you for " + currentDefender.cad + "!</p>");
}

function updateHp() {
	$("#playerHp").text(playerChar.hp + " HP");
	$("#defenderHp").text(currentDefender.hp + " HP");
}

function playerDeath() {
	alert("You have died. You lose. Click 'Ok' to try again.");
	location.reload();
}
/*enemy defeated clears the defender section and prompts the user to select a new enemy.
sets current defender to undefined to enable clicks on remaining enemies
checks to see that there are enemies remaining, if there aren't, run victory*/
function enemyDefeated() {
	$(".defenderWrapper").html("");
	$(".defenderWrapper").html("<p>You have defeated " + currentDefender.name + ". Select your next opponent.");
	currentDefender = undefined;
	remainingEnemies--;
	console.log(remainingEnemies);
	if (remainingEnemies === 0) {
		victory();
	}
}
function victory() {
	alert("gj. click 'ok' to play this sweet game again.");
	location.reload();
}
/*player attack should attack defender for damage = to players ad. then increase players ad by adGrowth.
then player should lose hp = to amount of cad enemy has*/
function playerAttack() {
	currentDefender.hp = (currentDefender.hp - playerChar.ad);
	playerChar.hp = (playerChar.hp - currentDefender.cad);
	playerChar.ad = playerChar.ad + playerChar.adGrowth;
	printCombatText()
	console.log(currentDefender.name + " hp: " + currentDefender.hp);
	console.log(playerChar.name + " hp: " + playerChar.hp);
	console.log(playerChar.name + " ad: " + playerChar.ad);
	updateHp();
	//if characters take fatal damage
	if (playerChar.hp <= 0) {
		playerDeath();
	} else if (currentDefender.hp <= 0) {
		enemyDefeated();
	}
}

startGame();
//when an image with class "selectableChar" is clicked, set that character to playerChar
$(".selectableChar").on("click", setPlayerChar);
$("#attackButton").on("click", playerAttack);
})
