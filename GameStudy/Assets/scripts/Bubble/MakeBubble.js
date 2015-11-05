#pragma strict
import UnityEngine.UI;

var canvas : Canvas;
var prefab : GameObject;
var newBubble: GameObject;




function Start () {

}

function Update () {

if ((Input.GetKeyDown ("space")) == true)
{

//makeBubble(0,0, "hello...?", new Color(0.25,0.50,0.49,1), new Color(0.80,0.96,0.96,1));
}

}

function makeBubble(instantiatex, instantiatey, speech, speechColor, textColor, character)
{
	newBubble = Instantiate(prefab, new Vector3(instantiatex, instantiatey, 0), transform.rotation);
	newBubble.transform.GetChild(1).GetComponent.<UnityEngine.UI.Image>().color = speechColor;
	newBubble.transform.GetChild(1).GetChild(0).GetComponent.<UnityEngine.UI.Image>().sprite = character;
	newBubble.transform.GetChild(0).GetComponent.<UnityEngine.UI.Text>().text = speech;
	newBubble.transform.GetChild(0).GetComponent.<UnityEngine.UI.Text>().color = textColor;
	newBubble.GetComponent.<Image>().color = speechColor;
	newBubble.transform.parent = canvas.transform;
	
	//deleteBubble(instantiatex, instantiatey, newBubble);
	
	
 } 
 

 
 
 