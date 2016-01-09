#pragma strict
var storeVars : storeVars;
function Start () {

}

function Update () {

if(Input.GetKeyDown("r")){

Application.LoadLevel("menu");

}
if(Input.GetKeyDown("a")){

Application.LoadLevel("MainScene_Part1");

}
if(Input.GetKeyDown("b")){

Application.LoadLevel("MainScene_Part2");

}

if((  Application.loadedLevelName == "MainScene_Part1"  ) && (Input.GetKeyDown("c")))
{

	var game = GameObject.Find("GameObject");
	storeVars = game.GetComponent("storeVars");
	
	storeVars.startPart2 = true;
	storeVars.alunaLookedAtFootprints = true;
	storeVars.alunaKnowsMilkyFootprints = true;
	storeVars.estherLookedAtFootprints = true;
	storeVars.milkyLookedAtFootprints = true;
	storeVars.konstalLookedAtFootprints = true;
	storeVars.cratorLookedAtFootprints = true;
	storeVars.alunaShowedAllFootprints = true;

}


}

