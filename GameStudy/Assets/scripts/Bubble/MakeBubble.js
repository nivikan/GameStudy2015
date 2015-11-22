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
var blank: Sprite;

var gamestate : GameState;


function Start () {

curImage = SpeakingChar1;
gamestate = GetComponent(GameState);

}

function Update () {


}

function makeBubble(instantiatex, instantiatey, speech, speechColor, textColor, character, Char)
{
	newBubble = Instantiate(prefab, new Vector3(-0.14, 3.1, 0), transform.rotation);
	newBubble.transform.GetChild(1).GetComponent.<UnityEngine.UI.Image>().color = speechColor;
	newBubble.transform.GetChild(1).GetChild(0).GetComponent.<UnityEngine.UI.Image>().sprite = character;
	newBubble.transform.GetChild(0).GetComponent.<UnityEngine.UI.Text>().text = speech;
	newBubble.transform.GetChild(0).GetComponent.<UnityEngine.UI.Text>().color = textColor;
	newBubble.GetComponent.<Image>().color = speechColor;
	newBubble.transform.parent = canvas.transform;
	
	//deleteBubble(instantiatex, instantiatey, newBubble);
	
	makeOnScreenChar(Char);
	
 } 
 
 function makeOnScreenChar(Char)
 {
 	print(gamestate.characterSpeaking);
 	print("CHARACTER");
 	print(Char);
 	print(Char == "Aluna");
 	if(gamestate.characterSpeaking == "1")
 	{
 		curImage = SpeakingChar1;
 		gamestate.characterSpeaking = "2";
 	}
	else if (gamestate.characterSpeaking == "2"){
		curImage = SpeakingChar2;
		gamestate.characterSpeaking = "1";
	}
	
	
	if(Char == "Aluna")
	{
		curImage.GetComponent.<UnityEngine.UI.Image>().sprite = AlunaImage;
		print("Aluna added");
	}
	
	if(Char == "Milky")
	{
		curImage.GetComponent.<UnityEngine.UI.Image>().sprite = MilkyImage;
		print("Milky added");
	}
	
	if(Char == "Esther")
	{
		curImage.GetComponent.<UnityEngine.UI.Image>().sprite = EstherImage;
	print("Esther added");
	}
	
	if(Char == "Crator")
	{
	curImage.GetComponent.<UnityEngine.UI.Image>().sprite = CratorImage;
	print("Crator added");
	}
	
	if(Char == "Konstal")
	{
		curImage.GetComponent.<UnityEngine.UI.Image>().sprite = KonstalImage;
	print("Konstal added");
	}
	
 
 
 }