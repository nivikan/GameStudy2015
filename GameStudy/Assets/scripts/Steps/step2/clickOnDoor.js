#pragma strict


var anim : Animator;
var game : GameObject;
var hasBeenClicked = false;
var rend: Renderer;

function Start () {
	rend = GetComponent.<Renderer>();

}

function Update () {

}

function OnMouseDown () {
		
      print( "TENT HAS BEEN Clicked");
      if(hasBeenClicked == false && game.GetComponent(GameState).gamestate == "player"){
      	rend.material.color = Color.white;
      	anim.Play("doorAnim");
     	hasBeenClicked = true;
      	game.GetComponent(GameState).gamestate = "cutscene";
     	game.GetComponent(GameState).cutscene2 = true;
      }
      
}


function OnMouseOver () {
	
      print( "I AM OVER TENT");
      if(hasBeenClicked == false && game.GetComponent(GameState).gamestate == "player"){
      rend.material.color = Color.grey;
      }
}

function OnMouseExit () {
	
      print( "I AM NOT OVER TENT");
      if(hasBeenClicked == false && game.GetComponent(GameState).gamestate == "player"){
      rend.material.color = Color.white;
      }
}

