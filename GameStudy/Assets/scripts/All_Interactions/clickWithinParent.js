#pragma strict


//get camera(to locate mouse position) and game object(to find if player is in game or cutscene)
var game : GameObject;
var myCamera : Camera;
var anim : Animator;

//the current character you are clicking
var character: GameObject;;

function Start () {
	//find the variables so you dont need to define them
	game = GameObject.Find("GameObject");
	myCamera = Camera.main;
	//anim = GetComponent(Animator);

}

function Update () {
			// if mouse is down, find teh character you are clicking
         if (Input.GetMouseButtonDown(0))
         {
         	 print ("click!");
             var hit : RaycastHit;
             var ray : Ray = myCamera.ScreenPointToRay(Input.mousePosition);
             print(hit);
              print(ray);
             if (Physics.Raycast(ray, hit))
             {	
                 Debug.Log(hit.collider.name);
                 character =GameObject.Find(hit.collider.name);
                 print(character);
             }
         }
     }



/*function OnMouseDown()
{
    print ("click!");

}
/*
function OnMouseDrag()
{
    //if(game.GetComponent(GameState).gamestate == "player"){
      	//rend.material.color -= Color.white * Time.deltaTime;
      	var vec : Vector3 = myCamera.ScreenToWorldPoint(Input.mousePosition);
      	vec.z = 0; 
      	transform.position = vec;
      	//}

}


function OnMouseUp () {
		Debug.Log("Drag ended!");
		if (transform.position.x < -4.4 )
		{
			print ("IN TENT!");
		}
		if ((-4.4  < transform.position.x ) && (transform.position.x < -0.024))
		{
			print ("IN CAMPSITE!");
		}
		if ((-0.024  < transform.position.x ) && (transform.position.x < 4.4))
		{
			print ("IN WOODS!");
		}
		if (4.4 < transform.position.x)
		{
			print ("IN HILL!");
		}
		
}*/