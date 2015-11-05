#pragma strict

var cutscene;
var playerInteraction;
var gamestate;
var bubblesOnScreen;

var cutscene1 = true;
var cutscene2 = false;


function Start () {
	cutscene = true;
	playerInteraction = false;
	bubblesOnScreen = false; 
	
	gamestate = "cutscene";

}

function Update () {
	if(gamestate == "player" && bubblesOnScreen == true)
	{
			for(var fooObj : GameObject in GameObject.FindGameObjectsWithTag("CutsceneBubble"))
			{
				Destroy(fooObj);
			}
			bubblesOnScreen == false;
			
	}

}