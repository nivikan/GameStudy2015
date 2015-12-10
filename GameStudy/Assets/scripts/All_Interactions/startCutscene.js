//#pragma strict

public var cutsceneState = 0;



var dialogue: dialogues;
var storeVars : storeVars;
var aluna : GameObject;
var konstal : GameObject;
var crator : GameObject;
var esther : GameObject;
var milky : GameObject;

var kostalPregScene : GameObject;
var estherPregScene : GameObject;
var cratorPregScene : GameObject;
var alunaPregScene : GameObject;


var blackFlash : Animator;
var currentAnim: Animator;



function Start () {

	var game = GameObject.Find("GameObject");
	storeVars = game.GetComponent("storeVars");
	dialogue = game.GetComponent("dialogues");
	

}



function Update () {

	if (storeVars.inCutscene == true)
	{
		
		
		if (storeVars.currentCutscene == "konstalPreg")
		{
			konstal.SetActive(false);
			currentAnim = kostalPregScene.GetComponent.<Animator>();
			blackFlash.Play("fadeIn-fadeOut");
			kostalPregScene.SetActive(true);
			
			if (currentAnim.GetCurrentAnimatorStateInfo(0).IsName("Empty"))
 			{
    			// Avoid any reload.
    			blackFlash.Play("fadeIn-fadeOut");
    			storeVars.inCutscene = false;
    			kostalPregScene.SetActive(false);
    			
 			}
			
			
		}
		
		if (storeVars.currentCutscene == "cratorPreg")
		{
			crator.SetActive(false);
			currentAnim = cratorPregScene.GetComponent.<Animator>();
			blackFlash.Play("fadeIn-fadeOut");
			cratorPregScene.SetActive(true);
			
			if (currentAnim.GetCurrentAnimatorStateInfo(0).IsName("Empty"))
 			{
 				print ("Hit Empty");
    			// Avoid any reload.
    			blackFlash.Play("fadeIn-fadeOut");
    			storeVars.inCutscene = false;
    			cratorPregScene.SetActive(false);
    			print ("Done");
    			
 			}
			
		}
		
		if (storeVars.currentCutscene == "estherPreg")
		{
			esther.SetActive(false);
			currentAnim = estherPregScene.GetComponent.<Animator>();
			blackFlash.Play("fadeIn-fadeOut");
			estherPregScene.SetActive(true);
			
			if (currentAnim.GetCurrentAnimatorStateInfo(0).IsName("Empty"))
 			{
 				
    			// Avoid any reload.
    			blackFlash.Play("fadeIn-fadeOut");
    			storeVars.inCutscene = false;
    			estherPregScene.SetActive(false);
    			
 			}
			
		}
		
		if (storeVars.currentCutscene == "alunaPreg")
		{
			aluna.SetActive(false);
			currentAnim = alunaPregScene.GetComponent.<Animator>();
			blackFlash.Play("fadeIn-fadeOut");
			alunaPregScene.SetActive(true);
			
			if (currentAnim.GetCurrentAnimatorStateInfo(0).IsName("Empty"))
 			{
    			// Avoid any reload.
    			blackFlash.Play("fadeIn-fadeOut");
    			storeVars.inCutscene = false;
    			alunaPregScene.SetActive(false);
    			
 			}
			
		}
		
		
	
	}
	else if (aluna.active == false)
	{
			aluna.SetActive(true);

	}
	else if (crator.active == false)
	{
			crator.SetActive(true);

	}
	else if (esther.active == false)
	{
			esther.SetActive(true);

	}
	else if (konstal.active == false)
	{
			konstal.SetActive(true);

	}

}







