//#pragma strict

var DarkenScene1 : GameObject;
var DarkenScene2 : GameObject;
var DarkenScene3 : GameObject;
var DarkenScene4 : GameObject;

var SpeakingChar1: GameObject;
var SpeakingChar2: GameObject;
var blank: Sprite;

var allCharacters : Animator;

var isInConvo = false;
var currentConvo: Array;
currentConvo = new Array();
var mouseDownNumber = 0;
var chara;
var dialogue;

//var counter = System.Math.Floor(Time.time);
var scenes : ScenesScript;
var gamestate : GameState;



var game : GameObject;
var anim : Animator;



//Create a hashtable of dialogues which will contain all scenes and dialoque for each scenes
var dialogues : Hashtable;
var Set1 : Hashtable;

//(temp) this is the dialogue being said now
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

var scene: Array;
var aluna_milky_woods = false;
var scene2: Array;
var esther_milky_hill = false;
var scene3: Array;
var aluna_esther_hill = false;


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
	SpeakingChar1 = GameObject.Find("SpeakingChar1");
	SpeakingChar2 = GameObject.Find("SpeakingChar2");



	line = 0;
	//create a temporary replicated hashtable
	//Set1 = new Hashtable();


	//create a different dialoque sets and add them to the hashtable


	Set1 = new Hashtable();

////// MILKY & ESTHER in HILL

	scene2 = new Array();
	scene2.Push(["Milky", "Bonjour"]);
	scene2.Push(["Esther", "Ca Va?"]);
	scene2.Push(["Milky", "Ca Va Bien. Tu?"]);
	
	Set1.Add("esther_milky_hill",scene2);

////// MILKY & ALUNA in WOODS

	scene = new Array();
	scene.Push(["Milky", "hello"]);
	scene.Push(["Aluna", "o hai"]);
	scene.Push(["Milky", "ooo"]);
	
	Set1.Add("aluna_milky_woods",scene);

////// ALUNA & ESTHER in WOODS

	scene3 = new Array();
	scene3.Push(["Aluna", "Who the Fuck Are you?"]);
	scene3.Push(["Esther", "Who the Fuck are you?"]);
	scene3.Push(["Aluna", "I asked you first"]);
	scene3.Push(["Esther", "I asked you second"]);
	
	Set1.Add("aluna_esther_woods",scene3);
	
	

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
		
		//anim.Play("scene1_milky_aluna_woods");
		
    	if(Set1.Contains("aluna_milky_woods"))
    	{
    		currentConvo = Set1["aluna_milky_woods"];
    		isInConvo = true;
    		makeConvo("aluna_milky_woods");
    	}


	}
	
	if ((alunaSet == "inWoods") && (estherSet == "inWoods") && (konstalSet != "inWoods") && (cratorSet != "inWoods") && (milkySet != "inWoods") )
	{
		print ("aluna_esther_woods");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("aluna_milky_woods"))
    	{
    		currentConvo = Set1["aluna_esther_woods"];
    		isInConvo = true;
    		makeConvo("aluna_esther_woods");
    	}


	}



////////////////////////////////////////
///////////  CHECK THE Hill
////////////////////////////////////////

	if ((estherSet == "inHill") && (milkySet == "inHill"))
	{
		print ("milky_esther_hill");
		
		//anim.Play("scene1_aluna_esther_woods");
		
    	if(Set1.Contains("esther_milky_hill"))
    	{
    		currentConvo = Set1["esther_milky_hill"];
    		isInConvo = true;
    		makeConvo("esther_milky_hill");
    	}


	}

}







////////////////////////////////////////
///////////  Functions
////////////////////////////////////////




function makeConvo(stringName)
{
	if (mouseDownNumber == 0)
	{
		if (isInConvo == true)
		{
			if (mouseDownNumber == currentConvo.length)
			{
				//THIS IS WHERE CONVO ENDS!!!1
				print ("working");
				gamestate.characterSpeaking = "none";
				print ("working 2");
				SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				//isInConvo = false;
				//mouseDownNumber = 0;
			
			}
			else
			{
				print (currentConvo);
				chara = currentConvo[mouseDownNumber][0];
		        dialoque = currentConvo[mouseDownNumber][1];
		 	    scenes.makeCharacterSpeak( chara , dialoque);
		 	    mouseDownNumber ++;
	 	    }
		}
	
	}
	else if(Input.GetMouseButtonUp(0) == true)
	{
		if (isInConvo == true)
		{
			if (mouseDownNumber == currentConvo.length)
			{
				gamestate.characterSpeaking = "none";
				print ("working 2");
				SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				makeScreensLight();
				
				isInConvo = false;
				mouseDownNumber = 0;
				Set1.Remove(stringName);
			
			}
			else
			{
				print (currentConvo);
				chara = currentConvo[mouseDownNumber][0];
		        dialoque = currentConvo[mouseDownNumber][1];
		 	    scenes.makeCharacterSpeak( chara , dialoque);
		 	    mouseDownNumber ++;
	 	    }
		}
	}

}

function makeScreensLight(){
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, 0);


}