#pragma strict




//detect is stalgmite 2 hit it
//fall to ground using anim
//play anim of aluna coming to pick it up if the game if at stage 2


public var isFull = false;  //tells if the bucket is full or not
public var onFloor = false;
var alunaAnim : Animator;
var bucketAnim : Animator;
var stalagmte2 : GameObject;
var threshold = -1.895624;
var game : GameObject;

function Start () {
	stalagmte2 = GameObject.Find("stalagmite2");

}

function Update () {
	if (onFloor == true)
	{	
		alunaAnim.Play("fall");
		onFloor = false;
	}
	if (stalagmte2.transform.position.y <= threshold)
	{
		bucketFalls ();
	}

}

function bucketFalls ()
{
	print ("BUCKET HIT!");
    bucketAnim.Play("bucketFalls");
   	onFloor = true;

}


function OnMouseDown ()
{
    if (onFloor == true && game && game.GetComponent(GameState).gamestate == "player" && game.GetComponent(storeVars).currentSet=="scene3")
    {
    	print ("pick up!");
    }
}




