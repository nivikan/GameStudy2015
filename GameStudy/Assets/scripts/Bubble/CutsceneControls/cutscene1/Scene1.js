#pragma strict
import System.Math;

var line0 = false;
var line1 = false;
var line2 = false;
var line3 = false;
var line4 = false;
var line5 = false;
var line6 = false;
var line7 = false;
var line8 = false;
var line9 = false;
var line10 = false;

var DarkenScene1 : GameObject;
var DarkenScene2 : GameObject;
var DarkenScene3 : GameObject;
var DarkenScene4 : GameObject;

var allCharacters : Animator;




//var counter = System.Math.Floor(Time.time);
var scenes : ScenesScript;
var gamestate : GameState;

function Start () {
scenes = GetComponent(ScenesScript);
gamestate = GetComponent(GameState);

}

function Update () {
gamestate.bubblesOnScreen = true;

/*

if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line1") && line1 == false)
 {
 	scenes.makeCharacterSpeak("character1", "How did you even get pregnant? Was it boy 2?");
    // Avoid any reload.
    line1 = true;
 }
 
 else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line2") && line2 == false)
 {
 	scenes.makeCharacterSpeak("character2", "No…");
    // Avoid any reload.
    line2 = true;
 }
 
  else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line3") && line3 == false)
 {
 	scenes.makeCharacterSpeak("character1", "I know you said it was a freak anomaly but that’s a little hard to swallow.");
    // Avoid any reload.
    line3 = true;
 }
  else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line4") && line4 == false)
 {
 	scenes.makeCharacterSpeak("character2", "I don’t even know what happened. I just noticed I was pregnant.");
    // Avoid any reload.
    line4 = true;
 }
  else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line5") && line5 == false)
 {
 	scenes.makeCharacterSpeak("character1", "You didn’t have sex with anyone either…");
    // Avoid any reload.
    line5 = true;
 }
 
  else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line6") && line6 == false)
 {
 	scenes.makeCharacterSpeak("character2", "Yeah...");
    // Avoid any reload.
    line6 = true;
 }
  else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line7") && line7 == false)
 {
 	scenes.makeCharacterSpeak("character1", "c’mon- that’s way too farfetched");
    // Avoid any reload.
    line7 = true;
 }
  else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line8") && line8 == false)
 {
 	scenes.makeCharacterSpeak("character2", "weirder stuff have happened. ");
    // Avoid any reload.
    line8 = true;
 }
  else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line9") && line9 == false)
 {
 	scenes.makeCharacterSpeak("character1", "…");
    // Avoid any reload.
    line9 = true;
 }
  else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1line10") && line10 == false)
 {
 	scenes.makeCharacterSpeak("character2", "…");
    // Avoid any reload.
    line10 = true;
 }
 
 else if (this.allCharacters.GetCurrentAnimatorStateInfo(0).IsName("scene1end"))
 {
 	gamestate.gamestate = "player";
    // Avoid any reload.
 }
 
 */

if(gamestate.cutscene1 == true){
if(line0 == false)
{
	//scenes.makeCharacterSpeak("Esther", "How did you even get pregnant? Was it boy 2?");
	line0 = true;
	//allCharacters.Play("scene1Esther");
}

if(Input.GetMouseButtonUp(0) == true && line1 == false)
{
	scenes.makeCharacterSpeak("Esther", "How did you even get pregnant? Was it boy 2?", "happy");
	line1 = true;
	allCharacters.Play("scene1Esther");
}
else if(Input.GetMouseButtonUp(0) == true && line2 == false)
{
	scenes.makeCharacterSpeak("Milky",  "No…", "happy");
	line2 = true;
	allCharacters.Play("scene1Milky");
}

else if(Input.GetMouseButtonUp(0) == true && line3 == false)
{
	scenes.makeCharacterSpeak("Esther",  "I know you said it was a freak anomaly but that’s a little hard to swallow.", "happy");
	line3 = true;
	allCharacters.Play("scene1Esther");
}
else if(Input.GetMouseButtonUp(0) == true && line4 == false)
{
	scenes.makeCharacterSpeak("Milky", "I don’t even know what happened. I just noticed I was pregnant.", "happy");
	line4 = true;
	allCharacters.Play("scene1Milky");
}
else if(Input.GetMouseButtonUp(0) == true && line5 == false)
{
	scenes.makeCharacterSpeak("Esther", "You didn’t have sex with anyone either…", "happy");
	line5 = true;
	allCharacters.Play("scene1Esther");
}

else if(Input.GetMouseButtonUp(0) == true && line6 == false)
{
	scenes.makeCharacterSpeak("Milky", "Yeah...", "happy");
	line6 = true;
	allCharacters.Play("scene1Milky");
}
else if(Input.GetMouseButtonUp(0) == true && line7 == false)
{
	scenes.makeCharacterSpeak("Esther", "c’mon- that’s way too farfetched", "happy");
	line7 = true;
	allCharacters.Play("scene1Esther");
}
else if(Input.GetMouseButtonUp(0) == true && line8 == false)
{
	scenes.makeCharacterSpeak("Milky", "weirder stuff have happened. ", "happy");
	line8 = true;
	allCharacters.Play("scene1Milky");
}

else if(Input.GetMouseButtonUp(0) == true && line9 == false)
{
	scenes.makeCharacterSpeak("Esther", "…", "happy");
	line9 = true;
	allCharacters.Play("Characters2");
}

else if(Input.GetMouseButtonUp(0) == true && line10 == false)
{
	scenes.makeCharacterSpeak("Aluna", "…", "happy");
	line10 = true;
	allCharacters.Play("Characters2");
}

else if (Input.GetMouseButtonUp(0) == true && line10 == true)
{
	makeBright();
	gamestate.cutscene1 = false;
	gamestate.gamestate = "player";
}

}

}

function makeBright() {
	 DarkenScene1.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene2.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene3.GetComponent.<Image>().color = Color(0, 0, 0, 0);
	 DarkenScene4.GetComponent.<Image>().color = Color(0, 0, 0, 0);

}

