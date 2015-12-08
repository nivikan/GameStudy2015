#pragma strict

var AlunaAnim : Animator;
var CratorAnim : Animator;
var EstherAnim : Animator;
var MilkyAnim : Animator;
var KonstalAnim : Animator;

var storeVars : storeVars;

var prevHeld = "None";
var curHeld = "None";

function Start () {
	var game = GameObject.Find("GameObject");
	storeVars = game.GetComponent("storeVars");
}

function Update () {
	curHeld = storeVars.heldChar;
	
	if (prevHeld != curHeld)
	{
		if (curHeld == "Aluna")
		{
			AlunaAnim.SetBool("isHeld", true);
		}
		/*
		if (curHeld == "Crator")
		{
			CratorAnim.SetBool("isHeld", true);
		}
		
		if (curHeld == "Esther")
		{
			EstherAnim.SetBool("isHeld", true);
		}
		
		if (curHeld == "Milky")
		{
			MilkyAnim.SetBool("isHeld", true);
		}
		
		if (curHeld == "Konstal")
		{
			KonstalAnim.SetBool("isHeld", true);
		}
		*/
		
		if (curHeld == "None")
		{
			AlunaAnim.SetBool("isHeld", false);
			//CratorAnim.SetBool("isHeld", false);
			//EstherAnim.SetBool("isHeld", false);
			//MilkyAnim.SetBool("isHeld", false);
			//KonstalAnim.SetBool("isHeld", false);
		}
		
		prevHeld = curHeld;
	
	
	
	}



}