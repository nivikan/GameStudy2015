#pragma strict

var cutscene;
var playerInteraction;
var gamestate;
var bubblesOnScreen;
var SpeakingChar1: GameObject;
var SpeakingChar2: GameObject;
var blank: Sprite;


var cutscene1 = true;
var cutscene2 = false;

var characterSpeaking = "1";

//keep track of story sequencing
var scene1=true;
var scene2=false;
var scene3=false;
var scene4=false;
var scene5=false;


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
			characterSpeaking = "none";
		SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
		SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
			
	}
	if(gamestate == "cutscene" && characterSpeaking == "none")
	{
		characterSpeaking = "1";
	}

}