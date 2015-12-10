#pragma strict

//get the universal script to store values
var storeVars : storeVars;

public var alunaIsPreganant = false;
public var estherIsPreganant = false;
public var cratorIsPreganant = false;
public var konstalIsPreganant = false;
public var milkyIsPreganant = true;

function Start () {

	var game = GameObject.Find("GameObject");
	storeVars = game.GetComponent("storeVars");

}

function Update () {
	if (storeVars != null)
	{
		if (storeVars.SetNum == 1)
		{
			alunaIsPreganant = storeVars.alunaIsPreganant;
			konstalIsPreganant = storeVars.konstalIsPreganant;
			cratorIsPreganant = storeVars.cratorIsPreganant;
			estherIsPreganant = storeVars.estherIsPreganant;
		}
	
	}

}