#pragma strict

//Oly need to drag and drop game object

var game : GameObject;
var hasBeenClicked = false;
var rend: Renderer;
var currentXPos = 0.0;


var myCamera : Camera;
var max = 3.5; //the maximum value the stalagmite can grow
var min = -5.5; //the minimum value the stalagmite can shrink
var OtherStalagmite : GameObject;  //the influenced stalagmite
var prevYPos = 0.0;
var otherYPos = 0.0;

function Start () {
	rend = GetComponent.<Renderer>();
	prevYPos = transform.position.y;
	currentXPos = transform.position.x;
	myCamera = Camera.main;
	OtherStalagmite = GameObject.Find("stalagmite2");

}

function Update () {

}

function OnMouseDrag () {
	//print( "Stalagmite 1 is being dragged.");
    if(game.GetComponent(GameState).gamestate == "player"){
      	//rend.material.color -= Color.white * Time.deltaTime;
      	var vec : Vector3 = myCamera.ScreenToWorldPoint(Input.mousePosition);
      	vec.z = 0; 
      	vec.x = currentXPos;
      	if (vec.y > max)
      	{
      		vec.y = max;
      	}
      	
      	if (vec.y < min)
      	{
      		vec.y = min;
      	}
      	transform.position = vec;
      	
      	if (prevYPos != vec.y)
      	{
      		//print (vec.y + " - " + prevYPos);
      		otherYPos = vec.y - prevYPos;
      		//print (OtherStalagmite.transform.position.y + " - " + otherYPos);
      		OtherStalagmite.transform.position.y -= otherYPos;
      		prevYPos = vec.y;
      	}
      	
      	
      	
      	
      	
      }
      
    
	

}



function OnMouseDown () {
		
		
      //print( "Stalagmite 1 has been clicked.");
      if(hasBeenClicked == false && game.GetComponent(GameState).gamestate == "player"){
      	rend.material.color = Color.white;
     	hasBeenClicked = true;
      }
      
}


function OnMouseOver () {
	
      //print( "I AM OVER Stalagmite1");
      if(hasBeenClicked == false && game.GetComponent(GameState).gamestate == "player"){
      rend.material.color = Color.grey;
      }
}

function OnMouseExit () {
	
      //print( "I AM NOT OVER Stalagmite1");
      if(hasBeenClicked == false && game.GetComponent(GameState).gamestate == "player"){
      rend.material.color = Color.white;
      }
}

