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

makeBubble(0,0, "hello...?", new Color(0.25,0.50,0.49,1), new Color(0.80,0.96,0.96,1));
}

}

function makeBubble(instantiatex, instantiatey, speech, speechColor, textColor)
{
	newBubble = Instantiate(prefab, new Vector3(instantiatex, instantiatey, 0), transform.rotation);
	newBubble.transform.GetChild(0).GetComponent.<UnityEngine.UI.Text>().text = speech;
	newBubble.transform.GetChild(0).GetComponent.<UnityEngine.UI.Text>().color = textColor;
	newBubble.GetComponent.<Image>().color = speechColor;
	newBubble.transform.parent = canvas.transform;
	
	//deleteBubble(instantiatex, instantiatey, newBubble);
	
	var count = 100;
 	while(count> 0)
 	{
 	newBubble.transform.position.y = newBubble.transform.position.y ;
 	//instantiatey++;
 	count--;
 	}
	
 } 
 

 
 
 