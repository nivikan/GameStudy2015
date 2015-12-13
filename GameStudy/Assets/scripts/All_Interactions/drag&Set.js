#pragma strict


//get camera(to locate mouse position) and game object(to find if player is in game or cutscene)
var game : GameObject;
var myCamera : Camera;
var anim : Animator;

//get the universal script to store values
var storeVars : storeVars;
var dialogue : dialogues;

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
	dialogue = game.GetComponent("dialogues");
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
	if ( (dialogue.isInConvo == false) && (storeVars.inCutscene == false) )
	{
	    //print ("click!");
	    if(game.GetComponent.<dialogues>().isInConvo == false){
	    transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(1,1,1,1);
	    transform.GetChild(1).GetComponent.<Renderer>().material.color = Color(1,1,1,1);
	    }
    }

}
function OnMouseExit()
{
    //print ("click!");

    transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(0,0,0,0);
    transform.GetChild(1).GetComponent.<Renderer>().material.color = Color(0,0,0,0);

}

function OnMouseDrag()
{
	if ( (dialogue.isInConvo == false) && (storeVars.inCutscene == false) )
	{
	    //if(game.GetComponent(GameState).gamestate == "player"){
		if(game.GetComponent.<dialogues>().isInConvo == false){
	      	var vec : Vector3 = myCamera.ScreenToWorldPoint(Input.mousePosition);
	      	vec.z = 0; 
	      	transform.position = vec;
	      	//anim.Play("inHold");
	      	
	      	storeVars.heldChar = objName;
	      	}
	      	
	      	//}
	      	//transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(0,0,0,1);
	 }

}


function OnMouseUp () {
if(game.GetComponent.<dialogues>().isInConvo == false){
	var oldAlunaPos = storeVars.alunaSet;
	var oldMilkyPos = storeVars.milkySet;
	var oldEstherPos = storeVars.estherSet;
	var oldKonstalPos = storeVars.konstalSet;
	var oldCratorPos = storeVars.cratorSet;
	//transform.GetChild(0).GetComponent.<Renderer>().material.color = Color(0,0,0,0);
	
	if (objName == "Aluna")
	{
		if (transform.position.x < -8.2 )
		{
			transform.position.x = -8;
			storeVars.alunaSet = "inTent";
		}
		
		if (transform.position.x < -4.4 )
		{
			storeVars.alunaSet = "inTent";
		}
		if ( (-4.8 <transform.position.x) && (transform.position.x <= -4.3) )
		{
			transform.position.x = -5;
			storeVars.alunaSet = "inTent";
		}
		if ( (-4.3 <transform.position.x) && (transform.position.x <= -3.9) )
		{
			transform.position.x = -3.8;
			storeVars.alunaSet = "inCamp";
		}
		
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			storeVars.alunaSet = "inCamp";
		}
		
		if ( (-0.43 <transform.position.x) && (transform.position.x <=0.09) )
		{
			transform.position.x = -0.64;
			storeVars.alunaSet = "inCamp";
		}
		if ( (0.09 <transform.position.x) && (transform.position.x <= 0.55) )
		{
			transform.position.x = 0.58;
			storeVars.alunaSet = "inWoods";
		}
		
		
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			storeVars.alunaSet = "inWoods";
		}
		
		if ( (4 <transform.position.x) && (transform.position.x <=4.41) )
		{
			transform.position.x = 3.79;
			storeVars.alunaSet = "inWoods";
		}
		if ( (4.41 <transform.position.x) && (transform.position.x <= 4.89) )
		{
			transform.position.x = 4.98;
			storeVars.alunaSet = "inHill";
		}

		if (4.4 < transform.position.x)
		{

			storeVars.alunaSet = "inHill";
		}
		if (transform.position.x > 8.36 )
		{
			transform.position.x = 8.21;
			storeVars.alunaSet = "inHill";
		}
		if (transform.position.y < -3)
		{
			transform.position.y = -1.54;
		}
		
		
	}
	
	
	if (objName == "Milky")
	{
		if (transform.position.x < -8.2 )
		if (transform.position.x < -8.2 )
		{
			transform.position.x = -8;
			storeVars.milkySet = "inTent";
		}
		
		if (transform.position.x < -4.4 )
		{
			storeVars.milkySet = "inTent";
		}
		if ( (-4.8 <transform.position.x) && (transform.position.x <= -4.3) )
		{
			transform.position.x = -5;
			storeVars.milkySet = "inTent";
		}
		if ( (-4.3 <transform.position.x) && (transform.position.x <= -3.9) )
		{
			transform.position.x = -3.8;
			storeVars.milkySet = "inCamp";
		}
		
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			storeVars.milkySet = "inCamp";
		}
		
		if ( (-0.43 <transform.position.x) && (transform.position.x <=0.09) )
		{
			transform.position.x = -0.64;
			storeVars.milkySet = "inCamp";
		}
		if ( (0.09 <transform.position.x) && (transform.position.x <= 0.55) )
		{
			transform.position.x = 0.58;
			storeVars.milkySet = "inWoods";
		}
		
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			storeVars.milkySet = "inWoods";
		}
		if ( (4 <transform.position.x) && (transform.position.x <=4.41) )
		{
			transform.position.x = 3.79;
			storeVars.milkySet = "inWoods";
		}
		if ( (4.41 <transform.position.x) && (transform.position.x <= 4.89) )
		{
			transform.position.x = 4.98;
			storeVars.milkySet = "inHill";
		}
		if (4.4 < transform.position.x)
		{

			storeVars.milkySet = "inHill";
		}
		if (transform.position.x > 8.36 )
		{
			transform.position.x = 8.21;
			storeVars.milkySet = "inHill";
		}
		if (transform.position.y < -3)
		{
			transform.position.y = -1.54;
		}
	}
	
	
	
	if (objName == "Esther")
	{
		if (transform.position.x < -8.2 )
		{
			transform.position.x = -8;
			storeVars.estherSet = "inTent";
		}
		
		if (transform.position.x < -4.4 )
		{
			storeVars.estherSet = "inTent";
		}
		if ( (-4.8 <transform.position.x) && (transform.position.x <= -4.3) )
		{
			transform.position.x = -5;
			storeVars.estherSet = "inTent";
		}
		if ( (-4.3 <transform.position.x) && (transform.position.x <= -3.9) )
		{
			transform.position.x = -3.8;
			storeVars.estherSet = "inCamp";
		}
		
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			storeVars.estherSet = "inCamp";
		}
		
		if ( (-0.43 <transform.position.x) && (transform.position.x <=0.09) )
		{
			transform.position.x = -0.64;
			storeVars.estherSet = "inCamp";
		}
		if ( (0.09 <transform.position.x) && (transform.position.x <= 0.55) )
		{
			transform.position.x = 0.58;
			storeVars.estherSet = "inWoods";
		}
		
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			storeVars.estherSet = "inWoods";
		}
		if ( (4 <transform.position.x) && (transform.position.x <=4.41) )
		{
			transform.position.x = 3.79;
			storeVars.estherSet = "inWoods";
		}
		if ( (4.41 <transform.position.x) && (transform.position.x <= 4.89) )
		{
			transform.position.x = 4.98;
			storeVars.estherSet = "inHill";
		}
		if (4.4 < transform.position.x)
		{

			storeVars.estherSet = "inHill";
		}
		if (transform.position.x > 8.36 )
		{
			transform.position.x = 8.21;
			storeVars.estherSet = "inHill";
		}
		if (transform.position.y < -3)
		{
			transform.position.y = -1.54;
		}
	}
	
	
	
	if (objName == "Konstal")
	{
		if (transform.position.x < -8.2 )
		{
			transform.position.x = -8;
			storeVars.konstalSet = "inTent";
		}
		
		if (transform.position.x < -4.4 )
		{
			storeVars.konstalSet = "inTent";
		}
		if ( (-4.8 <transform.position.x) && (transform.position.x <= -4.3) )
		{
			transform.position.x = -5;
			storeVars.konstalSet = "inTent";
		}
		if ( (-4.3 <transform.position.x) && (transform.position.x <= -3.9) )
		{
			transform.position.x = -3.8;
			storeVars.konstalSet = "inCamp";
		}
		
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			storeVars.konstalSet = "inCamp";
		}
		
		if ( (-0.43 <transform.position.x) && (transform.position.x <=0.09) )
		{
			transform.position.x = -0.64;
			storeVars.konstalSet = "inCamp";
		}
		if ( (0.09 <transform.position.x) && (transform.position.x <= 0.55) )
		{
			transform.position.x = 0.58;
			storeVars.konstalSet = "inWoods";
		}
		
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			storeVars.konstalSet = "inWoods";
		}
		if ( (4 <transform.position.x) && (transform.position.x <=4.41) )
		{
			transform.position.x = 3.79;
			storeVars.konstalSet = "inWoods";
		}
		if ( (4.41 <transform.position.x) && (transform.position.x <= 4.89) )
		{
			transform.position.x = 4.98;
			storeVars.konstalSet = "inHill";
		}
		if (4.4 < transform.position.x)
		{

			storeVars.konstalSet = "inHill";
		}
		if (transform.position.x > 8.36 )
		{
			transform.position.x = 8.21;
			storeVars.konstalSet = "inHill";
		}
		if (transform.position.y < -3)
		{
			transform.position.y = -1.54;
		}
	}
	

	if (name == "Crator")
	{
		if (transform.position.x < -8.2 )
		{
			transform.position.x = -8;
			storeVars.cratorSet = "inTent";
		}
		
		if (transform.position.x < -4.4 )
		{
			storeVars.cratorSet = "inTent";
		}
		if ( (-4.8 <transform.position.x) && (transform.position.x <= -4.3) )
		{
			transform.position.x = -5;
			storeVars.cratorSet = "inTent";
		}
		if ( (-4.3 <transform.position.x) && (transform.position.x <= -3.9) )
		{
			transform.position.x = -3.8;
			storeVars.cratorSet = "inCamp";
		}
		
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			storeVars.cratorSet = "inCamp";
		}
		
		if ( (-0.43 <transform.position.x) && (transform.position.x <=0.09) )
		{
			transform.position.x = -0.64;
			storeVars.cratorSet = "inCamp";
		}
		if ( (0.09 <transform.position.x) && (transform.position.x <= 0.55) )
		{
			transform.position.x = 0.58;
			storeVars.cratorSet = "inWoods";
		}
		
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			storeVars.cratorSet = "inWoods";
		}
		if ( (4 <transform.position.x) && (transform.position.x <=4.41) )
		{
			transform.position.x = 3.79;
			storeVars.cratorSet = "inWoods";
		}
		if ( (4.41 <transform.position.x) && (transform.position.x <= 4.89) )
		{
			transform.position.x = 4.98;
			storeVars.cratorSet = "inHill";
		}
		if (4.4 < transform.position.x)
		{

			storeVars.cratorSet = "inHill";
		}
		if (transform.position.x > 8.36 )
		{
			transform.position.x = 8.21;
			storeVars.cratorSet = "inHill";
		}
		if (transform.position.y < -3)
		{
			transform.position.y = -1.54;
		}
	}
	
	if ((oldAlunaPos != storeVars.alunaSet) || (oldKonstalPos != storeVars.konstalSet) || (oldMilkyPos != storeVars.milkySet) || (oldEstherPos != storeVars.estherSet) || (oldCratorPos != storeVars.cratorSet))
	{
		storeVars.moved = true;  //Tell game that a significant move has been made.
	}
	
	storeVars.justClickedChar = objName;
	storeVars.heldChar = "None";
	
	}
}