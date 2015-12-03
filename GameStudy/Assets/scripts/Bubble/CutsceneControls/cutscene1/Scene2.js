#pragma strict
import System.Math;

var line1 = false;
var line2 = false;
var line202 = false;
var line3 = false;
var line4 = false;
var line5 = false;
var line6 = false;
var line7 = false;
var line8 = false;
var line9 = false;
var line10 = false;
var line11 = false;
var line12 = false;
var line13 = false;
var line14 = false;
var line15 = false;
var line16 = false;
var line17 = false;
var line18 = false;
var line19 = false;
var line20 = false;
var line21 = false;
var line22 = false;
var line23 = false;
var line24 = false;
var line25 = false;
var line26 = false;
var line27 = false;
var line28 = false;
var line29 = false;
var line30 = false;

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

if(gamestate.cutscene2 == true){

if(line1 == false)
{
	scenes.makeCharacterSpeak("Konstal", "So it is true then. Milky got herself knocked up.", "happy");
	allCharacters.Play("scene2Konstal");
	if(Input.GetMouseButtonUp(0)){
	line1 = true;
	}
}
else if(Input.GetMouseButtonUp(0) == true && line2 == false)
{
	scenes.makeCharacterSpeak("Crator",  "It’s not as simple as that. She said she just turned up pregnant. She said she doesn’t know what happened.", "happy");
	line2 = true;
	allCharacters.Play("scene2Crator");
}

else if(Input.GetMouseButtonUp(0) == true && line202 == false)
{
	scenes.makeCharacterSpeak("Crator",  "She said she doesn’t know what happened.", "happy");
	line202 = true;
	allCharacters.Play("scene2Crator");
}

else if(Input.GetMouseButtonUp(0) == true && line3 == false)
{
	scenes.makeCharacterSpeak("Konstal",  "well, I think it’s pretty obvious what happened", "happy");
	line3 = true;
	allCharacters.Play("scene2Konstal");
}
else if(Input.GetMouseButtonUp(0) == true && line4 == false)
{
	scenes.makeCharacterSpeak("Crator", "She said she didn’t have sex with anyone.", "happy");
	line4 = true;
	allCharacters.Play("scene2Crator");
}
else if(Input.GetMouseButtonUp(0) == true && line5 == false)
{
	scenes.makeCharacterSpeak("Konstal", "You really believe that?", "happy");
	line5 = true;
	allCharacters.Play("scene2Konstal");
}

else if(Input.GetMouseButtonUp(0) == true && line6 == false)
{
	scenes.makeCharacterSpeak("Crator", "...", "happy");
	line6 = true;
	allCharacters.Play("scene2Crator");
}
else if(Input.GetMouseButtonUp(0) == true && line7 == false)
{
	scenes.makeCharacterSpeak("Konstal", "how are we even gonna feed it?", "happy");
	line7 = true;
	allCharacters.Play("scene2Konstal");
}
else if(Input.GetMouseButtonUp(0) == true && line8 == false)
{
	//scenes.makeCharacterSpeak("character2", "weirder stuff have happened. ");
	line8 = true;
	//allCharacters.Stop();
	allCharacters.Play("Characters2");
}

else if(Input.GetMouseButtonUp(0) == true && line9 == false)
{
	scenes.makeCharacterSpeak("Crator", "I guess we’ll just have to split our rations a bit more.", "happy");
	line9 = true;
	allCharacters.Play("scene2Crator");
	
}

else if(Input.GetMouseButtonUp(0) == true && line10 == false)
{
	//scenes.makeCharacterSpeak("character1", "I guess we’ll just have to split our rations a bit more.");
	line10 = true;
	print ("character move.");
	allCharacters.Play("scene2EstherMove");
	
}

else if(Input.GetMouseButtonUp(0) == true && line11 == false)
{
	scenes.makeCharacterSpeak("Esther", "Hey guys­ did you get dinner ready?", "happy");
	line11 = true;
	allCharacters.Play("scene2part2Esther");
	
}

else if(Input.GetMouseButtonUp(0) == true && line12 == false)
{
	scenes.makeCharacterSpeak("Konstal", "Did you all find out how Milky even got pregnant?", "happy");
	line12 = true;
	allCharacters.Play("scene2part2Konstal");
	
}

else if(Input.GetMouseButtonUp(0) == true && line13 == false)
{
	scenes.makeCharacterSpeak("Esther", "We told you... She just turned up pregnant. We need to find out how it happened.", "happy");
	line13 = true;
	allCharacters.Play("scene2part2Esther");
	
}

else if(Input.GetMouseButtonUp(0) == true && line14 == false)
{
	scenes.makeCharacterSpeak("Konstal", "Right...", "happy");
	line14 = true;
	allCharacters.Play("scene2part2Konstal");
	
}

else if(Input.GetMouseButtonUp(0) == true && line15 == false)
{
	scenes.makeCharacterSpeak("Crator", "Girls, come over heare.", "happy");
	line15 = true;
	allCharacters.Play("scene2part2Crator");
	
}

else if(Input.GetMouseButtonUp(0) == true && line16 == false)
{
	//scenes.makeCharacterSpeak("character1", "Girls, come over heare, guys");
	line16 = true;
	allCharacters.Play("scene2GirlsMove");
	
}


else if(Input.GetMouseButtonUp(0) == true && line17 == false)
{
	scenes.makeCharacterSpeak("Crator", "Me and Konstal were talking about splitting our rations.", "happy");
	line17 = true;
	allCharacters.Play("scene2part3Crator");
	
}

else if(Input.GetMouseButtonUp(0) == true && line18 == false)
{
	scenes.makeCharacterSpeak("Milky", "You mean for the Baby?", "happy");
	line18 = true;
	allCharacters.Play("scene2part3Milky");
	
}

else if(Input.GetMouseButtonUp(0) == true && line19 == false)
{
	scenes.makeCharacterSpeak("Esther", "I thought we were going to find a way to abort it?", "happy");
	line19 = true;
	allCharacters.Play("scene2part3Esther");
	
}

else if(Input.GetMouseButtonUp(0) == true && line20 == false)
{
	scenes.makeCharacterSpeak("Crator", "Abort it? I thought we were keeping it?", "happy");
	line20 = true;
	allCharacters.Play("scene2part3Crator");
	
}

else if(Input.GetMouseButtonUp(0) == true && line21 == false)
{
	scenes.makeCharacterSpeak("Esther", "Well, we can’t really feed it, can we?", "happy");
	line21 = true;
	allCharacters.Play("scene2part3Esther");
	
}

else if(Input.GetMouseButtonUp(0) == true && line22 == false)
{
	scenes.makeCharacterSpeak("Esther", "And Milky didn’t even want it in the first place.", "happy");
	line22 = true;
	allCharacters.Play("scene2part3Esther");
	
}

else if(Input.GetMouseButtonUp(0) == true && line23 == false)
{
	scenes.makeCharacterSpeak("Crator", "But that doesn’t mean she wants it aborted.", "happy");
	line23 = true;
	allCharacters.Play("scene2part3Crator");
	
}

else if(Input.GetMouseButtonUp(0) == true && line24 == false)
{
	scenes.makeCharacterSpeak("Konstal", "I think Esther’s right. We don’t have enough food to feed it", "happy");
	line24 = true;
	allCharacters.Play("scene2part3Konstal");
	
}

else if(Input.GetMouseButtonUp(0) == true && line24 == false)
{
	scenes.makeCharacterSpeak("Crator", "Shut Up. Let’s just ask Milky.", "happy");
	line24 = true;
	allCharacters.Play("scene2part3Crator");
	
}

else if(Input.GetMouseButtonUp(0) == true && line25 == false)
{
	scenes.makeCharacterSpeak("Milky", "I-I don’t know. I don’t really want it but I feel bad just killing it..", "happy");
	line25 = true;
	allCharacters.Play("scene2part3Milky");
	
}
else if(Input.GetMouseButtonUp(0) == true && line26 == false)
{
	scenes.makeCharacterSpeak("Konstal", "It’s gonna feel even worse if it comes out here and we don’t even have a bed for it.", "happy");
	line26 = true;
	allCharacters.Play("scene2part3Konstal");
	
}
else if(Input.GetMouseButtonUp(0) == true && line27 == false)
{
	scenes.makeCharacterSpeak("Esther", "Oh my god, can we just eat dinner right now?", "happy");
	line27 = true;
	allCharacters.Play("scene2part3Esther");
	
}
else if(Input.GetMouseButtonUp(0) == true && line28 == false)
{
	scenes.makeCharacterSpeak("Konstal", "Why did you think it was a good idea to get pregnant anyway?", "happy");
	line28 = true;
	allCharacters.Play("scene2part3Konstal");
	
}
else if(Input.GetMouseButtonUp(0) == true && line29 == false)
{
	scenes.makeCharacterSpeak("Aluna", "Watch it- she didn’t want to get pregnant. It just happened.", "happy");
	line29 = true;
	allCharacters.Play("scene2part3Aluna");
	
}
else if(Input.GetMouseButtonUp(0) == true && line30 == false)
{
	scenes.makeCharacterSpeak("Konstal", "Right. 'It just happened.' How convenient.", "happy");
	line30 = true;
	allCharacters.Play("scene2part3Konstal");
	
}

else if (Input.GetMouseButtonUp(0) == true && line30 == true)
{
	makeBright();
	gamestate.cutscene1 = false;
	allCharacters.Play("scene2final");
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