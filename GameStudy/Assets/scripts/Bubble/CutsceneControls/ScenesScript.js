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

var AlunaImageAngry: Sprite;
var EstherImageAngry: Sprite;
var MilkyImageAngry: Sprite;
var CratorImageAngry: Sprite;
var KonstalImageAngry: Sprite;

var AlunaImageSad: Sprite;
var EstherImageSad: Sprite;
var MilkyImageSad: Sprite;
var CratorImageSad: Sprite;
var KonstalImageSad: Sprite;

var AlunaImageHappy: Sprite;
var EstherImageHappy: Sprite;
var MilkyImageHappy: Sprite;
var CratorImageHappy: Sprite;
var KonstalImageHappy: Sprite;

var AlunaImageSmirk: Sprite;
var EstherImageSmirk: Sprite;
var MilkyImageSmirk: Sprite;
var CratorImageSmirk: Sprite;
var KonstalImageSmirk: Sprite;

var AlunaImageSigh: Sprite;
var EstherImageSigh: Sprite;
var MilkyImageSigh: Sprite;
var CratorImageSigh: Sprite;
var KonstalImageSigh: Sprite;

var defaultImage: Sprite;

function Start () {

}

function Update () {



}

function makeCharacterSpeak(character, text, emotion){

var makeBubbleScript : MakeBubble = GetComponent(MakeBubble);

	
    if(character == "Aluna")
	{
		selectedChar = Aluna;
		findLocationOfChar();	
		defaultImage = AlunaImage;
		/*
				//Choose Expression Image
				if (emotion == "normal")
				{
					defaultImage = AlunaImage;
				}	
				if (emotion == "angry")
				{
					defaultImage = AlunaImageAngry;
				}
				if (emotion == "happy")
				{
					defaultImage = AlunaImageHappy;
				}	
				if (emotion == "sad")
				{
					defaultImage = AlunaImageSad;
				}
				if (emotion == "smirk")
				{
					defaultImage = AlunaImageSmirk;
				}	
				if (emotion == "sigh")
				{
					defaultImage = AlunaImageSigh;
				}
		*/
	}
	
	if(character == "Esther")
	{
		selectedChar = Esther;
		findLocationOfChar();
		defaultImage = EstherImage;
		/*
			//Choose Expression Image
				if (emotion == "normal")
				{
					defaultImage = EstherImage;
				}	
				if (emotion == "angry")
				{
					defaultImage = EstherImageAngry;
				}
				if (emotion == "happy")
				{
					defaultImage = EstherImageHappy;
				}	
				if (emotion == "sad")
				{
					defaultImage = EstherImageSad;
				}
				if (emotion == "smirk")
				{
					defaultImage = EstherImageSmirk;
				}	
				if (emotion == "sigh")
				{
					defaultImage = EstherImageSigh;
				}
			*/
	}
	
	if(character == "Milky")
	{
		selectedChar = Milky;
		findLocationOfChar();
		defaultImage = MilkyImage;
		/*
				//Choose Expression Image
				if (emotion == "normal")
				{
					defaultImage = MilkyImage;
				}	
				if (emotion == "angry")
				{
					defaultImage = MilkyImageAngry;
				}
				if (emotion == "happy")
				{
					defaultImage = MilkyImageHappy;
				}	
				if (emotion == "sad")
				{
					defaultImage = MilkyImageSad;
				}
				if (emotion == "smirk")
				{
					defaultImage = MilkyImageSmirk;
				}	
				if (emotion == "sigh")
				{
					defaultImage = MilkyImageSigh;
				}
		*/
	}
	
    if(character == "Crator")
	{
		selectedChar = Crator;
		findLocationOfChar();
		defaultImage = CratorImage;
		/*
				//Choose Expression Image
				if (emotion == "normal")
				{
					defaultImage = CratorImage;
				}	
				if (emotion == "angry")
				{
					defaultImage = CratorImageAngry;
				}
				if (emotion == "happy")
				{
					defaultImage = CratorImageHappy;
				}	
				if (emotion == "sad")
				{
					defaultImage = CratorImageSad;
				}
				if (emotion == "smirk")
				{
					defaultImage = CratorImageSmirk;
				}	
				if (emotion == "sigh")
				{
					defaultImage = CratorImageSigh;
				}
		*/
	}
	
		if(character == "Konstal")
	{
		selectedChar = Konstal;
		findLocationOfChar();
		defaultImage = KonstalImage;
		/*
				//Choose Expression Image
				if (emotion == "normal")
				{
					defaultImage = KonstalImage;
				}	
				if (emotion == "angry")
				{
					defaultImage = KonstalImageAngry;
				}
				if (emotion == "happy")
				{
					defaultImage = KonstalImageHappy;
				}	
				if (emotion == "sad")
				{
					defaultImage = KonstalImageSad;
				}
				if (emotion == "smirk")
				{
					defaultImage = KonstalImageSmirk;
				}	
				if (emotion == "sigh")
				{
					defaultImage = KonstalImageSigh;
				}
		*/
	}
	
	var variableScript : variables = selectedChar.GetComponent(variables);
	
	makeBubbleScript.makeBubble(positionx, positiony, text, variableScript.bubbleColor, variableScript.textColor, defaultImage, character);


}

function findLocationOfChar() {
	if(selectedChar.transform.position.x >= -8.11 && selectedChar.transform.position.x < -4.48)
	{
	 positionx = -6.55;
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	}
	
	if(selectedChar.transform.position.x >= -4.48 && selectedChar.transform.position.x < -0.13)
	{
	 positionx = -2.17;
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	}
	
	if(selectedChar.transform.position.x >= -0.13 && selectedChar.transform.position.x < 4.26)
	{
	 positionx = 2.2;
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	}
	
	if(selectedChar.transform.position.x >= 4.26 && selectedChar.transform.position.x < 8.8)
	{
	 positionx = 6.58;
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, .5);
	}

}