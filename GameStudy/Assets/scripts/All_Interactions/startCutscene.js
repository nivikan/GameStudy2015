//#pragma strict

public var cutsceneState = 0;

var currentConvoName = "";
var currentConvo: Array;
currentConvo = new Array();
var mouseDownNumber = 0;
var isInConvo = false;
var chara;
var dialogue;
var emotion;


var DarkenScene1 : GameObject;
var DarkenScene2 : GameObject;
var DarkenScene3 : GameObject;
var DarkenScene4 : GameObject;

var SpeakingChar1: GameObject;
var SpeakingChar2: GameObject;
var blank: Sprite;

var scenes : ScenesScript;
var gamestate : GameState;



var storeVars : storeVars;
var aluna : GameObject;
var konstal : GameObject;
var crator : GameObject;
var esther : GameObject;
var milky : GameObject;

var konstalPregAnim : Animator;
var spiderAnim : Animator;
var blackFlash : Animator;

var Set1 : Hashtable;
Set1 = new Hashtable();

function Start () {

	var game = GameObject.Find("GameObject");
	storeVars = game.GetComponent("storeVars");
	scenes = game.GetComponent("ScenesScript");
	gamestate = game.GetComponent("GameState");
	
	aluna = GameObject.Find("Aluna");
	esther = GameObject.Find("Esther");
	milky = GameObject.Find("Milky");
	konstal = GameObject.Find("Konstal");
	crator = GameObject.Find("Crator");
	
	DarkenScene1 = GameObject.Find("DarkenScene1");
	DarkenScene2 = GameObject.Find("DarkenScene2");
	DarkenScene3 = GameObject.Find("DarkenScene3");
	DarkenScene4 = GameObject.Find("DarkenScene4");
	SpeakingChar1 = GameObject.Find("SpeakingChar1");
	SpeakingChar2 = GameObject.Find("SpeakingChar2");
	
	
	scene = new Array();
	scene.Push(["Konstal", "Well I’m here.", "normal"]);	
	scene.Push(["Konstal", "Guess I should look around to see what I can find.", "angry"]);	
	Set1.Add("konstal_preg_1",scene);
	
	scene = new Array();
	scene.Push(["Konstal", "Not here….", "normal"]);	
	scene.Push(["Konstal", "…", "normal"]);	
	scene.Push(["Konstal", "Aaaargh! I told them there wouldn’t be anything here! ", "angry"]);	
	scene.Push(["Konstal", "Figures, I get stuck doing their dirty work…", "angry"]);	
	scene.Push(["Konstal", "Huh, it’s getting dark. Might as well take a nap here.", "sigh"]);
	Set1.Add("konstal_preg_2",scene);
	
	scene = new Array();
	scene.Push(["Konstal", "I had the weirdest dream...", "surprise"]);	
	scene.Push(["Konstal", "Why does it feel like I have a rock in my gut?", "angry"]);	
	scene.Push(["Konstal", "...", "sad"]);	
	Set1.Add("konstal_preg_3",scene);	
	
	

}

function Update () {

	if (storeVars.inCutscene == true)
	{
		aluna.SetActive(false);
		crator.SetActive(false);
		esther.SetActive(false);
		milky.SetActive(false);
		konstal.SetActive(false);
		
		if (storeVars.currentCutscene == "konstalPreg")
		{
			if (cutsceneState == 0)
			{
				blackFlash.Play("fadeIn-fadeOut");
				isInConvo = true;
		    	currentConvoName ="konstal_preg_1";
		    	currentConvo = Set1["konstal_preg_1"];
				makeConvo("konstal_preg_1");
			
			}
			
			if (cutsceneState == 1)
			{
				konstalPregAnim.Play("konstal_preg_1");
			}
			else if (cutsceneState == 2)
			{
				makeConvo("konstal_preg_2");
			}
			else if (cutsceneState == 3)
			{
				konstalPregAnim.Play("konstal_preg_2");
				spiderAnim.Play("spider_anim_1");
			}
			else if (cutsceneState == 4)
			{
				konstalPregAnim.Play("konstal_preg_3");
			}
			else if (cutsceneState == 5)
			{
				makeConvo("konstal_preg_3");
			}
			else if (cutsceneState == 6)
			{
				konstalPregAnim.Play("konstal_preg_4");
			}
			else if (cutsceneState == 6)
			{
				konstalPregAnim.Play("konstal_preg_4");
			}
			
			
			
		}
		
		//Continue the current conversation
	if (isInConvo == true)
	{
		makeConvo(currentConvoName);
	}
	
	
	}
	else if (aluna.active == false)
		{
			aluna.SetActive(true);
			crator.SetActive(true);
			esther.SetActive(true);
			milky.SetActive(true);
			konstal.SetActive(true);
			
			konstalPregAnim.Play("konstal_preg_0");
		
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
				print(currentConvo.length);
				gamestate.characterSpeaking = "none";
				SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				//isInConvo = false;
				//mouseDownNumber = 0;
				isInConvo = false;
				mouseDownNumber = 0;
				Set1.Remove(stringName);
				storeVars.moved = false;
			
			}
			else
			{
				//print (currentConvo);
				chara = currentConvo[mouseDownNumber][0];
		        dialogue = currentConvo[mouseDownNumber][1];
		        emotion = currentConvo[mouseDownNumber][2];
		 	    scenes.makeCharacterSpeak( chara , dialogue, emotion);
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
				SpeakingChar1.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				SpeakingChar2.GetComponent.<UnityEngine.UI.Image>().sprite = blank;
				makeScreensLight();
				
				isInConvo = false;
				mouseDownNumber = 0;
				Set1.Remove(stringName);
				storeVars.moved = false;
			
			}
			else
			{
				//print (currentConvo);
				chara = currentConvo[mouseDownNumber][0];
		        dialogue = currentConvo[mouseDownNumber][1];
		        emotion = currentConvo[mouseDownNumber][2];
		 	    scenes.makeCharacterSpeak( chara , dialogue, emotion);
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




