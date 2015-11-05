#pragma strict
import System.Math;

var Aluna: GameObject;
var Esther: GameObject;
var Milky: GameObject;
var Crator: GameObject;
var Konstal: GameObject;
var selectedChar: GameObject;
var camera: GameObject;
var positionx;
var positiony = 3.28;
var DarkenScene1 : GameObject;
var DarkenScene2 : GameObject;
var DarkenScene3 : GameObject;
var DarkenScene4 : GameObject;

var AlunaImage: Sprite;
var EstherImage: Sprite;
var MilkyImage: Sprite;
var CratorImage: Sprite;
var KonstalImage: Sprite;

var defaultImage: Sprite;

function Start () {

}

function Update () {



}

function makeCharacterSpeak(character, text){

var makeBubbleScript : MakeBubble = GetComponent(MakeBubble);

	
    if(character == "Aluna")
	{
		selectedChar = Aluna;
		findLocationOfChar();	
		defaultImage = AlunaImage;	
	}
	
	if(character == "Esther")
	{
		selectedChar = Esther;
		findLocationOfChar();
		defaultImage = EstherImage;
	}
	
	if(character == "Milky")
	{
		selectedChar = Milky;
		findLocationOfChar();
		defaultImage = MilkyImage;
	}
	
    if(character == "Crator")
	{
		selectedChar = Crator;
		findLocationOfChar();
		defaultImage = CratorImage;
	}
	
		if(character == "Konstal")
	{
		selectedChar = Konstal;
		findLocationOfChar();
		defaultImage = KonstalImage;
	}
	
	var variableScript : variables = selectedChar.GetComponent(variables);
	
	makeBubbleScript.makeBubble(positionx, positiony, text, variableScript.bubbleColor, variableScript.textColor, defaultImage);


}

function findLocationOfChar() {
	if(selectedChar.transform.position.x >= -8.11 && selectedChar.transform.position.x < -4.48)
	{
	 positionx = -6.55;
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	}
	
	if(selectedChar.transform.position.x >= -4.48 && selectedChar.transform.position.x < -0.13)
	{
	 positionx = -2.17;
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	}
	
	if(selectedChar.transform.position.x >= -0.13 && selectedChar.transform.position.x < 4.26)
	{
	 positionx = 2.2;
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	}
	
	if(selectedChar.transform.position.x >= 4.26 && selectedChar.transform.position.x < 8.8)
	{
	 positionx = 6.58;
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	}

}