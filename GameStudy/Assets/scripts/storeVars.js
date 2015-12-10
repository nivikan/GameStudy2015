#pragma strict

public var currentSet = 1;

var NotDestroyedObject : NotDestroyedObject;



public var cratorSet = "inCamp";
public var konstalSet = "inCamp";
public var alunaSet = "inTent";
public var estherSet = "inTent";
public var milkySet = "inTent";

public var heldChar = "None";

public var convoNumThisMove = 0;
public var SetNum = 1;
public var moved = false;
public var justClickedChar = "Aluna";
public var inCutscene = false;
public var currentCutscene = "None";





//DIALOGUES
public var startPart2 = false;
	//part 2
	public var alunaLookedAtFootprints = false;
	public var alunaKnowsMilkyFootprints = false;
	public var estherLookedAtFootprints = false;
	public var milkyLookedAtFootprints = false;
	public var konstalLookedAtFootprints = false;
	public var cratorLookedAtFootprints = false;
	public var alunaShowedAllFootprints = false;
	
	public var alunaIsPreganant = false;
	public var estherIsPreganant = false;
	public var cratorIsPreganant = false;
	public var konstalIsPreganant = false;
	public var milkyIsPreganant = true;
	
	public var allTalk_alunaIsPreganant = false;
	public var allTalk_estherIsPreganant = false;
	public var allTalk_cratorIsPreganant = false;
	public var allTalk_konstalIsPreganant = false;
	
	public var milkyAlunaTalkAboutKonstalPreg = true;
	public var regrouped = false;
	
	public var clicked = false;
	



function Start () {
	
	//IF THIS IS THE SECOND PART OF THE GAME, THIS WILL PULL VARIABLES FROM THE NOT DESTROYED OBJ
	if (Application.loadedLevelName == "MainScene_Part2" )
	{	
		var obj = GameObject.Find("notDestroyedObject");
		NotDestroyedObject = obj.GetComponent("NotDestroyedObject");
		
		alunaIsPreganant = NotDestroyedObject.alunaIsPreganant;
		konstalIsPreganant = NotDestroyedObject.konstalIsPreganant;
		cratorIsPreganant = NotDestroyedObject.cratorIsPreganant;
		estherIsPreganant = NotDestroyedObject.estherIsPreganant;
	
	}

}

function Update () {


}