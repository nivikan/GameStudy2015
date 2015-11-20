#pragma strict

var DarkenScene1 : GameObject;
var DarkenScene2 : GameObject;
var DarkenScene3 : GameObject;
var DarkenScene4 : GameObject;

var allCharacters : Animator;


//var counter = System.Math.Floor(Time.time);
var scenes : ScenesScript;
var gamestate : GameState;



var game : GameObject;
var anim : Animator;



//Create a hashtable of dialogues which will contain all scenes and dialoque for each scenes
var dialogues : Hashtable;
var Set1 : Hashtable;

// this is the dialogue being said now
var currentDialogue;

//temp var to store lines
var line;

//get the universal script to store values
var storeVars : storeVars;



var cratorSet = "inCamp";
var konstalSet = "inCamp";
var alunaSet = "inTent";
var estherSet = "inTent";
var milkySet = "inTent";




////////////////////////////////////////
///////////  START
////////////////////////////////////////


function Start () {

	//find the variables so you dont need to define them
	game = GameObject.Find("GameObject");
	anim = GetComponent(Animator);
	
	//find the universal script withing objects and set variable
	storeVars = game.GetComponent("storeVars");
	scenes = game.GetComponent("ScenesScript");
	gamestate = game.GetComponent("GameState");
	
	DarkenScene1 = GameObject.Find("DarkenScene1");
	DarkenScene2 = GameObject.Find("DarkenScene2");
	DarkenScene3 = GameObject.Find("DarkenScene3");
	DarkenScene4 = GameObject.Find("DarkenScene4");



	line = 0;
	//create a temporary replicated hashtable
	//Set1 = new Hashtable();


	//create a different dialoque sets and add them to the hashtable


////// MILKY & ALUNA in WOODS
	var scene: Array;

	scene = new Array();
	scene.Push(["Milky", "hello"]);
	scene.Push(["Aluna", "o hai"]);
	scene.Push(["Milky", "ooo"]);

	Set1.Add("milky_aluna_woods", scene);
	

////// MILKY & ESTHER in HILL
	var scene2: Array;

	scene2 = new Array();
	scene2.Push(["Milky", "Bonjour"]);
	scene2.Push(["Esther", "Ca Va?"]);
	scene2.Push(["Milky", "Ca Va Bien. Tu?"]);
	
	Set1.Add("milky_esther_hill", scene2);


////// ALUNA & ESTHER in WOODS
	var scene3: Array;

	scene3 = new Array();
	scene3.Push(["Aluna", "Who the Fuck Are you?"]);
	scene3.Push(["Esther", "Who the Fuck are you?"]);
	scene3.Push(["Aluna", "I asked you first"]);
	scene3.Push(["Esther", "I asked you second"]);
	
	Set1.Add("aluna_esther_woods", scene3);
	



}



function Update () { 


cratorSet = storeVars.cratorSet;
konstalSet = storeVars.konstalSet;
alunaSet = storeVars.alunaSet;
estherSet = storeVars.estherSet;
milkySet = storeVars.milkySet;



////////////////////////////////////////
///////////  CHECK THE TENT
////////////////////////////////////////






////////////////////////////////////////
///////////  CHECK THE CAMP
////////////////////////////////////////







////////////////////////////////////////
///////////  CHECK THE WOODS
////////////////////////////////////////

	if ((alunaSet == "inWoods") && (milkySet == "inWoods"))
	{
		print ("milky_aluna_woods");
		//scenes.makeCharacterSpeak("Esther", "How did you even get pregnant? Was it boy 2?");
		
		//anim.Play("scene1_milky_aluna_woods");


	}
	
	if ((alunaSet == "inWoods") && (estherSet == "inWoods") && (konstalSet != "inWoods") && (cratorSet != "inWoods") && (milkySet != "inWoods") )
	{
		print ("aluna_esther_woods");


	}



////////////////////////////////////////
///////////  CHECK THE Hill
////////////////////////////////////////

	if ((estherSet == "inHill") && (milkySet == "inHill"))
	{
		print ("milky_esther_hill");


	}








}


/*
function makeCharaSpeak(lines:Array )
{
	scenes.makeCharacterSpeak("Esther", "How did you even get pregnant? Was it boy 2?");
	
	for(var i : int = 0; i < lines.length; i++)
    {
        Debug.Log("Creating dialogue number: " + i);
        var arr = lines[i];
        var chara = arr[0];
        var dialoque = arr[1];
        scenes.makeCharacterSpeak( chara , dialoque);
    }
    

}
*/