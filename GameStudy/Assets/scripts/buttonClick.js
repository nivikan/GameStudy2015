#pragma strict

//get the universal script to store values
var storeVars : storeVars;


function Start () {
	var game = GameObject.Find("GameObject");
	storeVars = game.GetComponent("storeVars");

}

function Update () {

}


function OnMouseUp () {
	storeVars.clicked = true;
}