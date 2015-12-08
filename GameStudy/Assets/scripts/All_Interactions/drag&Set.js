#pragma strict


//get camera(to locate mouse position) and game object(to find if player is in game or cutscene)
var game : GameObject;
var myCamera : Camera;
var anim : Animator;

//get the universal script to store values
var storeVars : storeVars;

//MUST DEFINE THIS VARIABLE OUTSIDE AS THE CHARACTER'S NAME
var objName= "";



/////////////////////////////////
/////// START (SET VARIABLES)
/////////////////////////////////

function Start () {
	//find the variables so you dont need to define them
	game = GameObject.Find("GameObject");
	myCamera = Camera.main;
	anim = GetComponent(Animator);
	
	//find the universal script withing objects and set variable
	storeVars = game.GetComponent("storeVars");
	transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(0,0,0,0);
	transform.GetChild(1).GetComponent.<Renderer>().material.color = Color(0,0,0,0);

}






function Update () {
//transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(0,0,0,0);

}




/////////////////////////////////
/////// MOUSE SCRIPTS
/////////////////////////////////



function OnMouseDown()
{
    //print ("click!");

}

function OnMouseOver()
{
    //print ("click!");
    transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(1,1,1,1);
    transform.GetChild(1).GetComponent.<Renderer>().material.color = Color(1,1,1,1);

}
function OnMouseExit()
{
    //print ("click!");
    transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(0,0,0,0);
    transform.GetChild(1).GetComponent.<Renderer>().material.color = Color(0,0,0,0);

}

function OnMouseDrag()
{
    //if(game.GetComponent(GameState).gamestate == "player"){

      	var vec : Vector3 = myCamera.ScreenToWorldPoint(Input.mousePosition);
      	vec.z = 0; 
      	transform.position = vec;
      	//anim.Play("inHold");
      	
      	storeVars.heldChar = objName;
      	
      	
      	//}
      	//transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(0,0,0,1);

}


function OnMouseUp () {
	var oldAlunaPos = storeVars.alunaSet;
	var oldMilkyPos = storeVars.milkySet;
	var oldEstherPos = storeVars.estherSet;
	var oldKonstalPos = storeVars.konstalSet;
	var oldCratorPos = storeVars.cratorSet;
	//transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(0,0,0,0);
	
	if (objName == "Aluna")
	{
		if (transform.position.x < -4.4 )
		{
			//print ("IN TENT!");
			//anim.Play("tentIdle");
			storeVars.alunaSet = "inTent";
		}
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			//print ("IN CAMPSITE!");
			//anim.Play("campsiteIdle");
			storeVars.alunaSet = "inCamp";
		}
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			//print ("IN WOODS!");
			//anim.Play("woodsIdle");
			storeVars.alunaSet = "inWoods";
		}
		if (4.4 < transform.position.x)
		{
			//print ("IN HILL!");
			//anim.Play("hillIdle");
			storeVars.alunaSet = "inHill";
		}
	}
	
	
	if (objName == "Milky")
	{
		if (transform.position.x < -4.4 )
		{
			//print ("IN TENT!");
			//anim.Play("tentIdle");
			storeVars.milkySet = "inTent";
		}
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			//print ("IN CAMPSITE!");
			//anim.Play("campsiteIdle");
			storeVars.milkySet = "inCamp";
		}
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			//print ("IN WOODS!");
			//anim.Play("woodsIdle");
			storeVars.milkySet = "inWoods";
		}
		if (4.4 < transform.position.x)
		{
			//print ("IN HILL!");
			//anim.Play("hillIdle");
			storeVars.milkySet = "inHill";
		}
	}
	
	
	
	if (objName == "Esther")
	{
		if (transform.position.x < -4.4 )
		{
			//print ("IN TENT!");
			//anim.Play("tentIdle");
			storeVars.estherSet = "inTent";
		}
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			//print ("IN CAMPSITE!");
			//anim.Play("campsiteIdle");
			storeVars.estherSet = "inCamp";
		}
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			//print ("IN WOODS!");
			//anim.Play("woodsIdle");
			storeVars.estherSet = "inWoods";
		}
		if (4.4 < transform.position.x)
		{
			//print ("IN HILL!");
			//anim.Play("hillIdle");
			storeVars.estherSet = "inHill";
		}
	}
	
	
	
	if (objName == "Konstal")
	{
		if (transform.position.x < -4.4 )
		{
			//print ("IN TENT!");
			///anim.Play("tentIdle");
			storeVars.konstalSet = "inTent";
		}
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			//print ("IN CAMPSITE!");
			//anim.Play("campsiteIdle");
			storeVars.konstalSet = "inCamp";
		}
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			//print ("IN WOODS!");
			//anim.Play("woodsIdle");
			storeVars.konstalSet = "inWoods";
		}
		if (4.4 < transform.position.x)
		{
			//print ("IN HILL!");
			//anim.Play("hillIdle");
			storeVars.konstalSet = "inHill";
		}
	}
	

	if (name == "Crator")
	{
		Debug.Log("Drag ended!");
		if (transform.position.x < -4.4 )
		{
			//print ("IN TENT!");
			///anim.Play("tentIdle");
			storeVars.cratorSet = "inTent";
		}
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			//print ("IN CAMPSITE!");
			///anim.Play("campsiteIdle");
			storeVars.cratorSet = "inCamp";
		}
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			//print ("IN WOODS!");
			//anim.Play("woodsIdle");
			storeVars.cratorSet = "inWoods";
		}
		if (4.4 < transform.position.x)
		{
			//print ("IN HILL!");
			//anim.Play("hillIdle");
			storeVars.cratorSet = "inHill";
		}
	}
	
	if ((oldAlunaPos != storeVars.alunaSet) || (oldKonstalPos != storeVars.konstalSet) || (oldMilkyPos != storeVars.milkySet) || (oldEstherPos != storeVars.estherSet) || (oldCratorPos != storeVars.cratorSet))
	{
		storeVars.moved = true;  //Tell game that a significant move has been made.
	}
	
	storeVars.justClickedChar = objName;
}