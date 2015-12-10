#pragma strict
import UnityEngine.UI;


var canvas : Canvas;
var prefab : GameObject;
var newBubble: GameObject;

var SpeakingChar1: GameObject;
var SpeakingChar2: GameObject;

var curImage: GameObject;

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

var AlunaImageSurprise: Sprite;
var EstherImageSurprise: Sprite;
var MilkyImageSurprise: Sprite;
var CratorImageSurprise: Sprite;
var KonstalImageSurprise: Sprite;



var blank: Sprite;
var x = -2.209999;

var gamestate : GameState;


function Start () {

curImage = SpeakingChar1;
gamestate = GetComponent(GameState);

}

function Update () {


}

function makeBubble(instantiatex, instantiatey, speech, speechColor, textColor, Char, emotion)
{
	//print (Char);
	if(gamestate.characterSpeaking == "1" && Char != "none")
	{
		x = -2.209999;
	}
	if(gamestate.characterSpeaking == "2" && Char != "none"){
		x = 2.200001;
	}
	//print ("INSTANTIATE X");
	//print ( instantiatex);
	newBubble = Instantiate(prefab, new Vector3(x, 2.63, 0), transform.rotation);
	newBubble.transform.GetChild(0).GetComponent.<UnityEngine.UI.Text>().text = speech;
	newBubble.transform.GetChild(0).GetComponent.<UnityEngine.UI.Text>().color = textColor;
	newBubble.GetComponent.<Image>().color = speechColor;
	newBubble.transform.parent = canvas.transform;
	
	//deleteBubble(instantiatex, instantiatey, newBubble);
	
	makeOnScreenChar(Char, emotion);
	
 } 
 
 function makeOnScreenChar(Char, emotion)
 {
 	//print(gamestate.characterSpeaking);
 	//print("CHARACTER");
 	//print(Char);
 	//print(Char == "Aluna");
 	if(gamestate.characterSpeaking == "1" && Char != "none")
 	{
 		curImage = SpeakingChar1;
 		gamestate.characterSpeaking = "2";
 	}
	else if (gamestate.characterSpeaking == "2" && Char != "none"){
		curImage = SpeakingChar2;
		gamestate.characterSpeaking = "1";
	}
	
	
	if(Char == "Aluna")
	{
		//Choose Expression Image	
		if (emotion == "angry")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = AlunaImageAngry;
		}
		else if (emotion == "happy")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = AlunaImageHappy;
		}	
		else if (emotion == "sad")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = AlunaImageSad;
		}
		else if (emotion == "smirk")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = AlunaImageSmirk;
		}	
		else if (emotion == "sigh")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = AlunaImageSigh;
		}
		else if (emotion == "surprise")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = AlunaImageSurprise;
		}
		else
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = AlunaImage;
		}
		//print("Aluna added");
	}
	
	if(Char == "Milky")
	{
		//Choose Expression Image	
		if (emotion == "angry")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = MilkyImageAngry;
		}
		else if (emotion == "happy")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = MilkyImageHappy;
		}	
		else if (emotion == "sad")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = MilkyImageSad;
		}
		else if (emotion == "smirk")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = MilkyImageSmirk;
		}	
		else if (emotion == "sigh")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = MilkyImageSigh;
		}
		else if (emotion == "surprise")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = MilkyImageSurprise;
		}
		else
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = MilkyImage;
		}
		//print("Milky added");
	}
	
	if(Char == "Esther")
	{
		if (emotion == "angry")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = EstherImageAngry;
		}
		else if (emotion == "happy")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = EstherImageHappy;
		}	
		else if (emotion == "sad")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = EstherImageSad;
		}
		else if (emotion == "smirk")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = EstherImageSmirk;
		}	
		else if (emotion == "sigh")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = EstherImageSigh;
		}
		else if (emotion == "surprise")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = EstherImageSurprise;
		}
		else
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = EstherImage;
		}
	//print("Esther added");
	}
	
	if(Char == "Crator")
	{
		if (emotion == "angry")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = CratorImageAngry;
		}
		else if (emotion == "happy")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = CratorImageHappy;
		}	
		else if (emotion == "sad")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = CratorImageSad;
		}
		else if (emotion == "smirk")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = CratorImageSmirk;
		}	
		else if (emotion == "sigh")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = CratorImageSigh;
		}
		else if (emotion == "surprise")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = CratorImageSurprise;
		}
		else
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = CratorImage;
		}
	//print("Crator added");
	}
	
	if(Char == "Konstal")
	{
		if (emotion == "angry")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = KonstalImageAngry;
		}
		else if (emotion == "happy")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = KonstalImageHappy;
		}	
		else if (emotion == "sad")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = KonstalImageSad;
		}
		else if (emotion == "smirk")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = KonstalImageSmirk;
		}	
		else if (emotion == "sigh")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = KonstalImageSigh;
		}
		else if (emotion == "surprise")
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = KonstalImageSurprise;
		}
		else
		{
			curImage.GetComponent.<UnityEngine.UI.Image>().sprite = KonstalImage;
		}
	//print("Konstal added");
	}
	
 
 
 }